/**
 * @article  : https://algo.monster/liteproblems/5
 * @question : https://leetcode.com/problems/longest-palindromic-substring
 * @question : https://neetcode.io/problems/longest-palindromic-substring
 */

/*
  ✅ Problem Statement: 

  Given a string s, return the longest palindromic substring in s.

  Example 1:
  Input: s = "babad"
  Output: "bab"
  Explanation: "aba" is also a valid answer.


  Example 2:
  Input: s = "cbbd"
  Output: "bb"

*/

// # Brute-force Solution

/*
  # Step-by-step approach:

  1. Define a helper function `isPalindrome` to check if a given string is a palindrome.
  2. Initialize `longestPalindromeString` as an empty string to store the longest palindrome found.
  3. Iterate through each character in the input `string` using a nested loop.
  4. For each character, create a substring starting from that character and extending to the end of the `string`.
  5. Check if the substring is a palindrome using the `isPalindrome` function and if its length is greater than the length of the current `longestPalindromeString`.
  6. If both conditions are met, update `longestPalindromeString` with the current substring.
  7. Continue this process for all possible substrings in the input `string`.
  8. Finally, return the `longestPalindromeString` found, which is the longest palindromic substring in the input `string`.
*/

/**
 * Check if a given string is a palindrome.
 * @param {string} string - The input string to check for palindrome.
 * @returns {boolean} - True if the input string is a palindrome, false otherwise.
 */
const isPalindrome = function (string) {
  let left = 0;
  let right = string.length - 1;

  // Loop until the pointers meet in the middle
  while (left < right) {
    // If characters at left and right pointers don't match, it's not a palindrome
    if (string[left] !== string[right]) {
      return false;
    }

    // Move the pointers towards the center
    left = left + 1;
    right = right - 1;
  }

  // If the loop completes without returning false, the string is a palindrome
  return true;
};

/**
 * Find the longest palindrome substring in a given string.
 * @param {string} string - The input string to find the longest palindrome substring.
 * @returns {string} - The longest palindrome substring found in the input string.
 */
const longestPalindromeSolution1 = (string) => {
  let longestPalindromeString = "";

  // Iterate through each character in the string
  for (let i = 0; i < string.length; i++) {
    let substring = "";

    // Generate all possible substrings starting from index i
    for (let j = i; j < string.length; j++) {
      substring = substring + string[j];

      // Check if the substring is a palindrome and longer than the current longest palindrome
      if (
        isPalindrome(substring) &&
        substring.length > longestPalindromeString.length
      ) {
        longestPalindromeString = substring;
      }
    }
  }

  // Return the longest palindrome substring found
  return longestPalindromeString;
};

// # Optimal Solution

/*
  # Step-by-step approach:

  1. Define a helper function `expandAroundCenter` that takes a string, left, and right indices as parameters. 
     - This function expands around the center (left and right indices) while the characters at those indices are equal and within the string boundaries.
  2. Define the main function `longestPalindromeSolution2` that takes a string as input.
  3. Check if the input string is empty, return an empty string if true.
  4. Initialize variables `start` and `end` to keep track of the longest palindrome substring indices.
  5. Iterate over each character in the string using a for loop.
  6. For each character, expand around the center by calling `expandAroundCenter` twice:
     - Once assuming the current character as the center for odd-length palindromes.
     - Once assuming the current character and the next character as the center for even-length palindromes.
  7. Calculate the maximum length of the palindrome found at the current center using `Math.max`.
  8. If the current palindrome length is greater than the previous longest palindrome length, update the `start` and `end` indices to the new palindrome substring indices.
  9. Finally, return the longest palindrome substring found in the input string using the `start` and `end` indices.

  This approach efficiently finds the longest palindrome substring by expanding around each character in the string and considering both odd and even-length palindromes.

*/

/**
 * This function expands around the center of a potential palindrome in a given string.
 * It checks if the characters to the left and right of the center are the same, and if so,
 * it continues expanding outwards until it finds the largest palindrome centered at that position.
 *
 * @param {string} string - The string in which to search for the palindrome.
 * @param {number} left - The starting left index to begin expansion.
 * @param {number} right - The starting right index to begin expansion.
 * @returns {number} The length of the palindrome found.
 */
