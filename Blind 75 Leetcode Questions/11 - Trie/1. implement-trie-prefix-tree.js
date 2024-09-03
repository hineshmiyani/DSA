/**
 * @article  : https://algo.monster/liteproblems/208
 * @article  : https://takeuforward.org/data-structure/implement-trie-1/
 * @article  : https://www.geeksforgeeks.org/trie-insert-and-search/
 * @question : https://leetcode.com/problems/implement-trie-prefix-tree
 * @question : https://neetcode.io/problems/implement-prefix-tree
 */

/*
  ✅ Problem Statement: 

  A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. 
  There are various applications of this data   structure, such as autocomplete and spellchecker.

  Implement the Trie class:
  - Trie() Initializes the trie object.
  - void insert(String word) Inserts the string word into the trie.
  - boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
  - boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

  Example 1:
  Input:
  ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
  [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]

  Output:
  [null, null, true, false, true, null, true]

  Explanation:
  Trie trie = new Trie();
  trie.insert("apple");
  trie.search("apple");   // return True
  trie.search("app");     // return False
  trie.startsWith("app"); // return True
  trie.insert("app");
  trie.search("app");     // return True

*/

// # Optimal Solution

/*

  # Step-by-step approach:

  1. `TrieNode` Class:
     - This class represents a single node in the Trie.
     - Each node has two properties:
       - `children`: An object that maps characters to their corresponding child nodes.
       - `isEndOfWord`: A boolean flag indicating whether the node marks the end of a valid word.

  2. `Trie` Class:
     - This class represents the Trie data structure.
     - It has a root node which is an instance of `TrieNode`.

  3. `insert` Method:
     - This method inserts a word into the Trie.
     - Start from the root node and iterate through each character of the word.
     - For each character, check if it exists in the current node's children.
       - If it does not exist, create a new `TrieNode` and add it to the children.
     - Move to the child node corresponding to the current character.
     - After processing all characters, mark the last node as the end of a word by setting `isEndOfWord` to true.

  4. `search` Method:
     - This method searches for a word in the Trie.
     - Start from the root node and iterate through each character of the word.
     - For each character, check if it exists in the current node's children.
       - If it does not exist, return false.
     - Move to the child node corresponding to the current character.
     - After processing all characters, return the value of `isEndOfWord` of the last node to determine if the word exists in the Trie.

  5. `startsWith` Method:
     - This method checks if there is any word in the Trie that starts with the given prefix.
     - Start from the root node and iterate through each character of the prefix.
     - For each character, check if it exists in the current node's children.
       - If it does not exist, return false.
     - Move to the child node corresponding to the current character.
     - After processing all characters, return true as the prefix exists in the Trie.

*/

/**
 * Class representing a node in the Trie.
 */
class TrieNode {
  constructor() {
    // `children` is an object where each key is a character and the value is another TrieNode.
    this.children = {};

    // `isEndOfWord` is a boolean indicating if the node represents the end of a word.
    this.isEndOfWord = false;
  }
}

/**
 * Class representing a Trie (Prefix Tree).
 * A Trie is a tree-like data structure that stores a dynamic set of strings,
 * where the keys are usually strings. It is used for efficient retrieval of a key in a dataset of strings.
 */
class Trie {
  /**
   * Creates an instance of Trie.
   * Initializes the root node of the Trie.
   */
  constructor() {
    this.root = new TrieNode(); // Root node of the Trie
  }

  /**
   * Inserts a word into the Trie.
   * @param {string} word - The word to be inserted into the Trie.
   */
  insert(word) {
    // Start from the root node
    let currentNode = this.root;

    // Iterate over each character in the word
    for (const char of word) {
      // If the character is not already a child of the current node, add it
      if (!(char in currentNode.children)) {
        currentNode.children[char] = new TrieNode();
      }

      // Move to the child node corresponding to the character
      currentNode = currentNode.children[char];
    }

    // Mark the end of the word
    currentNode.isEndOfWord = true;
  }

  /**
   * Searches for a word in the Trie.
   * @param {string} word - The word to search for in the Trie.
   * @returns {boolean} - Returns true if the word is found, otherwise false.
   */
  search(word) {
    // Start from the root node
    let currentNode = this.root;

    // Iterate over each character in the word
    for (const char of word) {
      // If the character is not found among the children of the current node, return false
      if (!(char in currentNode.children)) {
        return false;
      }

      // Move to the child node corresponding to the character
      currentNode = currentNode.children[char];
    }

    // Return true if the current node marks the end of the word
    return currentNode.isEndOfWord;
  }

  /**
   * Checks if there is any word in the Trie that starts with the given prefix.
   * @param {string} prefix - The prefix to search for in the Trie.
   * @returns {boolean} - Returns true if there is any word with the given prefix, otherwise false.
   */
  startsWith(prefix) {
    // Start from the root node
    let currentNode = this.root;

    // Iterate over each character in the prefix
    for (const char of prefix) {
      // If the character is not found among the children of the current node, return false
      if (!(char in currentNode.children)) {
        return false;
      }

      // Move to the child node corresponding to the character
      currentNode = currentNode.children[char];
    }

    // Return true if all characters in the prefix are found
    return true;
  }
}

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");

const trie = new Trie();

trie.insert("apple");

console.log("Search : ", trie.search("apple")); // return True
console.log("Search : ", trie.search("app")); // return False

console.log("Starts With : ", trie.startsWith("app")); // return True

trie.insert("app");

console.log("Search : ", trie.search("app")); // return True

// # Time Complexity: O(m), the time complexity for each operation is linear with respect to the length of the word or prefix.
// 1. Insertion: O(m), where m is the length of the word being inserted. Each character of the word is processed once.
// 2. Search: O(m), where m is the length of the word being searched. Each character of the word is processed once.
// 3. StartsWith: O(m), where m is the length of the prefix. Each character of the prefix is processed once.
// Overall, the time complexity for each operation is linear with respect to the length of the word or prefix.

// # Space Complexity:
// 1. Insertion: O(m * n), where m is the length of the longest word and n is the number of words.
//    Each node in the Trie can have up to 26 children (for each letter of the alphabet).
// 2. Search and StartsWith: O(1) additional space, as they do not require extra space proportional to the input size.
// Overall, the space complexity is primarily determined by the number of nodes in the Trie, which depends on the total length of all words inserted.
