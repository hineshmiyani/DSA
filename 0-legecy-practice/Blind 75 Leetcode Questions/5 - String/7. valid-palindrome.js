/**
 * @article  : https://algo.monster/liteproblems/125
 * @question : https://leetcode.com/problems/valid-palindrome
 * @question : https://neetcode.io/problems/is-palindrome
 */

/*
  ✅ Problem Statement: 

  A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.
  Alphanumeric characters include letters and numbers.

  Given a string s, return true if it is a palindrome, or false otherwise.

  Example 1:
  Input: s = "A man, a plan, a canal: Panama"
  Output: true
  Explanation: "amanaplanacanalpanama" is a palindrome.

  Example 2:
  Input: s = "race a car"
  Output: false
  Explanation: "raceacar" is not a palindrome.


  Example 3:
  Input: s = " "
  Output: true
  Explanation: s is an empty string "" after removing non-alphanumeric characters.
  Since an empty string reads the same forward and backward, it is a palindrome.

*/

// Brute-force Solution

/*
  # Step-by-step approach:

  1. Normalize the input string:
     - Convert the string to lowercase to ensure the comparison is case-insensitive.
     - Remove all non-alphanumeric characters using a regular expression. This ensures hat only letters and numbers are considered in the palindrome check.
 
  2. Reverse the normalized string:
     - Split the normalized string into an array of characters.
     - Reverse the array of characters.
     - Join the reversed array back into a string.
 
  3. Compare the normalized string with the reversed string:
     - If they are equal, the original string is a palindrome.
     - If they are not equal, the original string is not a palindrome.
 
  This approach ensures that the palindrome check is done in a case-insensitive manner and ignores any non-alphanumeric characters.
*/

/**
 * Checks if a given string is a palindrome.
 * A palindrome is a word, phrase, number, or other sequence of characters
 * that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).
 *
 * @param {string} string - The input string to be checked.
 * @returns {boolean} - Returns true if the input string is a palindrome, false otherwise.
 */
const isPalindromeSolution1 = (string) => {
  // Normalize the string by converting it to lowercase and removing all non-alphanumeric characters.
  const normalizedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Reverse the normalized string.
  const reverseString = normalizedString.split("").reverse().join("");

  // Check if the normalized string is equal to its reversed version.
  return normalizedString === reverseString;
};

// Optimal Solution

/*
  # Step-by-step approach:

  1. Normalize the input string:
     - Convert the string to lowercase to ensure the comparison is case-insensitive.
     - Remove all non-alphanumeric characters using a regular expression. This ensures that only letters and numbers are considered in the palindrome check.

  2. Initialize two pointers:
     - `left` pointer starting at the beginning of the normalized string.
     - `right` pointer starting at the end of the normalized string.

  3. Use a while loop to compare characters from both ends towards the center:
     - Continue the loop as long as `left` is less than `right`.
     - If the characters at the `left` and `right` pointers do not match, return `false` as the string is not a palindrome.
     - If the characters match, move the `left` pointer one step to the right and the `right` pointer one step to the left.

  4. If the loop completes without finding any mismatched characters, return `true` indicating the string is a palindrome.
*/

/**
 * Checks if a given string is a palindrome, considering only alphanumeric characters and ignoring cases.
 *
 * A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward
 * (ignoring spaces, punctuation, and capitalization).
 *
 * @param {string} string - The input string to be checked.
 * @returns {boolean} - Returns true if the input string is a palindrome, otherwise false.
 */
const isPalindromeSolution2 = (string) => {
  // Normalize the string: convert to lowercase and remove non-alphanumeric characters
  const normalizedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Initialize two pointers: one at the beginning and one at the end of the normalized string
  let left = 0;
  let right = normalizedString.length - 1;

  // Loop until the two pointers meet in the middle
  while (left < right) {
    // If characters at the current pointers do not match, the string is not a palindrome
    if (normalizedString[left] !== normalizedString[right]) {
      return false;
    }

    // Move the left pointer to the right and the right pointer to the left
    left = left + 1;
    right = right - 1;
  }

  // If all characters matched, the string is a palindrome
  return true;
};

// Example 1 Input
const string1 = "A man, a plan, a canal: Panama";

// Example 2 Input
const string2 = "race a car";

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("Is valid palindrome: ", isPalindromeSolution1(string1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("Is valid palindrome: ", isPalindromeSolution1(string2));

// # Time Complexity: O(n), where (n) is the length of the input string.
// This is because each operation (normalization, reversing, and comparison) processes the entire string linearly.

// # Space Complexity: O(n)
// Due to the additional space required to store the normalizedString and reverseString, both of which can be up to the length of the input string.

console.log("\n\n ------------- Solution 2: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("Is valid palindrome: ", isPalindromeSolution2(string1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("Is valid palindrome: ", isPalindromeSolution2(string2));

// # Time Complexity: O(n), where (n) is the length of the input string.
// This is because the function processes each character in the string a constant number of times: once for normalization and once for the palindrome check.

// # Space Complexity: O(n)
// Due to the creation of the normalizedString, which stores a copy of the input string with non-alphanumeric characters removed and all characters converted to lowercase.
