/**
 * QUICK NOTES — Group Anagrams
 *
 * Pattern:
 * Hashing + Sorting
 *
 * Core Idea:
 * Two strings are anagrams if sorting their characters produces
 * the exact same string.
 *
 * Example:
 *
 * "eat" -> "aet"
 * "tea" -> "aet"
 * "ate" -> "aet"
 *
 * Since all three strings produce the same sorted string,
 * they belong to the same anagram group.
 *
 * Key Trick:
 * Sort every word and use the sorted word as the HashMap key.
 *
 * Time Complexity:
 * O(n * k log k)
 * - n = number of strings
 * - k = average length of each string
 * - Sorting each string takes O(k log k)
 *
 * Space Complexity:
 * O(n * k)
 * - HashMap stores all input strings.
 * - Sorting creates character arrays/strings.
 *
 * ------------------------------------------------------------
 *
 * PROBLEM:
 *
 * Given an array of strings, group the anagrams together.
 *
 * Anagrams are strings that contain the same characters with the
 * same frequencies, but their characters can appear in different orders.
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
 * HashMap + Sorting
 *
 * Step 1:
 * Create a HashMap called `anagramMap`.
 *
 * The key will be the sorted version of each word.
 * The value will contain all words that produce that same sorted key.
 *
 * Step 2:
 * Traverse every word in the input array.
 *
 * Step 3:
 * Sort the characters of the current word.
 *
 * Example:
 *
 * "eat"
 * -> ["e", "a", "t"]
 * -> ["a", "e", "t"]
 * -> "aet"
 *
 * Step 4:
 * Use the sorted word as the HashMap key.
 *
 * If the key already exists:
 *     Add the current word to the existing group.
 *
 * If the key does not exist:
 *     Create a new group containing the current word.
 *
 * Step 5:
 * Return all HashMap values.
 *
 * ------------------------------------------------------------
 *
 * WHY THIS WORKS:
 *
 * Anagrams contain exactly the same characters with exactly the
 * same frequencies.
 *
 * Therefore, sorting the characters of anagrams always produces
 * the same result.
 *
 * Example:
 *
 * "eat" -> "aet"
 * "tea" -> "aet"
 * "ate" -> "aet"
 *
 * All three words have the same sorted representation,
 * so they use the same HashMap key.
 *
 * But:
 *
 * "tan" -> "ant"
 * "nat" -> "ant"
 *
 * They produce a different key and therefore form a different group.
 *
 * ------------------------------------------------------------
 *
 * SIMPLE INTUITION:
 *
 * Sort every word and use the sorted word as its identity.
 *
 * Same sorted word -> same anagram group.
 *
 * ------------------------------------------------------------
 *
 * INTERVIEW TIP:
 *
 * There are two common solutions:
 *
 * 1. Sorting approach:
 *    Sort every word and use the sorted word as the key.
 *    Time: O(n * k log k)
 *
 * 2. Frequency-counting approach:
 *    Count the frequency of all 26 lowercase characters and use
 *    that frequency pattern as the key.
 *    Time: O(n * k)
 *
 * The sorting approach is simpler and easier to explain.
 * The frequency-counting approach is more efficient when the
 * input contains only lowercase English letters.
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    // Store each unique sorted-word key and its corresponding
    // group of anagrams.
    const anagramMap = new Map();

    // Process every word one by one.
    for (const word of strs) {

        // Convert the word into an array of characters,
        // sort the characters alphabetically, and join them back
        // into a string.
        //
        // Example:
        // "eat" -> ["e", "a", "t"] -> ["a", "e", "t"] -> "aet"
        const sortedWord = word.split("").sort().join("");

        // If another word has already produced the same sorted key,
        // it is an anagram of the current word.
        if (anagramMap.has(sortedWord)) {

            // Add the current word to the existing anagram group.
            anagramMap.get(sortedWord).push(word);

        } else {

            // This is the first word with this sorted representation,
            // so create a new group containing the current word.
            anagramMap.set(sortedWord, [word]);
        }
    }

    // Return all the grouped anagram arrays.
    return [...anagramMap.values()];
};