const expandAroundCenter = (string, left, right) => {
  // Expand while the characters on both sides match, and indices are within bounds
  while (left >= 0 && right < string.length && string[left] === string[right]) {
    left = left - 1; // Move left pointer outward (to the left)
    right = right + 1; // Move right pointer outward (to the right)
  }

  // Return the length of the palindrome found by subtracting the final positions
  // Note: We subtract 1 because the last increment/decrement in the loop goes one step too far
  return right - left - 1;
};

/**
 * This function finds the longest palindromic substring within a given string using the
 * expand around center approach. It checks every possible center of a palindrome (including
 * both odd and even length palindromes) and returns the longest one found.
 *
 * @param {string} string - The string to search for the longest palindromic substring.
 * @returns {string} The longest palindromic substring found in the input string.
 */
const longestPalindromeSolution2 = (string) => {
  // If the string is empty, there can't be any palindrome, so return an empty string
  if (string.length === 0) return "";

  let start = 0; // Start index of the longest palindrome found
  let end = 0; // End index of the longest palindrome found

  // Iterate over each character in the string, treating it as a potential center of a palindrome
  for (let i = 0; i < string.length; i++) {
    // Check for the longest odd-length palindrome with center at i
    let length1 = expandAroundCenter(string, i, i);

    // Check for the longest even-length palindrome with center between i and i+1
    let length2 = expandAroundCenter(string, i, i + 1);

    // Determine the maximum length found from the two checks
    const maxLength = Math.max(length1, length2);

    // If the found palindrome is longer than the previously recorded one, update the start and end indices
    if (maxLength > end - start) {
      // Calculate the new start and end indices based on the maxLength
      start = i - Math.floor((maxLength - 1) / 2);
      end = i + Math.floor(maxLength / 2);
    }
  }

  // Return the longest palindromic substring found
  return string.slice(start, end + 1);
};

// Example 1 Input
const string1 = "babad";

// Example 2 Input
const string2 = "cbbd";

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The longest palindromic substring is: ",
  longestPalindromeSolution1(string1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The longest palindromic substring is: ",
  longestPalindromeSolution1(string2)
);

// #Time Complexity:  O(n^3), where n is the length of the input `string`
// 1. `isPalindrome` function: O(n), where n is the length of the input `string`.
// The function compares characters from both ends towards the middle, resulting in a linear time complexity.

// 2. `longestPalindromeSolution1` function: O(n^3), where n is the length of the input `string`.
// This complexity arises from nested loops iterating through each character and generating all possible substrings, resulting in a cubic time complexity.

// #Space Complexity:  O(n), where n is the length of the input `string`.
// 1. `isPalindrome` function: O(1)
// The function uses a constant amount of extra space for two pointers (`left` and `right`) regardless of the input size.

// 2. `longestPalindromeSolution1` function: O(n), where n is the length of the input `string.
// The function stores the longest palindrome substring found, which could be up to the size of the input string, leading to a linear space complexity.

console.log("\n\n ------------- Solution 2: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The longest palindromic substring is: ",
  longestPalindromeSolution2(string1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The longest palindromic substring is: ",
  longestPalindromeSolution2(string2)
);

/*
 # Time Complexity:  O(n^2), where n is the length of the input `string`.
 - The `expandAroundCenter` function has a time complexity of O(n) where n is the length of the input `string`.
   This is because in the worst case, it expands to both ends of the string for each center position.
 - The `longestPalindromeSolution2` function iterates through each character in the `string` and for each character,
   it calls `expandAroundCenter` twice. Therefore, the overall time complexity is O(n^2), where n is the length of the input `string`.
 
 # Space Complexity: O(1)
 - The `expandAroundCenter` function has a space complexity of O(1) as it uses a constant amount of extra space regardless of the input size.
 - The `longestPalindromeSolution2` function uses only a constant amount of extra space for variables like `start`, `end`, `length1`, `length2`, and `maxLength`.
   Hence, the space complexity is O(1) as well.
*/
