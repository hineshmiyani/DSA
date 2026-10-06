/**
 * QUICK NOTES — Longest Substring Without Repeating Characters
 *
 * Pattern:
 * Sliding Window + Hash Map
 *
 * Core Idea:
 * Maintain a sliding window containing unique characters.
 * Store the latest index of each character in a Map so we can
 * jump the left pointer directly past a duplicate character.
 *
 * Key Trick:
 * When a duplicate character is found, move the left pointer to
 * `previousIndex + 1` instead of removing characters one by one.
 *
 * Time / Space Complexity:
 * Time: O(n)
 * Each character is processed once, and the left pointer only moves
 * forward. The Map provides O(1) average-time lookups and updates.
 *
 * Space: O(n)
 * The Map can store up to n unique characters.
 *
 * Why I struggled:
 * The important part is checking whether the previous occurrence of
 * a character is still inside the current window before moving the
 * left pointer.
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
 * Approach: Sliding Window + Hash Map
 * ------------------------------------------------------------
 *
 * Step 1:
 * Use a left pointer to represent the beginning of the current
 * substring window.
 *
 * Step 2:
 * Store each character's most recent index in a Map.
 *
 * Step 3:
 * When a duplicate character is found, check whether its previous
 * occurrence is inside the current window.
 *
 * Step 4:
 * If it is inside the window, move the left pointer directly to
 * one position after that previous occurrence.
 *
 * Step 5:
 * Update the character's index and calculate the current window
 * length.
 *
 * ------------------------------------------------------------
 * Why this works:
 * - The Map tells us exactly where the duplicate character appeared.
 * - We can jump the left pointer instead of moving it one character
 *   at a time.
 * - The condition `previousIndex >= leftPointer` prevents the left
 *   pointer from moving backward.
 *
 * Simple Intuition:
 * Remember the last position of every character and jump the left
 * pointer past a duplicate when necessary.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    let leftPointer = 0;

    let maxSubstringLength = 0;

    const characterLastIndex = new Map();

    for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {

        if (!characterLastIndex.has(s[rightPointer])) {

            characterLastIndex.set(s[rightPointer], rightPointer);

        } else {

            const previousIndex = characterLastIndex.get(s[rightPointer]);

            /**
             * Only move the left pointer if the previous occurrence
             * is inside the current window.
             *
             * If previousIndex is already before leftPointer, that
             * occurrence is no longer part of the current window.
             */
            if (previousIndex >= leftPointer) {
                leftPointer = previousIndex + 1;
            }

            characterLastIndex.set(s[rightPointer], rightPointer);
        }

        const currentWindowLength =
            (rightPointer - leftPointer) + 1;

        maxSubstringLength = Math.max(
            maxSubstringLength,
            currentWindowLength
        );
    }

    return maxSubstringLength;
};