/**
 * QUICK NOTES — Encode and Decode Strings
 *
 * Pattern:
 * Length Prefix Encoding
 *
 * Core Idea:
 * Store each string as:
 *     <string length>#<string>
 *
 * Example:
 * ["hello", "world"]
 *
 * becomes:
 *     "5#hello5#world"
 *
 * The length tells us exactly how many characters belong
 * to each string, so the delimiter "#" can safely appear
 * inside the actual string.
 *
 * Key Trick:
 * Never try to split the encoded string using "#".
 * Instead, read the length first and then read exactly
 * that many characters.
 *
 * Time / Space Complexity:
 * Encode:
 * Time: O(n)
 * Space: O(n)
 *
 * Decode:
 * Time: O(n)
 * Space: O(n)
 *
 * ------------------------------------------------------------
 *
 * Approach:
 *
 * 1. For every string, store its length followed by "#"
 *    and then the actual string.
 *
 * 2. During decoding, read characters until "#" to obtain
 *    the length of the next string.
 *
 * 3. Move past "#" and read exactly `stringLength` characters.
 *
 * 4. Repeat until the entire encoded string is processed.
 *
 * Why this works:
 * The length prefix tells us exactly where each string ends.
 * Therefore, the strings can contain any characters, including "#".
 *
 * Simple Intuition:
 * Write down the length before every string so that the decoder
 * always knows exactly how many characters to read.
 */

/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function (strs) {
  let encodedString = "";

  for (let str of strs) {
    // Store the length first so the decoder knows
    // exactly how many characters belong to this string.
    encodedString = encodedString + str.length + "#" + str;
  }

  return encodedString;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} str
 * @return {string[]}
 */
var decode = function (str) {
  const decodedStrings = [];

  let index = 0;

  while (index < str.length) {
    let lengthString = "";

    // Read characters until we reach the "#" delimiter.
    // These characters represent the length of the current string.
    while (str[index] !== "#") {
      lengthString = lengthString + str[index];
      index = index + 1;
    }

    // Convert the length from a string to a number.
    const stringLength = Number(lengthString);

    // Move past the "#" delimiter.
    index = index + 1;

    // Calculate where the current string ends.
    const endIndex = index + stringLength;

    // Extract exactly `stringLength` characters.
    const decodedString = str.slice(index, endIndex);

    // Move to the beginning of the next encoded string.
    index = endIndex;

    // Add the decoded string to the result.
    decodedStrings.push(decodedString);
  }

  return decodedStrings;
};
