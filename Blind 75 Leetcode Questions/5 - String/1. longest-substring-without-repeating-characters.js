/**
 * @article  : https://takeuforward.org/data-structure/length-of-longest-substring-without-any-repeating-character/
 * @question : https://leetcode.com/problems/longest-substring-without-repeating-characters
 * @question : https://neetcode.io/problems/longest-substring-without-duplicates
 */

/*
  ✅ Problem Statement: 

  Given a string s, find the length of the longest substring without repeating characters.

  Example 1:
  Input: s = "abcabcbb"
  Output: 3
  Explanation: The answer is "abc", with the length of 3.

  Example 2:
  Input: s = "bbbbb"
  Output: 1
  Explanation: The answer is "b", with the length of 1.

  Example 3:
  Input: s = "pwwkew"
  Output: 3
  Explanation: The answer is "wke", with the length of 3.
  Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

// Brute-force Solution

/*
  Step-by-Step Approach:
  1. Initialize a variable `maxLength` to 0. This will keep track of the maximum length of the substring found without repeating characters.
  2. Use an outer loop to iterate over each character in the string. The loop variable `i` will represent the starting index of the substring.
  3. Inside the outer loop, initialize a `Set` called `charSet` to keep track of characters in the current substring.
  4. Use an inner loop to iterate over the characters starting from index `i`. The loop variable `j` will represent the ending index of the substring.
  5. In the inner loop, check if the character at index `j` is already in `charSet`.
    - If it is, break the inner loop as we have found a repeating character.
    - If it is not, add the character to `charSet`.
  6. Update `maxLength` to be the maximum of its current value and the length of the current substring (`j - i + 1`).
  7. Continue the process until all possible substrings starting from each index `i` are checked.
  8. Return the value of `maxLength` which now contains the length of the longest substring without repeating characters.
*/

/**
 * Function to find the length of the longest substring without repeating characters.
 * This implementation uses a brute-force approach with a nested loop.
 */
const lengthOfLongestSubstringSolution1 = (string) => {
  // Initialize the maximum length of substring found to 0
  let maxLength = 0;

  // Outer loop to iterate over each character in the string
  for (let i = 0; i < string.length; i++) {
    // Initialize a set to keep track of characters in the current substring
    const charSet = new Set();

    // Inner loop to check for the longest substring starting from index i
    for (let j = i; j < string.length; j++) {
      // If the character is already in the set, break the inner loop
      if (charSet.has(string[j])) {
        break;
      }

      // Add the character to the set
      charSet.add(string[j]);

      // Update the maximum length if the current substring is longer
      maxLength = Math.max(maxLength, j - i + 1);
    }
  }

  // Return the maximum length of substring found
  return maxLength;
};

// Optimal Solution

/*
  Step-by-Step Approach:
  1. Initialize `maxLength` to 0. This will store the maximum length of the substring found without repeating characters.
  2. Initialize `left` pointer to 0. This will represent the left boundary of the sliding window.
  3. Create a `charSet` using a Set to keep track of characters in the current window.
  4. Iterate over the string using a `right` pointer from 0 to the end of the string.
    a. If the character at the `right` pointer is already in `charSet`, it means we have a duplicate.
    b. Remove characters from the `charSet` starting from the `left` pointer until the duplicate character is removed.
    c. Move the `left` pointer to the right by incrementing it.
  5. Add the current character at the `right` pointer to the `charSet`.
  6. Update `maxLength` to be the maximum of its current value and the length of the current window (`right - left + 1`).
  7. After the loop ends, return `maxLength` which contains the length of the longest substring without repeating characters.
*/

/**
 * Function to find the length of the longest substring without repeating characters.
 * This implementation uses the sliding window technique with a set to track characters.
 */
const lengthOfLongestSubstringSolution2 = (string) => {
  // Initialize the maximum length of substring found to 0
  let maxLength = 0;

  // Initialize the left pointer of the sliding window to 0
  let left = 0;

  // Initialize a set to keep track of characters in the current window
  const charSet = new Set();

  // Iterate over the string with the right pointer
  for (let right = 0; right < string.length; right++) {
    // If the character at the right pointer is already in the set,
    // remove characters from the left pointer until the duplicate is removed
    while (charSet.has(string[right])) {
      charSet.delete(string[left]);
      left = left + 1; // Move the left pointer to the right
    }

    // Add the current character to the set
    charSet.add(string[right]);

    // Update the maximum length of substring found
    maxLength = Math.max(maxLength, right - left + 1);
  }

  // Return the maximum length of substring found
  return maxLength;
};

// Example 1 Input
const string1 = "abcabcbb";

// Example 2 Input
const string2 = "bbbbb";

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The length of the longest substring without repeating characters is: ",
  lengthOfLongestSubstringSolution1(string1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The length of the longest substring without repeating characters is: ",
  lengthOfLongestSubstringSolution1(string2)
);

// Time Complexity: O(n^2), where (n) is the length of the input string.
// This is because the function uses a nested loop structure:
// The outer loop runs (n) times, iterating over each character in the string.
// The inner loop can run up to (n) times in the worst case for each iteration of the outer loop, leading to a quadratic time complexity.

// Space Complexity: O(n)
// his is due to the use of a Set to store characters of the current substring:
// In the worst case, the Set can contain up to (n) unique characters if the substring being considered has all unique characters.
// Other variables (maxLength, i, j) use constant space, which does not affect the overall space complexity.

console.log("\n\n ------------- Solution 2: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The length of the longest substring without repeating characters is: ",
  lengthOfLongestSubstringSolution2(string1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The length of the longest substring without repeating characters is: ",
  lengthOfLongestSubstringSolution2(string2)
);

// Time Complexity: O(n), where (n) is the length of the input string.
// This is because each character in the string is processed at most twice: once by the right pointer and once by the left pointer. The inner while loop ensures that each character is added and removed from the charSet at most once, making the overall time complexity linear.

// Space Complexity: O(min(n, m)), where (n) is the length of the input string and (m) is the size of the character set (e.g., 26 for lowercase English letters).
// This is because the charSet can hold at most the number of unique characters in the string, which is bounded by the size of the character set. In the worst case, the charSet will contain all unique characters from the input string.
