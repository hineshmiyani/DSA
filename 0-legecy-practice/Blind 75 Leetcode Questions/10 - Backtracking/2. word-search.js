/**
 * @article  : https://algo.monster/liteproblems/79
 * @article  : https://takeuforward.org/data-structure/word-search-leetcode/
 * @article  : https://www.geeksforgeeks.org/search-a-word-in-a-2d-grid-of-characters/
 * @question : https://leetcode.com/problems/word-search
 * @question : https://neetcode.io/problems/search-for-word
 */

/*
  ✅ Problem Statement: 

  Given an m x n grid of characters board and a string word, return true if word exists in the grid.

  The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

  Example 1:
  Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
  Output: true
  
  Example 2:
  Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
  Output: false

*/

// # Optimal Solution

/*
 
  # Step-by-step approach:

  1. Initialization:
     - Define the main function `exist` which takes a 2D board and a word as input.
     - Determine the dimensions of the board (`m` for rows and `n` for columns).
 
  2. Iterate through the board:
     - Use nested loops to iterate through each cell in the board.
     - For each cell, check if the character matches the first character of the word.
     - If it matches, initiate a backtracking search from that cell.
 
  3. Backtracking function:
     - Define a helper function `backtrack` that performs the depth-first search (DFS).
     - The function takes the current position `(i, j)`, the current index in the word, the board, and the word itself, along with the board dimensions.
 
  4. Base cases in backtracking:
     - If the current index equals the length of the word, it means the word has been found, so return true.
     - If the current position is out of bounds or the cell has already been visited (marked as "#"), return false.
     - If the current cell does not match the current character in the word, return false.
 
  5. Mark the cell as visited:
     - Temporarily mark the current cell as visited by setting it to "#".
 
  6. Explore all possible directions:
     - Recursively call the `backtrack` function for all four possible directions (right, bottom, left, top).
     - If any of these recursive calls return true, it means the word has been found, so return true.
 
  7. Un-mark the cell:
     - If none of the recursive calls return true, un-mark the cell by restoring its original value.
 
  8. Return the result:
     - If the word is found starting from any cell, return true.
     - If the loops complete without finding the word, return false.
 
  This approach ensures that all possible paths are explored while avoiding revisiting the same cell within a single path.

*/

/**
 * Checks if a given word exists in a 2D board.
 * @param {character[][]} board - The 2D board of characters.
 * @param {string} word - The word to search for in the board.
 * @returns {boolean} - Returns true if the word exists in the board, otherwise false.
 */
const exist = (board, word) => {
  // Get the number of rows (m) and columns (n) in the board
  const m = board.length;
  const n = board[0].length;

  // Iterate through each cell in the board
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // If the current cell matches the first character of the word and the word can be found starting from this cell
      if (board[i][j] === word[0] && backtrack(board, word, i, j, 0, m, n)) {
        return true; // Word found
      }
    }
  }

  return false; // Word not found
};

/**
 * Helper function to perform backtracking to find the word in the board.
 * @param {character[][]} board - The 2D board of characters.
 * @param {string} word - The word to search for in the board.
 * @param {number} i - The current row index in the board.
 * @param {number} j - The current column index in the board.
 * @param {number} index - The current index in the word.
 * @param {number} m - The number of rows in the board.
 * @param {number} n - The number of columns in the board.
 * @returns {boolean} - Returns true if the word can be found starting from the current cell, otherwise false.
 */
const backtrack = (board, word, i, j, index, m, n) => {
  // If the entire word has been found
  if (index === word.length) {
    return true;
  }

  // If the current cell is out of bounds or already visited or does not match the current character in the word
  if (i < 0 || j < 0 || i >= m || j >= n || board[i][j] === "#") {
    return false;
  }

  if (board[i][j] !== word[index]) {
    return false;
  }

  // Mark the current cell as visited
  const temp = board[i][j];
  board[i][j] = "#";

  // Explore all four possible directions: right, bottom, left, top
  const right = backtrack(board, word, i, j + 1, index + 1, m, n);
  const bottom = backtrack(board, word, i + 1, j, index + 1, m, n);
  const left = backtrack(board, word, i, j - 1, index + 1, m, n);
  const top = backtrack(board, word, i - 1, j, index + 1, m, n);

  // If any of the directions return true, the word has been found
  if (right || bottom || left || top) {
    return true;
  }

  // Restore the current cell's original value before backtracking
  board[i][j] = temp;

  return false; // Word not found in any direction
};

// Example 1 Input
const board1 = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
const word1 = "ABCCED";

// Example 2 Input
const board2 = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
const word2 = "ABCB";

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("Is word found? : ", exist(board1, word1));
console.log("\n ----------?-- Example 2: ------------- \n");
console.log("Is word found? : ", exist(board2, word2));

/*

  # Time Complexity: O(m * n * 4^L)
  The time complexity of the `exist` function is O(m * n * 4^L), where:
  - m is the number of rows in the board.
  - n is the number of columns in the board.
  - L is the length of the word.
  
  Explanation:
  - The outer loops iterate through each cell in the board, which takes O(m * n) time.
  - For each cell, the `backtrack` function is called, which explores up to 4 possible directions (right, bottom, left, top).
  - In the worst case, the `backtrack` function could explore all 4 directions for each character in the word, leading to 4^L possible paths.
  
  Therefore, the overall time complexity is O(m * n * 4^L).
  
  # Space Complexity: O(L)
  The space complexity of the `exist` function is O(L), where:
  - L is the length of the word.
  
  Explanation:
  - The space complexity is primarily due to the recursion stack used by the `backtrack` function.
  - In the worst case, the recursion stack could go as deep as the length of the word, leading to O(L) space usage.
  - Additionally, the board itself takes O(m * n) space, but this is not considered extra space as it is part of the input.
  
  Therefore, the overall space complexity is O(L).
  
*/
