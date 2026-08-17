/**
 * QUICK NOTES — Valid Anagram
 *
 * Pattern:
 * Hashing + Character Frequency Counting
 *
 * Core Idea:
 * Two strings are anagrams if they contain exactly the same characters
 * with exactly the same frequencies.
 *
 * Instead of sorting both strings, we count the frequency of every
 * character in the first string and then use the second string to
 * decrease those frequencies.
 *
 * If a character does not exist in the frequency map, or its frequency
 * has already reached 0, then `t` contains an extra occurrence of that
 * character and cannot be an anagram of `s`.
 *
 * Key Trick:
 * Use one frequency map:
 *
 * 1. Count every character in `s`.
 * 2. Decrease the count while traversing `t`.
 * 3. If any count becomes invalid, return `false`.
 *
 * Time Complexity:
 * O(n)
 * - We traverse both strings once.
 * - HashMap operations are O(1) on average.
 *
 * Space Complexity:
 * O(k)
 * - k = number of unique characters.
 * - For lowercase English letters, this is effectively O(1).
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
 * Explanation:
 * Both strings contain the same characters with the same frequencies.
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
 * Explanation:
 * `t` contains `c`, which does not exist in `s`.
 *
 * ------------------------------------------------------------
 *
 * APPROACH:
 * Character Frequency Map
 *
 * Step 1:
 * Check whether both strings have the same length.
 *
 * Anagrams must contain exactly the same number of characters.
 * If their lengths are different, immediately return `false`.
 *
 * Step 2:
 * Create a HashMap called `characterFrequency`.
 *
 * The key will be a character, and the value will be the number
 * of times that character appears in `s`.
 *
 * Example:
 *
 * s = "anagram"
 *
 * characterFrequency:
 * {
 *     a: 3,
 *     n: 1,
 *     g: 1,
 *     r: 1,
 *     m: 1
 * }
 *
 * Step 3:
 * Traverse every character of `s` and increment its frequency.
 *
 * Step 4:
 * Traverse every character of `t`.
 *
 * For each character:
 *
 * - If the character does not exist in the map, return `false`.
 * - If its frequency is already 0, return `false`.
 * - Otherwise, decrease its frequency by 1.
 *
 * Step 5:
 * If every character in `t` can successfully consume a matching
 * character from `s`, return `true`.
 *
 * ------------------------------------------------------------
 *
 * WHY THIS WORKS:
 *
 * The frequency map represents how many occurrences of each character
 * are still available from `s`.
 *
 * Example:
 *
 * s = "anagram"
 * t = "nagaram"
 *
 * After counting `s`:
 *
 * a -> 3
 * n -> 1
 * g -> 1
 * r -> 1
 * m -> 1
 *
 * While processing `t`, every matching character decreases its count.
 *
 * Eventually, all required characters from `t` can be matched against
 * characters from `s`.
 *
 * If `t` contains a character that does not exist in `s`, or contains
 * it more times than `s`, we immediately return `false`.
 *
 * ------------------------------------------------------------
 *
 * SIMPLE INTUITION:
 *
 * Count what `s` has, then use `t` to consume those characters.
 *
 * If `t` ever asks for a character that is unavailable,
 * they are not anagrams.
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
 *
 * 2. Frequency Counting:
 *    Count characters and compare their frequencies.
 *    Time: O(n)
 *
 * Frequency counting is more efficient because it avoids sorting.
 *
 * Also, the length check is important because anagrams must have
 * the same number of characters.
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

    // Store the frequency of every character in the first string.
    //
    // Example:
    // "anagram" -> { a: 3, n: 1, g: 1, r: 1, m: 1 }
    const characterFrequency = new Map();

    // Count how many times each character appears in `s`.
    for (const char of s) {

        // Get the current frequency of the character.
        // If the character does not exist yet, use 0.
        // Then increase its frequency by 1.
        characterFrequency.set(
            char,
            (characterFrequency.get(char) || 0) + 1
        );
    }

    // Traverse the second string and consume the character frequencies.
    for (const char of t) {

        // If the character does not exist in `s`, or we have already
        // consumed all occurrences of that character, `t` cannot be
        // an anagram of `s`.
        if (!characterFrequency.has(char) || characterFrequency.get(char) === 0) {
            return false;
        }

        // Decrease the available frequency because this occurrence
        // of the character has now been matched.
        characterFrequency.set(
            char,
            characterFrequency.get(char) - 1
        );
    }

    // Every character in `t` was successfully matched with a character
    // from `s`, so the two strings are anagrams.
    return true;
};