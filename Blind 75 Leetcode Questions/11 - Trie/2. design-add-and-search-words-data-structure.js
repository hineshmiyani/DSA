/**
 * @article  : https://algo.monster/liteproblems/211
 * @article  : https://www.designgurus.io/viewer/document/grokking-the-coding-interview/652a6d5f49a6a2acad4d26dd
 * @article  : https://www.geeksforgeeks.org/add-and-search-word-data-structure-design/
 * @question : https://leetcode.com/problems/design-add-and-search-words-data-structure/
 * @question : https://neetcode.io/problems/design-word-search-data-structure
 */

/*
  ✅ Problem Statement: 

  Design a data structure that supports adding new words and finding if a string matches any previously added string.

  Implement the WordDictionary class:
  - WordDictionary() Initializes the object.
  - void addWord(word) Adds word to the data structure, it can be matched later.
  - bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. 
    word may contain dots '.' where dots can be matched with any letter.
 

  Example 1:
  Input:
  ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
  [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]

  Output:
  [null,null,null,null,false,true,true,true]

  Explanation:
  WordDictionary wordDictionary = new WordDictionary();
  wordDictionary.addWord("bad");
  wordDictionary.addWord("dad");
  wordDictionary.addWord("mad");
  wordDictionary.search("pad"); // return False
  wordDictionary.search("bad"); // return True
  wordDictionary.search(".ad"); // return True
  wordDictionary.search("b.."); // return True

*/

// # Optimal Solution

/*

  # Step-by-step approach:
  
  The problem involves designing a data structure that supports adding words and searching for words,
  including the ability to search with wildcard characters. The data structure used here is a Trie (prefix tree).
  
  The solution consists of two main classes: `TrieNode` and `WordDictionary`.
  
  1. `TrieNode` Class:
     - Represents a node in the Trie.
     - Each node has two properties:
       - `children`: An object where each key is a character and the value is another `TrieNode`.
       - `isEndOfWord`: A boolean indicating if the node represents the end of a word.
  
  2. `WordDictionary` Class:
     - Represents the Trie itself and provides methods to add words and search for words.
     - The constructor initializes the root node of the Trie.
  
     - `addWord(word)` Method:
       - Inserts a word into the Trie.
       - Starts from the root node and iterates over each character in the word.
       - For each character, if it is not already a child of the current node, a new `TrieNode` is created.
       - Moves to the child node corresponding to the character.
       - After processing all characters, marks the end of the word by setting `isEndOfWord` to true.
  
     - `search(word)` Method:
       - Searches for a word in the Trie.
       - Calls the helper method `searchInNode` starting from the root node.
  
     - `searchInNode(word, startIndex, node)` Method:
       - A recursive helper method to search for a word in the Trie starting from a given node.
       - Iterates over each character in the word starting from `startIndex`.
       - If the character is a dot ('.'), it represents a wildcard that can match any character.
         - Iterates over all children of the current node and recursively calls `searchInNode` for each child.
         - If any recursive call returns true, the word is found.
       - If the character is not a dot, checks if it exists in the children of the current node.
         - If it does not exist, returns false.
         - If it exists, moves to the child node corresponding to the character.
       - After processing all characters, returns true if the current node represents the end of a word.
  
  This approach ensures efficient insertion and search operations, even with wildcard characters.

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
 * Class representing the WordDictionary which uses a Trie for efficient word storage and search.
 */
class WordDictionary {
  /**
   * Creates an instance of WordDictionary.
   * Initializes the root node of the Trie.
   */
  constructor() {
    this.root = new TrieNode(); // Root node of the Trie
  }

  /**
   * Add a word into the Trie.
   * @param {string} word - The word to be inserted into the Trie.
   */
  addWord(word) {
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
   * Supports '.' as a wildcard character that can match any single character.
   * @param {string} word - The word to search for in the Trie.
   * @returns {boolean} - Returns true if the word is found, otherwise false.
   */
  search(word) {
    return this.searchInNode(word, 0, this.root);
  }

  /**
   * Helper method to search for a word in the Trie starting from a given node.
   * @param {string} word - The word to search for in the Trie.
   * @param {number} startIndex - The current index in the word being searched.
   * @param {TrieNode} node - The current Trie node being searched.
   * @returns {boolean} - Returns true if the word is found, otherwise false.
   */
  searchInNode(word, startIndex, node) {
    let currentNode = node;

    // Iterate over each character in the word starting from startIndex
    for (let charIndex = startIndex; charIndex < word.length; charIndex++) {
      const char = word[charIndex];

      // If the character is a wildcard '.', check all possible children nodes
      if (char === ".") {
        for (const key in currentNode.children) {
          const child = currentNode.children[key];

          // Recursively search in the child node
          if (this.searchInNode(word, charIndex + 1, child)) {
            return true;
          }
        }

        // If no child nodes match, return false
        return false;
      } else {
        // If the character is not found in the current node's children, return false
        if (!(char in currentNode.children)) {
          return false;
        }

        // Move to the child node corresponding to the character
        currentNode = currentNode.children[char];
      }
    }

    // Return true if the current node marks the end of a word
    return currentNode.isEndOfWord;
  }
}

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");

const wordDictionary = new WordDictionary();

wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");

console.log("Search : ", wordDictionary.search("pad")); // return False
console.log("Search : ", wordDictionary.search("bad")); // return True
console.log("Search : ", wordDictionary.search(".ad")); // return True
console.log("Search : ", wordDictionary.search("b..")); // return True

/*  

  # Time Complexity:
  - The `addWord` method has a time complexity of O(n), where n is the length of the word being inserted.
    This is because each character of the word is processed once.

  - The `search` method has a worst-case time complexity of O(m * 26^n), where m is the length of the word
    being searched and n is the number of wildcard characters ('.') in the word. This is because each wildcard
    character can potentially branch into 26 different paths (one for each letter of the alphabet).

  # Space Complexity:
  - The space complexity of the `addWord` method is O(n), where n is the length of the word being inserted.
    This is because each character of the word may add a new node to the Trie.

  - The space complexity of the `search` method is O(1) for the iterative part, but the recursive calls in
    `searchInNode` can use up to O(m) space on the call stack, where m is the length of the word being searched.
    
  - Overall, the space complexity of the Trie itself is O(N * L), where N is the number of words inserted and
    L is the average length of the words, as each node can have up to 26 children. 

*/
