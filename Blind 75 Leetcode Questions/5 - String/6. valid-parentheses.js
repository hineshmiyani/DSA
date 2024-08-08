/**
 * @article  : https://algo.monster/liteproblems/20
 * @question : https://leetcode.com/problems/valid-parentheses
 * @question : https://neetcode.io/problems/validate-parentheses
 */

/*
  ✅ Problem Statement: 

  Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

  An input string is valid if:
  1. Open brackets must be closed by the same type of brackets.
  2. Open brackets must be closed in the correct order.
  3. Every close bracket has a corresponding open bracket of the same type.

  Example 1:
  Input: s = "()"
  Output: true

  Example 2:
  Input: s = "()[]{}"
  Output: true

  Example 3:
  Input: s = "(]"
  Output: false

*/

// Optimal Solution

/*
  # Step-by-step approach:

  1. Initialize an empty stack to keep track of opening parentheses.
  
  2. Create a dictionary `parentheses` to map each closing parenthesis to its corresponding opening parenthesis.

  3. Iterate through each character in the input string:
     a. Check if the character is a closing parenthesis by looking it up in the `parentheses` dictionary.
     b. If it is not a closing parenthesis, push it onto the stack (it must be an opening parenthesis).
     c. If it is a closing parenthesis, check if the last element in the stack matches the corresponding opening parenthesis:
        i. If it matches, pop the last element from the stack.
        ii. If it does not match, return false immediately as the string is not valid.

  4. After processing all characters, check if the stack is empty:
     a. If the stack is empty, return true as all parentheses were matched correctly.
     b. If the stack is not empty, return false as there are unmatched opening parentheses.
*/

/**
 * Function to check if a given string has valid parentheses.
 *
 * This function uses a stack to ensure that every opening parenthesis has a corresponding
 * closing parenthesis in the correct order.
 */
const isValidParentheses = (string) => {
  // Initialize an empty stack to keep track of opening parentheses.
  const stack = [];

  // Define a mapping of closing parentheses to their corresponding opening parentheses.
  const parentheses = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  // Iterate over each character in the input string.
  for (const char of string) {
    // Check if the current character is a closing parenthesis.
    const isCloseParentheses = char in parentheses;

    // Get the last element from the stack (the most recent opening parenthesis).
    const lastElement = stack[stack.length - 1];

    // If the character is not a closing parenthesis, push it onto the stack.
    if (!isCloseParentheses) {
      stack.push(char);
    } else {
      // If the character is a closing parenthesis, check if it matches the last opening parenthesis.
      if (parentheses[char] === lastElement) {
        // If it matches, pop the last element from the stack.
        stack.pop();
      } else {
        // If it doesn't match, the parentheses are not valid.
        return false;
      }
    }
  }

  // If the stack is empty, all opening parentheses had matching closing parentheses.
  return stack.length === 0;
};

// Example 1 Input
const string1 = "()[]{}";

// Example 2 Input
const string2 = "(])";

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("Is valid parentheses: ", isValidParentheses(string1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("Is valid parentheses: ", isValidParentheses(string2));

// # Time Complexity: O(n), where (n) is the length of the input string.
// This is because the function iterates over each character in the string exactly once.

// # Space Complexity: O(n) in the worst case, where (n) is the length of the input string.
// This occurs when all characters in the string are opening parentheses, resulting in all of them being pushed onto the stack.
