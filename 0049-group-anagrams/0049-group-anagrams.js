/**
 * QUICK NOTES — Group Anagrams
 *
 * Pattern:
 * Hashing + Character Frequency Counting
 *
 * Core Idea:
 * Two strings are anagrams if they contain the exact same characters
 * with the exact same frequencies.
 *
 * Instead of sorting each string, we create a frequency array of size 26.
 * This frequency array acts as a unique "fingerprint" for the string.
 *
 * Example:
 * "eat" -> a:1, e:1, t:1
 * "tea" -> a:1, e:1, t:1
 *
 * Both produce the same frequency pattern, so they belong to the
 * same anagram group.
 *
 * Key Trick:
 * Use the 26-character frequency array as the HashMap key.
 *
 * Time Complexity:
 * O(n * k)
 * - n = number of strings
 * - k = average length of a string
 *
 * Space Complexity:
 * O(n * k)
 * - HashMap stores all strings.
 * - Each frequency key contains only 26 counts, which is O(1).
 *
 * ------------------------------------------------------------
 *
 * PROBLEM:
 *
 * Given an array of strings, group the anagrams together.
 *
 * Anagrams are strings that contain the same characters with the
 * same frequencies, but the characters can appear in a different order.
 *
 * Example:
 *
 * Input:
 * ["eat", "tea", "tan", "ate", "nat", "bat"]
 *
 * Output:
 * [
 *     ["eat", "tea", "ate"],
 *     ["tan", "nat"],
 *     ["bat"]
 * ]
 *
 * ------------------------------------------------------------
 *
 * APPROACH:
 * HashMap + Character Frequency Array
 *
 * Step 1:
 * Create a HashMap called `anagramGroups`.
 *
 * The key represents the character-frequency pattern, and the value
 * stores all strings having that same pattern.
 *
 * Step 2:
 * For every string, create a frequency array of size 26.
 *
 * Each position represents one lowercase English character:
 *
 * 0  -> 'a'
 * 1  -> 'b'
 * 2  -> 'c'
 * ...
 * 25 -> 'z'
 *
 * Step 3:
 * Traverse every character of the current string.
 *
 * Convert the character into an index using:
 *
 * char.charCodeAt() - "a".charCodeAt()
 *
 * Then increment the frequency at that index.
 *
 * Step 4:
 * Convert the frequency array into a string using "#" as a separator.
 *
 * This gives us a unique frequency key.
 *
 * Example:
 *
 * "eat" and "tea"
 *
 * Both produce the same frequency key because their character
 * frequencies are identical.
 *
 * Step 5:
 * Check whether this frequency key already exists.
 *
 * If it exists:
 *     Add the current string to the existing group.
 *
 * If it does not exist:
 *     Create a new group for this frequency pattern.
 *
 * Step 6:
 * Return all the groups stored inside the HashMap.
 *
 * ------------------------------------------------------------
 *
 * WHY THIS WORKS:
 *
 * The order of characters does not matter for anagrams.
 *
 * What matters is how many times each character appears.
 *
 * For example:
 *
 * "eat":
 * a = 1
 * e = 1
 * t = 1
 *
 * "tea":
 * a = 1
 * e = 1
 * t = 1
 *
 * Their frequency arrays are identical.
 *
 * Therefore, they generate the same HashMap key and are placed
 * into the same group.
 *
 * "tan":
 * a = 1
 * n = 1
 * t = 1
 *
 * Its frequency array is different, so it gets a different key.
 *
 * ------------------------------------------------------------
 *
 * SIMPLE INTUITION:
 *
 * Give every string a "character fingerprint".
 *
 * Same fingerprint -> same anagram group.
 *
 * ------------------------------------------------------------
 *
 * INTERVIEW TIP:
 *
 * There are two common approaches:
 *
 * 1. Sort each string and use the sorted string as the key.
 *    Time: O(n * k log k)
 *
 * 2. Count character frequencies and use the frequency pattern as the key.
 *    Time: O(n * k)
 *
 * When the input contains only lowercase English letters,
 * frequency counting is the more efficient approach.
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {

    // Store each unique frequency pattern and its corresponding
    // group of anagram strings.
    const anagramGroups = new Map();

    // Process every string one by one.
    for (const str of strs) {

        // Create a frequency array for all 26 lowercase English letters.
        // Index 0 represents 'a', index 1 represents 'b', and so on.
        const frequencyCount = new Array(26).fill(0);

        // Count how many times each character appears in the string.
        for (const char of str) {

            // Convert the character into an index between 0 and 25.
            //
            // Example:
            // 'a' -> 0
            // 'e' -> 4
            // 'z' -> 25
            const charIndex = char.charCodeAt() - "a".charCodeAt();

            // Increment the frequency of the current character.
            frequencyCount[charIndex]++;
        }

        // Convert the frequency array into a string so it can be
        // used as a unique key in the HashMap.
        //
        // All anagrams will produce the exact same frequency key.
        const frequencyKey = frequencyCount.join("#");

        // If this frequency pattern already exists,
        // add the current string to its existing anagram group.
        if (anagramGroups.has(frequencyKey)) {

            // Retrieve the existing group and add the current string.
            // Using push() avoids creating a new array unnecessarily.
            anagramGroups.get(frequencyKey).push(str);

        } else {

            // This is the first string with this frequency pattern,
            // so create a new group containing the current string.
            anagramGroups.set(frequencyKey, [str]);
        }
    }

    // Return all anagram groups stored as the HashMap values.
    return [...anagramGroups.values()];
};