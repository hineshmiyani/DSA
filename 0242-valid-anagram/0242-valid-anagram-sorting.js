/**
 * QUICK NOTES — Valid Anagram
 *
 * Pattern:
 * Sorting + String Comparison
 *
 * Core Idea:
 * Two strings are anagrams if they contain the same characters
 * with the same frequencies.
 *
 * By sorting both strings, anagrams will produce the exact same
 * sorted string.
 *
 * Key Trick:
 * Sort both strings and compare the sorted results.
 *
 * Time Complexity:
 * O(n log n)
 *
 * Space Complexity:
 * O(n)
 *
 * ------------------------------------------------------------
 *
 * PROBLEM:
 *
 * Given two strings `s` and `t`, return `true` if `t` is an anagram
 * of `s`, and `false` otherwise.
 *
 * Example:
 *
 * Input:
 * s = "anagram"
 * t = "nagaram"
 *
 * Output:
 * true
 *
 * ------------------------------------------------------------
 *
 * APPROACH:
 * Sort Both Strings
 *
 * Step 1:
 * Check whether both strings have the same length.
 *
 * If their lengths are different, they cannot be anagrams.
 *
 * Step 2:
 * Sort the characters of `s`.
 *
 * Step 3:
 * Sort the characters of `t`.
 *
 * Step 4:
 * Compare the two sorted strings.
 *
 * If they are equal, both strings contain the same characters
 * with the same frequencies.
 *
 * ------------------------------------------------------------
 *
 * WHY THIS WORKS:
 *
 * The order of characters does not matter for anagrams.
 *
 * Sorting both strings puts their characters into the same order.
 *
 * Example:
 *
 * "anagram" -> "aaagmnr"
 * "nagaram" -> "aaagmnr"
 *
 * Since both sorted strings are identical, they are anagrams.
 *
 * ------------------------------------------------------------
 *
 * SIMPLE INTUITION:
 *
 * Sort both strings.
 *
 * Same sorted string -> Anagram.
 * Different sorted string -> Not an anagram.
 *
 * ------------------------------------------------------------
 *
 * INTERVIEW TIP:
 *
 * There are two common approaches:
 *
 * 1. Sorting:
 *    Sort both strings and compare them.
 *    Time: O(n log n)
 *    Space: O(n)
 *
 * 2. Character Frequency Counting:
 *    Count how many times each character appears in both strings
 *    and compare their frequencies.
 *    Time: O(n)
 *    Space: O(1) for a fixed lowercase English alphabet.
 *
 * The sorting approach is simpler and easier to implement.
 * The frequency-counting approach is more efficient when the input
 * is restricted to lowercase English letters.
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

    // Sort all characters of the first string alphabetically.
    //
    // Example:
    // "anagram" -> "aaagmnr"
    const sortedStringS = s.split("").sort().join("");

    // Sort all characters of the second string alphabetically.
    //
    // Example:
    // "nagaram" -> "aaagmnr"
    const sortedStringT = t.split("").sort().join("");

    // If both sorted strings are identical, they contain the same
    // characters with the same frequencies.
    return sortedStringS === sortedStringT;
};