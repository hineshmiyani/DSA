/**
 * QUICK NOTES — Valid Anagram
 *
 * Pattern:
 * Hashing + Character Frequency Array
 *
 * Core Idea:
 * Two strings are anagrams if every character appears the same number
 * of times in both strings.
 *
 * Instead of using a HashMap or sorting the strings, we use a fixed
 * array of size 26 to track the difference in character frequencies.
 *
 * For every character:
 * - Increment its frequency for `s`.
 * - Decrement its frequency for `t`.
 *
 * If `s` and `t` are anagrams, every frequency will eventually become 0.
 *
 * Key Trick:
 * Process both strings simultaneously using the same frequency array.
 *
 * Example:
 *
 * s = "anagram"
 * t = "nagaram"
 *
 * For every character:
 *     frequency[s[i]]++
 *     frequency[t[i]]--
 *
 * If both strings contain exactly the same characters with the same
 * frequencies, all values in the array will be 0.
 *
 * Time Complexity:
 * O(n)
 * - We traverse both strings once.
 * - We traverse the 26-element frequency array once.
 * - The final 26-element traversal is O(1), so overall complexity is O(n).
 *
 * Space Complexity:
 * O(1)
 * - The frequency array always contains exactly 26 elements.
 *
 * ------------------------------------------------------------
 *
 * PROBLEM:
 *
 * Given two strings `s` and `t`, return `true` if `t` is an anagram
 * of `s`, and `false` otherwise.
 *
 * Anagrams contain the same characters with the same frequencies,
 * but the characters can appear in a different order.
 *
 * Example 1:
 *
 * Input:
 * s = "anagram"
 * t = "nagaram"
 *
 * Output:
 * true
 *
 * Example 2:
 *
 * Input:
 * s = "rat"
 * t = "car"
 *
 * Output:
 * false
 *
 * ------------------------------------------------------------
 *
 * APPROACH:
 * Character Frequency Difference Array
 *
 * Step 1:
 * Check whether both strings have the same length.
 *
 * Anagrams must contain the same number of characters.
 * If the lengths are different, immediately return `false`.
 *
 * Step 2:
 * Create a frequency array of size 26.
 *
 * Each index represents a lowercase English character:
 *
 * 0  -> 'a'
 * 1  -> 'b'
 * 2  -> 'c'
 * ...
 * 25 -> 'z'
 *
 * Step 3:
 * Traverse both strings using the same index.
 *
 * For the character at position `i`:
 *
 *     s[i] -> increment its frequency
 *     t[i] -> decrement its frequency
 *
 * This effectively calculates:
 *
 *     frequency in s - frequency in t
 *
 * Step 4:
 * After processing both strings, traverse the frequency array.
 *
 * If every value is 0:
 *     Both strings contain exactly the same characters with
 *     exactly the same frequencies.
 *
 * If any value is not 0:
 *     At least one character has a different frequency.
 *
 * Therefore, return `false`.
 *
 * ------------------------------------------------------------
 *
 * WHY THIS WORKS:
 *
 * The frequency array stores the difference between the character
 * frequencies of `s` and `t`.
 *
 * Example:
 *
 * s = "aab"
 * t = "aba"
 *
 * Processing `s`:
 *
 * a -> +1
 * a -> +1
 * b -> +1
 *
 * Processing `t`:
 *
 * a -> -1
 * b -> -1
 * a -> -1
 *
 * Final result:
 *
 * a -> 0
 * b -> 0
 *
 * Since every frequency is 0, the strings are anagrams.
 *
 * If one string contains an extra character, its frequency will not
 * cancel out and at least one position will remain non-zero.
 *
 * ------------------------------------------------------------
 *
 * SIMPLE INTUITION:
 *
 * Add characters from `s` and remove characters from `t`.
 *
 * Everything cancels to zero -> anagram.
 * Something remains -> not anagram.
 *
 * ------------------------------------------------------------
 *
 * INTERVIEW TIP:
 *
 * This approach is more efficient than sorting:
 *
 * Sorting:
 * Time: O(n log n)
 * Space: O(n)
 *
 * Frequency Array:
 * Time: O(n)
 * Space: O(1)
 *
 * Since the problem is restricted to lowercase English letters,
 * a fixed array of 26 elements is ideal.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    // Anagrams must contain the same number of characters.
    // If the lengths are different, they cannot be anagrams.
    if (s.length !== t.length) {
        return false;
    }

    // Store the frequency difference between characters in `s` and `t`.
    //
    // Index 0 represents 'a', index 1 represents 'b', and so on.
    const frequencyCount = new Array(26).fill(0);

    // Process both strings simultaneously.
    for (let i = 0; i < s.length; i++) {

        // Convert the current character from `s` into an index from 0 to 25.
        const sourceCharIndex = s[i].charCodeAt() - "a".charCodeAt();

        // Add one because this character exists in `s`.
        frequencyCount[sourceCharIndex]++;

        // Convert the current character from `t` into an index from 0 to 25.
        const targetCharIndex = t[i].charCodeAt() - "a".charCodeAt();

        // Subtract one because this character needs to be matched by `s`.
        frequencyCount[targetCharIndex]--;
    }

    // Every character should have a frequency difference of zero.
    for (const frequency of frequencyCount) {

        // A non-zero value means the character appears a different
        // number of times in the two strings.
        if (frequency !== 0) {
            return false;
        }
    }

    // All character frequencies matched exactly.
    return true;
};