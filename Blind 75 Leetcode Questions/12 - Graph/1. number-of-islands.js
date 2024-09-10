/**
 * @article  : https://algo.monster/liteproblems/200
 * @article  : https://takeuforward.org/data-structure/number-of-islands/
 * @article  : https://www.geeksforgeeks.org/find-the-number-of-islands-using-dfs/
 * @question : https://leetcode.com/problems/number-of-islands
 * @question : https://neetcode.io/problems/count-number-of-islands
 */

/*
  ✅ Problem Statement: 

  Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

  An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
 
  Example 1:
  Input: grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]
  Output: 1

  Example 2:
  Input: grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]
  Output: 3

*/

// # Optimal Solution

/*
  
  # Step-by-step approach:

  1. Initialization:
     - Define the main function `numIslands` which takes a 2D grid as input.
     - Initialize variables `rowLength` and `columnLength` to store the dimensions of the grid.
     - Initialize a counter `count` to zero, which will keep track of the number of islands.

  2. Iterate through the grid:
     - Use nested loops to iterate through each cell in the grid.
     - For each cell, if it is part of an island (determined by the `dfs` function), increment the `count`.

  3. Depth-First Search (DFS):
     - Define a helper function `dfs` which performs a depth-first search to mark all parts of an island.
     - The `dfs` function takes the current cell's row and column indices and the grid as input.
     - Base cases for the `dfs` function:
       - If the current cell is out of bounds, return `false`.
       - If the current cell is already visited (marked as '#'), return `false`.
       - If the current cell is water ('0'), return `false`.
     - Mark the current cell as visited by setting it to '#'.
     - Recursively call `dfs` for the neighboring cells (right, bottom, left, top).
     - Return `true` to indicate that an island has been found and marked.

  4. Return the result:
     - After iterating through the entire grid, return the `count` which represents the number of islands.

  This approach ensures that each cell is visited once, and all parts of an island are marked during the DFS traversal, resulting in an efficient solution.

*/

/**
 * Function to count the number of islands in a given grid.
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
 *
 * @param {character[][]} grid - 2D grid map of '1's (land) and '0's (water)
 * @returns {number} - Number of islands
 */
const numIslands = (grid) => {
  // Get the number of rows in the grid
  const rowLength = grid.length;

  // Get the number of columns in the grid
  const columnLength = grid[0].length;

  // Initialize the island count to 0
  let count = 0;

  // Iterate through each cell in the grid
  for (let row = 0; row < rowLength; row++) {
    for (let column = 0; column < columnLength; column++) {
      // If the current cell is part of an island, perform DFS and increment the island count
      if (dfs(row, column, grid)) {
        count = count + 1;
      }
    }
  }

  // Return the total number of islands found
  return count;
};

/**
 * Depth-First Search (DFS) helper function to traverse and mark the visited parts of an island.
 *
 * @param {number} row - Current row index
 * @param {number} column - Current column index
 * @param {character[][]} grid - 2D grid map of '1's (land) and '0's (water)
 * @returns {boolean} - True if the current cell is part of an island, otherwise false
 */
const dfs = (row, column, grid) => {
  // Check if the current cell is out of grid bounds
  if (row < 0 || column < 0 || row >= grid.length || column >= grid[0].length) {
    return false;
  }

  // Check if the current cell is already visited (marked as '#')
  if (grid[row][column] === "#") return false;

  // Check if the current cell is water ('0')
  if (grid[row][column] !== "1") return false;

  // Mark the current cell as visited by changing it to '#'
  grid[row][column] = "#";

  // Recursively visit all adjacent cells (right, bottom, left, top)
  dfs(row, column + 1, grid); // move right
  dfs(row + 1, column, grid); // move bottom
  dfs(row, column - 1, grid); // move left
  dfs(row - 1, column, grid); // move top

  // Return true indicating the current cell is part of an island
  return true;
};

// Example 1 Input
const grid1 = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

// Example 2 Input
const grid2 = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("Number of islands : ", numIslands(grid1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("Number of islands : ", numIslands(grid2));

// # Time Complexity: O(M * N)
// The time complexity of the `numIslands` function is O(M * N), where M is the number of rows and N is the number of columns in the grid.
// This is because we iterate through each cell in the grid once, and for each cell that is part of an island, we perform a DFS traversal.
// In the worst case, the DFS traversal visits all cells in the grid, but since each cell is visited at most once, the overall time complexity remains O(M * N).

// # Space Complexity: O(M * N)
// The space complexity of the `numIslands` function is O(M * N) in the worst case due to the recursion stack used by the DFS function.
// In the worst case, the grid is filled with land ('1's), and the DFS function will have a recursion depth of M * N.
// Additionally, the grid itself takes up O(M * N) space.
