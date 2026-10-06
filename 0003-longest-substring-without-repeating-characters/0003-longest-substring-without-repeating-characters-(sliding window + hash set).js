/**
 * QUICK NOTES — Longest Substring Without Repeating Characters
 *
 * Pattern:
 * Sliding Window + Hash Set
 *
 * Core Idea:
 * Maintain a window containing only unique characters.
 * Expand the window with the right pointer and shrink it from
 * the left whenever a duplicate character is found.
 *
 * Key Trick:
 * When a duplicate is found, keep removing characters from the
 * left side until the duplicate is removed from the window.
 *
 * Time / Space Complexity:
 * Time: O(n)
 * Each character is added to and removed from the Set at most once,
 * so the total number of operations is proportional to n.
 *
 * Space: O(n)
 * The Set can contain up to n unique characters in the window.
 *
 * Why I struggled:
 * The key is understanding that the left pointer does not restart.
 * It only moves forward when a duplicate is encountered, allowing
 * the window to be processed efficiently.
 */

/**
 * Problem:
 * Find the length of the longest substring that contains no
 * repeating characters.
 *
 * Rules:
 * - A substring must contain consecutive characters.
 * - Every character in the substring must be unique.
 * - Return the maximum length of such a substring.
 *
 * Example:
 * s = "abcabcbb"
 *
 * Output:
 * 3
 *
 * ------------------------------------------------------------
 * Approach: Sliding Window
 * ------------------------------------------------------------
 *
 * Step 1:
 * Use two pointers to represent the current substring window.
 *
 * Step 2:
 * Move the right pointer forward and add each new character
 * to the Set when it has not been seen in the current window.
 *
 * Step 3:
 * If the character already exists in the Set, move the left
 * pointer forward and remove characters until the duplicate
 * character is no longer present.
 *
 * Step 4:
 * After the window contains only unique characters, calculate
 * its length and update the maximum length found so far.
 *
 * ------------------------------------------------------------
 * Why this works:
 * - The Set always represents the unique characters in the window.
 * - The left pointer only moves forward, so no character is
 *   unnecessarily processed from the beginning again.
 * - Every valid window is considered while expanding the right pointer.
 *
 * Simple Intuition:
 * Expand the window until a duplicate appears, then shrink it
 * from the left until all characters are unique again.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    let leftPointer = 0;

    let maxSubstringLength = 0;

    const uniqueCharacters = new Set();

    for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {

        /**
         * If the current character already exists in the window,
         * shrink the window from the left until the duplicate
         * character is removed.
         */
        while (uniqueCharacters.has(s[rightPointer])) {
            uniqueCharacters.delete(s[leftPointer]);
            leftPointer++;
        }

        // Add the current character after the window becomes valid.
        uniqueCharacters.add(s[rightPointer]);

        // Calculate the current window length and update the maximum.
        const currentWindowLength = (rightPointer - leftPointer) + 1;

        maxSubstringLength = Math.max(
            maxSubstringLength,
            currentWindowLength
        );
    }

    return maxSubstringLength;
};