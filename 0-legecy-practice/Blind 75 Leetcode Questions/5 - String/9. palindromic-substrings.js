/**
 * @article  : https://algo.monster/liteproblems/647
 * @question : https://leetcode.com/problems/palindromic-substrings
 * @question : https://neetcode.io/problems/palindromic-substrings
 */

/*
  ✅ Problem Statement: 

  Given a string s, return the number of palindromic substrings in it.
  A string is a palindrome when it reads the same backward as forward.
  A substring is a contiguous sequence of characters within the string.

  Example 1:
  Input: s = "abc"
  Output: 3
  Explanation: Three palindromic strings: "a", "b", "c".


  Example 2:
  Input: s = "aaa"
  Output: 6
  Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

*/

// # Brute-force Solution

/*
  # Step-by-step approach:

  1. Define a Helper Function (`isPalindrome`):
     - This function checks if a given string is a palindrome.
     - Initialize two pointers, `left` at the start (0) and `right` at the end (string.length - 1) of the string.
     - Use a loop to move the pointers towards the center:
       - If the characters at `left` and `right` pointers do not match, return `false` (not a palindrome).
       - If they match, move `left` pointer one step to the right and `right` pointer one step to the left.
     - If the loop completes without finding mismatched characters, return `true` (it is a palindrome).
  
  2. Main Function (`countPalindromicSubstringsSolution1`):
     - Initialize a counter `count` to keep track of the number of palindromic substrings.
     - Use a nested loop to generate all possible substrings of the input string:
       - The outer loop runs from the start to the end of the string.
       - The inner loop generates substrings starting from the current position of the outer loop to the end of the string.
     - For each generated substring, use the `isPalindrome` function to check if it is a palindrome:
       - If it is a palindrome, increment the `count` by 1.
     - After all substrings have been checked, return the `count` which represents the total number of palindromic substrings.
  
  This approach ensures that all possible substrings are checked for being palindromic, and the helper function efficiently determines if a substring is a palindrome.
 */

/**
 * Checks if a given string is a palindrome.
 * A palindrome is a string that reads the same backward as forward.
 *
 * @param {string} string - The string to check.
 * @returns {boolean} - Returns true if the string is a palindrome, otherwise false.
 */
const isPalindrome = function (string) {
  let left = 0; // Initialize left pointer at the start of the string
  let right = string.length - 1; // Initialize right pointer at the end of the string

  // Loop until the pointers meet in the middle
  while (left < right) {
    // If characters at left and right pointers don't match, it's not a palindrome
    if (string[left] !== string[right]) {
      return false; // Return false if mismatch is found
    }

    // Move the pointers towards the center
    left = left + 1; // Increment left pointer
    right = right - 1; // Decrement right pointer
  }

  // If the loop completes without returning false, the string is a palindrome
  return true;
};

/**
 * Counts the number of palindromic substrings in a given string.
 * A palindromic substring is a substring that reads the same backward as forward.
 *
 * @param {string} string - The string to check for palindromic substrings.
 * @returns {number} - Returns the count of palindromic substrings.
 */
const countPalindromicSubstringsSolution1 = (string) => {
  let count = 0; // Initialize count of palindromic substrings

  // Iterate over each character in the string as the starting point of substrings
  for (let i = 0; i < string.length; i++) {
    let substring = ""; // Initialize an empty substring

    // Iterate over each character from the starting point to the end of the string
    for (let j = i; j < string.length; j++) {
      substring = substring + string[j]; // Build the substring character by character

      // Check if the current substring is a palindrome
      if (isPalindrome(substring)) {
        count = count + 1; // Increment count if the substring is a palindrome
      }
    }
  }

  return count; // Return the total count of palindromic substrings
};

// # Optimal Solution

