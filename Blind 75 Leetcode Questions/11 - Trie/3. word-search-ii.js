/**
 * @article  : https://algo.monster/liteproblems/212
 * @article  : https://takeuforward.org/data-structure/word-search-ii
 * @article  : https://prepfortech.io/leetcode-solutions/word-search-ii
 * @article  : https://chatgpt.com/share/e1c85ca2-b82b-45e8-8e85-6ddae8a9d9f6
 * @article  : https://leetcode.com/problems/word-search-ii/solutions/138279/clean-javascript-solution
 * @question : https://leetcode.com/problems/word-search-ii
 * @question : https://neetcode.io/problems/search-for-word-ii
 */

/*
  ✅ Problem Statement: 

  Given an m x n board of characters and a list of strings words, return all words on the board.

  Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

  Example 1:
  Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
  Output: ["eat","oath"]

  Example 2:
  Input: board = [["a","b"],["c","d"]], words = ["abcb"]
  Output: []

*/

// # Optimal Solution

/*

  # Step-by-step approach:

  The problem at hand is to find all words from a given list that can be formed by sequentially
  adjacent letters on a 2D board. The words can be constructed from letters of sequentially
  adjacent cells, where "adjacent" cells are those horizontally or vertically neighboring.
  The same letter cell may not be used more than once in a word.
 
  To solve this problem, we can use a Trie (Prefix Tree) to efficiently store and search for
  the words. The Trie allows us to quickly check if a prefix of a word exists in the list of
  words, which helps in pruning the search space during the Depth-First Search (DFS) on the board.
 
  1. Trie Construction:
     - Create a Trie data structure and insert all the words from the given list into the Trie.
     - Each node in the Trie represents a character and contains a collection of child nodes.
     - The end of a word is marked by a boolean flag `isEndOfWord` and the complete word is stored
       in the `word` property of the end node.
 
  2. DFS Initialization:
     - Traverse each cell in the 2D board.
     - For each cell, if the character is a child of the root node in the Trie, initiate a DFS
       from that cell.
 
  3. DFS Traversal:
     - The DFS function explores all possible paths from the current cell.
     - Base Cases:
       - It checks boundary conditions and whether the cell has already been visited.
       - If the current character is not a child of the current Trie node, the search is pruned.
     - If a complete word is found (i.e., `isEndOfWord` is true), it is added to the result list
       and marked as found to avoid duplicates.
     - The cell is marked as visited by temporarily changing its value to `#`.
     - The DFS function recursively explores all four possible directions (right, bottom, left, top).
     - After exploring all directions, the cell's original character is restored.
 
  4. Result Compilation:
     - The list of found words is returned as the final result.
 
  This approach ensures that we efficiently search for words in the board by leveraging the
  Trie data structure to prune unnecessary searches and using DFS to explore all possible
  paths in the board.

*/

/**
 * Class representing a node in the Trie.
 * Each node contains a collection of child nodes and a flag indicating if it is the end of a word.
 */
class TrieNode {
  constructor() {
    // `children` is an object where each key is a character and the value is another TrieNode.
    this.children = {};

    // `word` stores the complete word at the end node.
    this.word = null;

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

    // Store the word at the end node
    currentNode.word = word;

    // Mark the end of the word
    currentNode.isEndOfWord = true;
  }
}

/**
 * Finds all words in the given board that are present in the list of words.
 * @param {character[][]} board - 2D board of characters.
 * @param {string[]} words - List of words to search for in the board.
 * @returns {string[]} - List of words found in the board.
 */
const findWords = (board, words) => {
  const numRows = board.length; // Number of rows in the board
  const numCols = board[0].length; // Number of columns in the board

  const foundWords = []; // Array to store the found words

  const trie = new Trie(); // Create a new Trie instance

  // Insert each word into the Trie
  for (const word of words) {
    trie.insert(word);
  }

  // Traverse each cell in the board
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      const currentChar = board[row][col]; // Current character in the board

      // If the character is a child of the root node in the Trie, start DFS
      if (currentChar in trie.root.children) {
        dfs(row, col, trie.root, board, foundWords);
      }
    }
  }

  return foundWords; // Return the list of found words
};

