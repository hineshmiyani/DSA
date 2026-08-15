/**
 * @article  : https://algo.monster/liteproblems/76
 * @question : https://leetcode.com/problems/minimum-window-substring
 * @question : https://neetcode.io/problems/minimum-window-with-characters
 */

/*
  ✅ Problem Statement: 

  Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

  The testcases will be generated such that the answer is unique.

  Example 1:
  Input: s = "ADOBECODEBANC", t = "ABC"
  Output: "BANC"
  Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

  Example 2:
  Input: s = "a", t = "a"
  Output: "a"
  Explanation: The entire string s is the minimum window.

  Example 3:
  Input: s = "a", t = "aa"
  Output: ""
  Explanation: Both 'a's from t must be included in the window.
  Since the largest window of s only has one 'a', return empty string.

*/

// Optimal Solution

/*
  Step-by-step approach:

  1. Edge Case Handling: If either input string `s` or `t` is empty, return an empty string immediately.

  2. Character Count Maps: Use two maps to keep track of character counts:
     - `targetCharCount`: Tracks the count of each character in `t`.
     - `windowCharCount`: Tracks the count of each character in the current window of `s`.

  3. Populate targetCharCount: Iterate through `t` and populate `targetCharCount` with the frequency of   each character.
  
  4. Initialize Variables:
     - `result`: Stores the start and end indices of the minimum window found.
     - `minLength`: Tracks the length of the minimum window.
     - `matchedChars`: Counts how many characters in the current window match the required count in `t`.
     - `requiredChars`: Total number of unique characters in `t` that need to be matched.
     - `left`: Left pointer of the sliding window.
  
  5. Expand the Window: Iterate through `s` with a right pointer:
     - Add the current character to `windowCharCount`.
     - If the character's count matches the required count in `t`, increment `matchedChars`.

  6. Contract the Window: While all required characters are matched (`matchedChars === requiredChars`):
     - Update the result if the current window is smaller than the previously found minimum window.
     - Remove the leftmost character from the window and update `windowCharCount`.
     - If removing the character affects the matched count, decrement `matchedChars`.
     - Move the left pointer to the right.

  7. Return Result: If a valid window is found, return the substring of `s` corresponding to the minimum  window. Otherwise, return an empty string.
  
*/

/**
 * Finds the minimum window substring in `s` that contains all characters of `t`.
 */
const minWindow = (s, t) => {
  // Edge case: if either string is empty, return an empty string
  if (s.length === 0 || t.length === 0) {
    return "";
  }

  // Maps to keep track of character counts in `t` and the current window in `s`
  const targetCharCount = new Map();
  const windowCharCount = new Map();

  // Populate targetCharCount with characters from `t`
  for (const char of t) {
    targetCharCount.set(char, (targetCharCount.get(char) || 0) + 1);
  }

  // Initialize variables to keep track of the minimum window
  let result = [-1, -1]; // Stores the start and end indices of the minimum window
  let minLength = Infinity; // Length of the minimum window found

  let matchedChars = 0; // Number of characters that match the required count in `t`
  const requiredChars = targetCharCount.size; // Total unique characters in `t` that need to be matched

  let left = 0; // Left pointer of the window

  // Expand the window by moving the right pointer
  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    windowCharCount.set(char, (windowCharCount.get(char) || 0) + 1);

    // Check if the current character matches the required count in `t`
    if (
      targetCharCount.has(char) &&
      windowCharCount.get(char) === targetCharCount.get(char)
    ) {
      matchedChars++;
    }

    // Contract the window from the left as long as all required characters are matched
    while (matchedChars === requiredChars) {
      // Update the result if the current window is smaller
      if (right - left + 1 < minLength) {
        result = [left, right + 1];
        minLength = right - left + 1;
      }

      // Remove the leftmost character from the window
      const leftChar = s[left];
      windowCharCount.set(leftChar, windowCharCount.get(leftChar) - 1);

      // Check if the removed character affects the matched count
      if (
        targetCharCount.has(leftChar) &&
        windowCharCount.get(leftChar) < targetCharCount.get(leftChar)
      ) {
        matchedChars--;
      }

      left++;
    }
  }

  // Return the minimum window substring or an empty string if no valid window is found
  return result[0] === -1 ? "" : s.slice(result[0], result[1]);
};

// Example 1 Input
const s1 = "ADOBECODEBANC";
const t1 = "ABC";

// Example 2 Input
const s2 = "a";
const t2 = "a";

// Example 3 Input
const s3 = "a";
const t3 = "aa";

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The length of the minimum window substring is: ",
  minWindow(s1, t1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The length of the minimum window substring is: ",
  minWindow(s2, t2)
);
console.log("\n ------------- Example 3: ------------- \n");
console.log(
  "The length of the minimum window substring is: ",
  minWindow(s3, t3)
);

// Time Complexity
// The time complexity of the `minWindowSubstring` function is (O(n + m)), where (n) is the length of string `s` and \(m\) is the length of string `t`. This is because:
// 1. We iterate through string `t` once to populate the `targetCharCount` map, which takes (O(m)) time.
// 2. We iterate through string `s` once with the right pointer and potentially once more with the left pointer, which takes (O(n)) time.

// Space Complexity
// The space complexity of the `minWindowSubstring` function is (O(n + m)), where (n) is the length of string s and (m) is the length of string t. This is because:
// 1. The `targetCharCount` map can store up to (m) unique characters from string t.
// 2. The `windowCharCount` map can store up to (n) unique characters from string s in the worst case.
