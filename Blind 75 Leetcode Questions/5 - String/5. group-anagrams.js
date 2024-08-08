/**
 * @article  : https://algo.monster/liteproblems/49
 * @question : https://leetcode.com/problems/group-anagrams
 * @question : https://neetcode.io/problems/anagram-groups
 */

/*
  ✅ Problem Statement: 

  Given an array of strings strs, group the anagrams together. You can return the answer in any order.
  An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

  Example 1:
  Input: strs = ["eat","tea","tan","ate","nat","bat"]
  Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

  Example 2:
  Input: strs = [""]
  Output: [[""]]

*/

// Optimal Solution - 1

/*
  # Step-by-step approach:
  1. Initialize an empty array `groupAnagrams` to store the final groups of anagrams.
  2. Create a `Map` called `anagramMap` to store sorted words as keys and their corresponding anagrams as values.
  3. Iterate over each word in the input array `strs`:
     a. Sort the characters of the word to create a key (`sortedWord`) for the anagram group.
     b. Check if `sortedWord` is already a key in `anagramMap`:
        - If it is, retrieve the existing list of anagrams and add the current word to it.
        - If it is not, create a new entry in the map with `sortedWord` as the key and the current word as the first element in the list.
  4. Iterate over the entries in `anagramMap` and add each list of anagrams to the `groupAnagrams` array.
  5. Return the `groupAnagrams` array, which contains the grouped anagrams.
*/

/**
 * Groups an array of strings into anagrams.
 */
const groupAnagramsSolution1 = (strs) => {
  // Initialize an empty array to hold the groups of anagrams
  const groupAnagrams = [];

  // Initialize a Map to store sorted words as keys and their corresponding anagrams as values
  const anagramMap = new Map();

  // Iterate over each word in the input array
  for (const word of strs) {
    // Sort the characters of the word to create a key for the anagram group
    const sortedWord = word.split("").sort().join("");

    // Check if the sorted word is already a key in the map
    if (anagramMap.has(sortedWord)) {
      // If it is, retrieve the existing list of anagrams and add the current word to it
      const anagramList = anagramMap.get(sortedWord);
      anagramMap.set(sortedWord, anagramList.concat([word]));
    } else {
      // If it is not, create a new entry in the map with the sorted word as the key and the current word as the first element in the list
      anagramMap.set(sortedWord, [word]);
    }
  }

  // Iterate over the entries in the map
  for (const [_key, anagramList] of anagramMap) {
    // Add each list of anagrams to the final result array
    groupAnagrams.push(anagramList);
  }

  // Return the array of grouped anagrams
  return groupAnagrams;
};

// Optimal Solution - 2

/*
  # Step-by-step approach:
  1. Initialize an empty array `groupAnagrams` to store the final grouped anagrams.
  2. Use a Map `anagramMap` to store the anagrams, where the key is a unique representation of character counts, and the value is a list of words that match this character count.
  3. Iterate over each word in the input array `strs`.
     a. For each word, create an array `charCount` of size 26 (for each letter in the alphabet) initialized to 0.
     b. Count the occurrences of each character in the word and update the `charCount` array accordingly.
     c. Convert the `charCount` array to a string key by joining its elements with a delimiter (e.g., "#").
     d. Check if this key already exists in `anagramMap`. If it does, add the current word to the corresponding list. If not, create a new entry in the map with this key and the current word.
  4. After processing all words, iterate over the entries in `anagramMap` and add each list of anagrams to the `groupAnagrams` array.
  5. Return the `groupAnagrams` array containing all grouped anagrams.
*/

/**
 * Groups anagrams from the given list of strings.
 */
const groupAnagramsSolution2 = (strs) => {
  // Initialize an array to hold the grouped anagrams
  const groupAnagrams = [];

  // Initialize a Map to store the anagrams with their corresponding character count key
  const anagramMap = new Map();

  // Iterate over each word in the input array
  for (const word of strs) {
    // Create an array to count the occurrences of each character (26 letters in the alphabet)
    const charCount = new Array(26).fill(0);

    // Count the occurrences of each character in the current word
    for (const char of word) {
      // Calculate the index of the character in the alphabet (0 for 'a', 1 for 'b', etc.)
      const charIndex = char.charCodeAt() - "a".charCodeAt();
      // Increment the count for this character
      charCount[charIndex] = charCount[charIndex] + 1;
    }

    // Create a unique key for the anagram group by joining the character counts with a delimiter
    const key = charCount.join("#");

    // Check if the key already exists in the map
    if (anagramMap.has(key)) {
      // If the key exists, retrieve the list of anagrams and add the current word to it
      const anagramList = anagramMap.get(key) || [];
      anagramList.push(word);
    } else {
      // If the key does not exist, create a new entry in the map with the current word
      anagramMap.set(key, [word]);
    }
  }

  // Iterate over the map entries and add each list of anagrams to the result array
  for (const [_key, anagramList] of anagramMap) {
    groupAnagrams.push(anagramList);
  }

  // Return the array of grouped anagrams
  return groupAnagrams;
};

// Example 1 Input
const strs1 = ["eat", "tea", "tan", "ate", "nat", "bat"];

// Example 2 Input
const strs2 = ["a"];

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The grouped anagrams in the array of strings are: ",
  groupAnagramsSolution1(strs1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The grouped anagrams in the array of strings are: ",
  groupAnagramsSolution1(strs2)
);

// # Time Complexity: O(N * K log K), where N is the number of strings and K is the maximum length of a string.
// This is because sorting each string takes O(K log K) and we do this for each of the N strings.

// #Space Complexity: O(N * K)
// Due to the storage required for the anagramMap and the final groupAnagrams array, where N is the number of strings and K is the maximum length of a string.

console.log("\n\n ------------- Solution 2: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The grouped anagrams in the array of strings are: ",
  groupAnagramsSolution2(strs1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The grouped anagrams in the array of strings are: ",
  groupAnagramsSolution2(strs2)
);

// # Time Complexity: O(N * K), where N is the number of strings in the input array `strs`, and K is the maximum length of a string in `strs`.
// This is because we iterate over each string and for each string, we count the characters, which takes O(K) time.

// # Space Complexity:  O(N * K)
// This is due to the storage required for the `anagramMap` and the `charCount` arrays.
// The `anagramMap` can potentially store N keys, each with a list of strings, and each `charCount` array has a fixed size of 26.