/*
  # Step-by-step approach:
  
  1. Define a helper function `expandAroundCenter` that takes a string and two indices (`left` and `right`).
     - Initialize a counter `substringsCount` to 0.
     - Use a `while` loop to expand around the center as long as the characters at `left` and `right` are equal and within bounds.
     - For each valid expansion, increment the `substringsCount`.
     - Decrement `left` and increment `right` to expand further.
     - Return the count of palindromic substrings found during this expansion.
  
  2. Define the main function `countPalindromicSubstringsSolution2` that takes a string as input.
     - Initialize a counter `substringsCount` to 0.
     - Iterate through each character in the string using a `for` loop.
     - For each character, call `expandAroundCenter` twice:
       a. Once with the same index for both `left` and `right` to handle odd-length palindromes.
       b. Once with `right` being the next index to handle even-length palindromes.
     - Add the counts returned by both calls to `substringsCount`.
  
  3. Return the total count of palindromic substrings.
  
  This approach ensures that all possible palindromic substrings are counted by expanding around each character and each pair of characters in the string.
 */

/**
 * Expands around the center of a potential palindrome and counts palindromic substrings.
 *
 * This function checks for palindromic substrings by expanding outwards from the center.
 * It starts with two pointers, `left` and `right`, and moves them outward as long as the characters
 * at these positions are equal and within the bounds of the string.
 *
 * @param {string} string - The input string to check for palindromic substrings.
 * @param {number} left - The starting left index for expansion.
 * @param {number} right - The starting right index for expansion.
 * @returns {number} - The count of palindromic substrings found by expanding around the center.
 */
const expandAroundCenter = (string, left, right) => {
  let substringsCount = 0;

  // Expand as long as the characters on both sides are equal and within bounds
  while (left >= 0 && right < string.length && string[left] === string[right]) {
    substringsCount = substringsCount + 1; // Found a palindrome

    left = left - 1; // Move left pointer to the left
    right = right + 1; // Move right pointer to the right
  }

  return substringsCount;
};

/**
 * Counts all palindromic substrings in the given string.
 *
 * This function uses the expandAroundCenter helper function to count palindromic substrings
 * by considering each character and each pair of consecutive characters as potential centers
 * of palindromes.
 *
 * @param {string} string - The input string to check for palindromic substrings.
 * @returns {number} - The total count of palindromic substrings in the input string.
 */
const countPalindromicSubstringsSolution2 = (string) => {
  let substringsCount = 0;

  // Iterate over each character in the string
  for (let i = 0; i < string.length; i++) {
    // Count palindromes with odd length centered at i
    const count1 = expandAroundCenter(string, i, i);

    // Count palindromes with even length centered between i and i+1
    const count2 = expandAroundCenter(string, i, i + 1);

    // Add the counts from both cases to the total count
    substringsCount = substringsCount + count1 + count2;
  }

  return substringsCount;
};

// Example 1 Input
const string1 = "abc";

// Example 2 Input
const string2 = "aaa";

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The longest palindromic substring is: ",
  countPalindromicSubstringsSolution1(string1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The longest palindromic substring is: ",
  countPalindromicSubstringsSolution1(string2)
);

// # Time Complexity: O(n^3), where n is the length of the input string.
// This is because there are two nested loops (each running n times) to generate all substrings, and for each substring, the isPalindrome function (which is O(n)) is called.

// # Space Complexity: O(1), as it uses a constant amount of extra space for variables like count and substring.
// Note that substring is built character by character, but it does not affect the overall space complexity significantly.

console.log("\n\n ------------- Solution 2: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The longest palindromic substring is: ",
  countPalindromicSubstringsSolution2(string1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The longest palindromic substring is: ",
  countPalindromicSubstringsSolution2(string2)
);

// # Time Complexity : O(n^2), where (n) is the length of the string.
// The expandAroundCenter function has a time complexity of (O(n)) in the worst case, where (n) is the length of the string. This is because, in the worst case, it expands from the center to the edges of the string.
// The countPalindromicSubstringsSolution2 function iterates over each character in the string and calls expandAroundCenter twice for each character. Therefore, the overall time complexity is (O(n^2)), where (n) is the length of the string.

// # Space Complexity: O(1)
// The space complexity for both expandAroundCenter and countPalindromicSubstringsSolution2 is (O(1)) because they use a constant amount of extra space regardless of the input size.