/**
 * Depth-First Search (DFS) helper function to explore the board.
 * @param {number} row - Current row index.
 * @param {number} col - Current column index.
 * @param {TrieNode} currentNode - Current Trie node.
 * @param {character[][]} board - 2D board of characters.
 * @param {string[]} foundWords - Array to store the found words.
 */
const dfs = (row, col, currentNode, board, foundWords) => {
  // Boundary checks and visited cell check
  if (
    row < 0 || // Out of bounds (top)
    col < 0 || // Out of bounds (left)
    row >= board.length || // Out of bounds (bottom)
    col >= board[0].length || // Out of bounds (right)
    board[row][col] === "#" // Cell already visited
  ) {
    return; // Exit the function if any condition is met
  }

  // If the current character is not a child of the current Trie node, exit
  if (!(board[row][col] in currentNode.children)) {
    return;
  }

  const nextNode = currentNode.children[board[row][col]]; // Move to the child node

  // If the next node marks the end of a word, add the word to foundWords
  if (nextNode && nextNode.isEndOfWord) {
    foundWords.push(nextNode.word); // Add the word to the found words list

    // Mark the word as found to avoid duplicates
    nextNode.isEndOfWord = false;
    nextNode.word = null;
  }

  const currentChar = board[row][col]; // Store the current character
  board[row][col] = "#"; // Mark the cell as visited

  // Explore all four possible directions (right, bottom, left, top)
  dfs(row, col + 1, nextNode, board, foundWords); // Move right
  dfs(row + 1, col, nextNode, board, foundWords); // Move down
  dfs(row, col - 1, nextNode, board, foundWords); // Move left
  dfs(row - 1, col, nextNode, board, foundWords); // Move up

  board[row][col] = currentChar; // Restore the cell's original character

  // Optimization: Remove the node if it has no children and is not the end of another word
  if (Object.keys(nextNode.children).length === 0 && !nextNode.isEndOfWord) {
    delete currentNode.children[char];
  }
};

// Example 1 Input
const board1 = [
  ["o", "a", "a", "n"],
  ["e", "t", "a", "e"],
  ["i", "h", "k", "r"],
  ["i", "f", "l", "v"],
];
const word1 = ["oath", "pea", "eat", "rain"];

// Example 2 Input
const board2 = [
  ["a", "b"],
  ["c", "d"],
];
const word2 = ["abcb"];

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("Found words : ", findWords(board1, word1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("Found words : ", findWords(board2, word2));

/*
  # Time Complexity: O(W * L + M * N * 4^L)
  
  1. Trie Construction:
     - Inserting each word into the Trie takes O(L) time, where L is the length of the word.
     - For W words, the total time complexity for Trie construction is O(W * L).
  
  2. DFS Initialization:
     - We traverse each cell in the board, which takes O(M * N) time, where M is the number of rows and N is the number of columns.
  
  3. DFS Traversal:
     - In the worst case, each cell in the board is visited once, and for each cell, we explore up to 4 possible directions.
     - The time complexity for DFS traversal is O(M * N * 4^L), where L is the maximum length of the words.
     - However, due to the Trie pruning, the actual number of explorations is significantly reduced.
  
  Overall Time Complexity:
     - The overall time complexity is O(W * L + M * N * 4^L).
  
  # Space Complexity:  O(W * L + M * N)
  
  1. Trie Construction:
     - The space complexity for storing the Trie is O(W * L), where W is the number of words and L is the average length of the words.
  
  2. DFS Traversal:
     - The space complexity for the DFS recursion stack is O(L), where L is the maximum length of the words.
     - The space complexity for the visited cells is O(M * N).
  
  Overall Space Complexity:
     - The overall space complexity is O(W * L + M * N).

*/
