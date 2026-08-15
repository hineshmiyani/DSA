/**
 * @article  : https://algo.monster/liteproblems/271
 * @question : https://leetcode.com/problems/encode-and-decode-strings/
 * @question : https://neetcode.io/problems/string-encode-and-decode
 */

/*
  ✅ Problem Statement: 

  Design an algorithm to encode a list of strings to a single string. The encoded string is then sent over the network and is decoded back to the original list of strings.

  Implement the `Codec` class:
  - `Codec.encode(strs)` Encodes a list of strings to a single string.
  - `Codec.decode(s)` Decodes a single string to a list of strings.

  Example 1:
  Input: ["leet","code","love","you"]
  Output:["leet","code","love","you"]

  Example 2:
  Input: ["we","say",":","yes"]
  Output: ["we","say",":","yes"]

*/

// # Optimal Solution

/* 
  # Step-by-step approach:

  1. Encoding:
     - The `encode` method takes a list of strings and converts it into a single string.
     - For each string in the list, we prepend its length followed by a special character (e.g., `#`) to the string itself.
     - This ensures that during decoding, we can easily determine the length of each  original string.
     - Example: ["leet", "code"] -> "4#leet4#code"
  
  2. Decoding:
     - The `decode` method takes the encoded string and converts it back to the   original list of strings.
     - We iterate through the encoded string, reading the length of each original string (up to the `#` character).
     - Using this length, we extract the corresponding substring and add it to the  result list.
     - Example: "4#leet4#code" -> ["leet", "code"] 
*/

/**
 * Codec class for encoding and decoding a list of strings.
 * This class provides methods to encode a list of strings into a single string
 * and decode that single string back into the original list of strings.
 */
class Codec {
  /**
   * Encodes a list of strings to a single string.
   * @param {string[]} strs - List of strings to be encoded.
   * @return {string} - Encoded string.
   */
  encode(strs) {
    let encodedString = "";

    // Iterate over each string in the list
    for (const string of strs) {
      // Append the length of the string followed by a delimiter '#' and the string itself
      encodedString = encodedString + string.length + "#" + string;
    }

    return encodedString;
  }

  /**
   * Decodes a single string to a list of strings.
   * @param {string} string - Encoded string.
   * @return {string[]} - Decoded list of strings.
   */
  decode(string) {
    const decodedString = []; // Array to hold the decoded strings

    let i = 0; // Pointer to traverse the encoded string

    // Loop until the end of the encoded string
    while (i < string.length) {
      let j = i;

      // Find the position of the delimiter '#'
      while (string[j] !== "#") {
        j = j + 1;
      }

      // Extract the length of the next string
      const length = parseInt(string.substring(i, j));

      i = j + 1; // Move the pointer to the start of the actual string
      j = i + length; // Calculate the end position of the actual string

      // Extract the actual string using the calculated positions
      const subString = string.substring(i, j);
      decodedString.push(subString); // Add the extracted string to the result array

      i = j; // Move the pointer to the next position for the next iteration
    }

    return decodedString;
  }
}

// Example 1 Input
const strs1 = ["leet", "code", "love", "you"];

// Example 2 Input
const strs2 = ["we", "say", ":", "yes"];

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
const encodedString1 = new Codec().encode(strs1);
const decodedString1 = new Codec().decode(encodedString1);

console.log("The encoded and decoded strings are: ", {
  encodedString1,
  decodedString1,
});

console.log("\n ------------- Example 2: ------------- \n");
const encodedString2 = new Codec().encode(strs2);
const decodedString2 = new Codec().decode(encodedString2);

console.log("The encoded and decoded strings are: ", {
  encodedString2,
  decodedString2,
});

// # Time Complexity:
// The `encode` method has a time complexity of O(n), where n is the total number of characters in all strings combined.
// The `decode` method also has a time complexity of O(n), where n is the length of the encoded string.

// # Space Complexity:
// The `encode` method has a space complexity of O(1) for the encoded string, but O(n) if we consider the output string.
// The `decode` method has a space complexity of O(n) for storing the decoded list of strings.
