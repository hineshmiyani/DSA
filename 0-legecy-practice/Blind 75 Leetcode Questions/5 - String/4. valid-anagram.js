/**
 * @article  : https://leetcode.com/problems/valid-anagram/solutions/66527/a-few-javascript-solutions
 * @question : https://leetcode.com/problems/valid-anagram
 * @question : https://neetcode.io/problems/is-anagram
 */

/*
  ✅ Problem Statement: 

  Given two strings s and t, return true if t is an anagram of s, and false otherwise.
  An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

  Example 1:
  Input: s = "anagram", t = "nagaram"
  Output: true

  Example 2:
  Input: s = "rat", t = "car"
  Output: false

*/

// Brute-force solution

/*
  # Step-by-Step Approach:

  1. Split the first string `s` into an array of characters.

  2. Sort the array of characters.

  3. Join the sorted array back into a string.

  4. Repeat steps 1-3 for the second string `t`.

  5. Compare the sorted versions of the strings `sortedS` and `sortedT`.

  6. If `sortedS` is not equal to `sortedT`, return `false` indicating that the strings are not anagrams.

  7. If `sortedS` is equal to `sortedT`, return `true` indicating that the strings are anagrams.

  */

/**
 * Checks if two strings are anagrams of each other.
 * An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 *
 * This function sorts the characters of both strings and compares the sorted versions.
 * If the sorted versions are identical, the strings are anagrams.
 */
const isAnagramSolution1 = (s, t) => {
  // Split the first string into an array of characters, sort the array, and join it back into a string
  const sortedS = s.split("").sort().join("");

  // Split the second string into an array of characters, sort the array, and join it back into a string
  const sortedT = t.split("").sort().join("");

  // Compare the sorted versions of the strings
  if (sortedS !== sortedT) {
    return false; // If they are not equal, the strings are not anagrams
  }

  return true; // If they are equal, the strings are anagrams
};

// Optimal Solution - 1

/*
  # Step-by-step approach:
  
  1. Check if the lengths of strings `s` and `t` are equal. If not, return false as they cannot be anagrams.

  2. Create a `Map` to count the occurrences of each character in string `t`.

  3. Iterate over each character in string `t` and populate the `Map` with the character counts.

  4. Iterate over each character in string `s` and check against the `Map`:
    - If the character exists in the `Map` and its count is greater than 0, decrement the count in the `Map`.
    - If the character does not exist in the `Map` or its count is 0, return false as `s` and `t` are not anagrams.

  5. If all characters in `s` have been successfully matched with characters in `t`, return true indicating that `s` and `t` are anagrams.
*/

/**
 * Checks if two strings are anagrams of each other.
 * An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 */
const isAnagramSolution2 = (s, t) => {
  // If lengths are not equal, they cannot be anagrams
  if (s.length !== t.length) {
    return false;
  }

  // Create a map to count characters in t
  const charCountMap = new Map();

  // Populate the map with character counts from t
  for (const char of t) {
    charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
  }

  // Check characters in s against the map
  for (const char of s) {
    // If the character exists in the map and its count is greater than 0, decrement the count
    if (charCountMap.has(char) && charCountMap.get(char) > 0) {
      charCountMap.set(char, (charCountMap.get(char) || 0) - 1);
    } else {
      // If the character does not exist in the map or its count is 0, s and t are not anagrams
      return false;
    }
  }

  // If all characters in s have been matched with characters in t, they are anagrams
  return true;
};

// Optimal Solution - 2

/*
  # Step-by-step approach:
  
  1. Check if the lengths of the two strings `s` and `t` are equal.
    - If not, return false as they cannot be anagrams.

  2. Create an array `charCount` of size 26 (for each letter of the alphabet) initialized to zero.

  3. Iterate through each character of both strings simultaneously:
    - For each character in `s`, calculate its index based on its ASCII value and increment the corresponding  position in `charCount`.
    - For each character in `t`, calculate its index based on its ASCII value and decrement the corresponding  position in `charCount`.

  4. After processing both strings, check if all elements in `charCount` are zero.
    - If any element is not zero, return false as the strings are not anagrams.
    
  5. If all elements are zero, return true as the strings are anagrams.
*/

