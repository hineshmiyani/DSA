/**
 * QUICK NOTES — Longest Substring Without Repeating Characters
 *
 * Pattern:
 * Brute Force + Hash Set
 *
 * Core Idea:
 * Start a new substring from every possible index and expand it
 * character by character until a duplicate character is found.
 *
 * Key Trick:
 * Use a Set to quickly check whether the current character has
 * already appeared in the current substring.
 *
 * Time / Space Complexity:
 * Time: O(n²)
 * For every starting index, we may scan the remaining characters
 * until we find a duplicate. In the worst case, this results in
 * roughly n × n operations.
 *
 * Space: O(n)
 * The Set can store up to n unique characters for a substring.
 *
 * Why I struggled:
 * The important part is understanding that each starting position
 * creates a new substring search, and we stop as soon as a duplicate
 * character is found.
 */

/**
 * Problem:
 * Find the length of the longest substring that contains no
 * repeating characters.
 *
 * Rules:
 * - A substring must contain consecutive characters.
 * - Every character in the substring must be unique.
 * - Return only the maximum length.
 *
 * Example:
 * s = "abcabcbb"
 *
 * Longest substrings without repeating characters:
 * "abc", "bca", "cab"
 *
 * Output:
 * 3
 *
 * ------------------------------------------------------------
 * Approach: Brute Force
 * ------------------------------------------------------------
 *
 * Step 1:
 * Start from every possible character as the beginning of a substring.
 *
 * Step 2:
 * Use a Set to keep track of characters already seen in the
 * current substring.
 *
 * Step 3:
 * Expand the substring one character at a time.
 * If the character has not been seen, add it to the Set.
 *
 * Step 4:
 * If a duplicate character is found, stop expanding the current
 * substring and move to the next starting position.
 *
 * ------------------------------------------------------------
 * Why this works:
 * - Every possible starting position is considered.
 * - Each substring is expanded until it contains a duplicate.
 * - The maximum length found across all starting positions is
 *   the answer.
 *
 * Simple Intuition:
 * Try every possible starting point and keep extending until
 * a character repeats.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    let maxSubstringLength = 0;

    for (let startIndex = 0; startIndex < s.length; startIndex++) {

        const seenCharacters = new Set();

        let currentSubstringLength = 0;

        for (
            let currentIndex = startIndex;
            currentIndex < s.length;
            currentIndex++
        ) {
            /**
             * If the current character has already appeared,
             * the current substring can no longer contain only
             * unique characters.
             */
            if (!seenCharacters.has(s[currentIndex])) {

                seenCharacters.add(s[currentIndex]);
                currentSubstringLength++;

            } else {
                break;
            }
        }

        // Keep track of the longest valid substring found so far.
        maxSubstringLength = Math.max(
            maxSubstringLength,
            currentSubstringLength
        );
    }

    // Return the length of the longest substring without duplicates.
    return maxSubstringLength;
};