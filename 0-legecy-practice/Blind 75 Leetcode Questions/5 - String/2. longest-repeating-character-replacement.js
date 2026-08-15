/**
 * @article  : https://www.designgurus.io/viewer/document/grokking-the-coding-interview/63dd9aec488110f74a92c09f
 * @article  : https://algo.monster/liteproblems/424
 * @question : https://leetcode.com/problems/longest-repeating-character-replacement
 * @question : https://neetcode.io/problems/longest-repeating-substring-with-replacement
 */

/*
  ✅ Problem Statement: 

  You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
  Return the length of the longest substring containing the same letter you can get after performing the above operations.

  Example 1:
  Input: s = "ABAB", k = 2
  Output: 4
  Explanation: Replace the two 'A's with two 'B's or vice versa.

  Example 2:
  Input: s = "AABABBA", k = 1
  Output: 4
  Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
  The substring "BBBB" has the longest repeating letters, which is 4.
  There may exists other ways to achieve this answer too.

*/

// Brute-force Solution

/*
  Step-by-step approach:
  1. Initialize `maxLength` to keep track of the maximum length of the valid substring found so far.
  2. Iterate over each character in the string using an outer loop with index `i` as the starting point of the substring.
  3. For each starting point `i`, create a `charMap` to keep track of the frequency of each character in the current window.
  4. Use an inner loop with index `j` to iterate over each character from the starting point `i` to the end of the string.
  5. Update the frequency of the current character `string[j]` in the `charMap`.
  6. Calculate the count of the most frequent character in the current window using `Math.max(...charMap.values())`.
  7. Check if the current window is valid by comparing the number of replacements needed (`j - i + 1 - mostFrequentCharCount`) with `k`.
  8. If the current window is valid, update `maxLength` with the maximum value between `maxLength` and the length of the current window (`j - i + 1`).
  9. If the current window is not valid, break out of the inner loop to move to the next starting point.
  10. Continue the process until all possible starting points have been evaluated.
  11. Return the `maxLength` which represents the maximum length of the valid substring found.
*/

/**
 * Finds the length of the longest substring that can be obtained by replacing at most `k` characters.
 */
const characterReplacementSolution1 = (string, k) => {
  // Initialize the maximum length of the substring found so far.
  let maxLength = 0;

  // Iterate over each character in the string as the starting point of the substring.
  for (let i = 0; i < string.length; i++) {
    // Map to keep track of the frequency of each character in the current window.
    const charMap = new Map();

    // Iterate over each character from the starting point to the end of the string.
    for (let j = i; j < string.length; j++) {
      // Update the frequency of the current character in the map.
      charMap.set(string[j], (charMap.get(string[j]) || 0) + 1);

      // Find the count of the most frequent character in the current window.
      const mostFrequentCharCount = Math.max(...charMap.values());

      // Check if the current window is valid by comparing the number of replacements needed with `k`.
      if (j - i + 1 - mostFrequentCharCount <= k) {
        // Update the maximum length if the current window is valid.
        maxLength = Math.max(maxLength, j - i + 1);
      } else {
        // If the current window is not valid, break out of the inner loop.
        break;
      }
    }
  }

  // Return the maximum length of the valid substring found.
  return maxLength;
};

// Optimal Solution

/*
  Step-by-Step Approach:
  1. Initialize `maxLength` to 0 to keep track of the maximum length of the substring found so far.
  2. Initialize `left` pointer to 0 to represent the start of the sliding window.
  3. Create a `charMap` (Map) to keep track of the frequency of characters in the current window.
  4. Iterate over the string using a `right` pointer to represent the end of the sliding window.
     a. For each character at `right`, update its frequency in `charMap`.
     b. Calculate the count of the most frequent character in the current window.
     c. If the number of characters to be replaced (current window size - most frequent character count) exceeds `k`, shrink the window from the left:
        i. Decrease the frequency of the character at the `left` pointer in `charMap`.
        ii. Move the `left` pointer to the right by 1.
     d. Update `maxLength` with the maximum value between the current `maxLength` and the size of the current window.
  5. Return `maxLength` as the result, which represents the maximum length of the substring after at most `k` replacements.
*/

/**
 * Finds the length of the longest substring that can be obtained by replacing at most `k` characters
 * in the given string `string` such that all characters in the substring are the same.
 */
const characterReplacementSolution2 = (string, k) => {
  // Initialize the maximum length of the substring found so far to 0.
  let maxLength = 0;

  // Initialize the left pointer of the sliding window to 0.
  let left = 0;

  // Create a map to keep track of the frequency of characters in the current window.
  const charMap = new Map();

  // Iterate over the string with the right pointer of the sliding window.
  for (let right = 0; right < string.length; right++) {
    // Update the frequency of the current character in the map.
    charMap.set(string[right], (charMap.get(string[right]) || 0) + 1);

    // Find the count of the most frequent character in the current window.
    const mostFrequentCharCount = Math.max(...charMap.values());

    // If the number of characters to be replaced exceeds `k`, shrink the window from the left.
    while (right - left + 1 - mostFrequentCharCount > k) {
      // Decrease the frequency of the character at the left pointer.
      charMap.set(string[left], (charMap.get(string[left]) || 0) - 1);

      // Move the left pointer to the right.
      left = left + 1;
    }

    // Update the maximum length of the substring found so far.
    maxLength = Math.max(maxLength, right - left + 1);
  }

  // Return the maximum length of the substring after at most `k` replacements.
  return maxLength;
};

// Example 1 Input
const string1 = "ABAB";
const k1 = 2;

// Example 2 Input
const string2 = "AABABBA";
const k2 = 1;

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The length of the longest substring with repeating characters replacement is: ",
  characterReplacementSolution1(string1, k1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The length of the longest substring with repeating characters replacement is: ",
  characterReplacementSolution1(string2, k2)
);

// Time Complexity: O(n^2), where (n) is the length of the input string.
// This is because there are two nested loops: the outer loop runs (n) times, and the inner loop can run up to (n) times in the worst case.
// Additionally, within the inner loop, the Math.max(...charMap.values()) operation takes (O(n)) time in the worst case, but since it is inside the nested loops, it does not change the overall quadratic complexity.

// Space Complexity: O(1) in terms of additional space used, excluding the input string
// This is because the charMap can hold at most 26 entries (one for each letter of the English alphabet), which is a constant space usage. Therefore, the space complexity is (O(1)).

console.log("\n\n ------------- Solution 2: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The length of the longest substring with repeating characters replacement is: ",
  characterReplacementSolution2(string1, k1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The length of the longest substring with repeating characters replacement is: ",
  characterReplacementSolution2(string2, k2)
);

// Time Complexity: O(n), where (n) is the length of the input string.
// This is because each character in the string is processed at most twice: once by the right pointer and once by the left pointer.
// The operations inside the loop, such as updating the charMap and calculating the mostFrequentCharCount, are performed in constant time (O(1)) due to the limited number of characters (assuming the input consists of a fixed alphabet like English letters).

// Space Complexity: O(1) with respect to the input size
// This is because the charMap can hold at most a fixed number of characters (e.g., 26 for lowercase English letters), making its space usage constant.
// Other variables (maxLength, left, right, mostFrequentCharCount) also use constant space. Therefore, the overall space complexity is (O(1)).