/**
 * Checks if two strings are anagrams of each other.
 * An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 */
const isAnagramSolution3 = (s, t) => {
  // If the lengths of the strings are not equal, they cannot be anagrams.
  if (s.length !== t.length) {
    return false;
  }

  // Initialize an array to count the occurrences of each character.
  // The array has 26 elements, one for each letter of the alphabet.
  const charCount = new Array(26).fill(0);

  // Iterate through each character of both strings.
  for (let i = 0; i < s.length; i++) {
    // Calculate the index for the character in string `s` based on its ASCII value.
    const sCharIndex = s[i].charCodeAt() - "a".charCodeAt();

    // Increment the count for this character.
    charCount[sCharIndex] = charCount[sCharIndex] + 1;

    // Calculate the index for the character in string `t` based on its ASCII value.
    const tCharIndex = t[i].charCodeAt() - "a".charCodeAt();

    // Decrement the count for this character.
    charCount[tCharIndex] = charCount[tCharIndex] - 1;
  }

  // Check if all counts are zero.
  // If any count is not zero, it means the strings are not anagrams.
  for (let i = 0; i < charCount.length; i++) {
    const element = charCount[i];

    if (element !== 0) {
      return false;
    }
  }

  // If all counts are zero, the strings are anagrams.
  return true;
};

// Example 1 Input
const s1 = "anagram";
const t1 = "nagaram";

// Example 2 Input
const s2 = "rat";
const t2 = "car";

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("Is valid anagram string: ", isAnagramSolution1(s1, t1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("Is valid anagram string: ", isAnagramSolution1(s2, t2));

// # Time Complexity: O(n*log n), where (n) is the length of the strings s and t
// This is because the most time-consuming operation in the function is the sorting of the arrays, which typically has a time complexity of (O(n*log n)).

// # Space Complexity: O(n)
// This is due to the space required to store the arrays created by the split method and the sorted arrays. Each string s and t is split into an array of characters, which requires (O(n)) space, and the sorted arrays also require (O(n)) space.

console.log("\n\n ------------- Solution 2: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("Is valid anagram string: ", isAnagramSolution2(s1, t1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("Is valid anagram string: ", isAnagramSolution2(s2, t2));

// # Time Complexity:  O(n), where n is the length of the strings s and t.
// This is because:
// 1. The function first checks if the lengths of s and t are equal, which is an O(1) operation.
// 2. It then iterates over the string t to populate the charCountMap, which takes O(n) time.
// 3, Finally, it iterates over the string s to check against the charCountMap, which also takes O(n) time.
// Since these operations are sequential, the overall time complexity is O(n).

// # Space Complexity: O(1) in the best case and O(n) in the worst case.
// This is because:
// The charCountMap can store up to n unique characters in the worst case, where n is the length of the string t.
// The space used by the map depends on the number of unique characters in t, which in the worst case can be proportional to the length of the string.
// Therefore, the space complexity is O(n) in the worst case.

console.log("\n\n ------------- Solution 3: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("Is valid anagram string: ", isAnagramSolution3(s1, t1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("Is valid anagram string: ", isAnagramSolution3(s2, t2));

// # Time Complexity: O(n)
// The function first checks if the lengths of the strings s and t are equal, which takes constant time, (O(1)).
// It then initializes an array charCount of size 26, which also takes constant time, (O(1)).
// The function iterates through each character of both strings once, which takes linear time, (O(n)), where (n) is the length of the strings.
// Finally, it checks if all counts in the charCount array are zero, which takes constant time, (O(1)), since the array size is fixed at 26.
// Combining these steps, the overall time complexity is (O(n)).

// # Space Complexity: O(1)
// The function uses a fixed-size array charCount of length 26 to store character counts. This requires constant space, (O(1)).
// No additional space is used that scales with the input size.
// Therefore, the space complexity is (O(1)).
