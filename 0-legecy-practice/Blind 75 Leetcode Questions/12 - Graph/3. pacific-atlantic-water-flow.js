/**
 * @article  : https://algo.monster/liteproblems/417
 * @article  : https://www.geeksforgeeks.org/atlantic-pacific-water-flow/
 * @question : https://leetcode.com/problems/pacific-atlantic-water-flow
 * @question : https://neetcode.io/problems/pacific-atlantic-water-flow
 */

/*
  ✅ Problem Statement: 

  There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

  The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

  The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

  Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

  Example 1:
  Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
  Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
  Explanation: The following cells can flow to the Pacific and Atlantic oceans, as shown below:
  [0,4]: [0,4] -> Pacific Ocean 
         [0,4] -> Atlantic Ocean
  [1,3]: [1,3] -> [0,3] -> Pacific Ocean 
         [1,3] -> [1,4] -> Atlantic Ocean
  [1,4]: [1,4] -> [1,3] -> [0,3] -> Pacific Ocean 
         [1,4] -> Atlantic Ocean
  [2,2]: [2,2] -> [1,2] -> [0,2] -> Pacific Ocean 
         [2,2] -> [2,3] -> [2,4] -> Atlantic Ocean
  [3,0]: [3,0] -> Pacific Ocean 
         [3,0] -> [4,0] -> Atlantic Ocean
  [3,1]: [3,1] -> [3,0] -> Pacific Ocean 
         [3,1] -> [4,1] -> Atlantic Ocean
  [4,0]: [4,0] -> Pacific Ocean 
         [4,0] -> Atlantic Ocean
  Note that there are other possible paths for these cells to flow to the Pacific and Atlantic oceans.

  Example 2:
  Input: heights = [[1]]
  Output: [[0,0]]
  Explanation: The water can flow from the only cell to the Pacific and Atlantic oceans.

*/

// # Optimal Solution

/*

  # Step-by-step approach:

  To solve the `pacificAtlantic` problem, we can use a Depth-First Search (DFS) approach to traverse the matrix of heights starting from the Pacific Ocean and the Atlantic Ocean. 
  
  Here is the approach:

  1. Initialize variables:
     - Get the dimensions of the `heights` matrix to determine the row and column lengths.
     - Create two sets, `pacificSet` and `atlanticSet`, to store the positions reachable from the Pacific and Atlantic Oceans, respectively.

  2. Perform DFS on the first and last rows:
     - Start DFS from each cell in the first row and the last row, adding reachable positions to the respective sets (`pacificSet` and `atlanticSet`).

  3. Perform DFS on the first and last columns:
     - Start DFS from each cell in the first column and the last column, adding reachable positions to the respective sets.

  4. Find the intersection of positions:
     - Iterate over the positions in `pacificSet`, check if the position exists in `atlanticSet`, and add it to the `result` array.

  5. Return the result array containing the positions reachable from both the Pacific and Atlantic Oceans.

  6. Define the DFS function:
     - Implement a DFS function that recursively traverses the matrix based on certain conditions:
       - Check for out-of-bounds positions.
       - Check if the current height is greater than or equal to the previous height.
       - Check if the position has been visited before.
       - Add the current position to the visited set and recursively call DFS for adjacent positions (right, bottom, left, top).

  By following this approach, we can efficiently identify the positions that are reachable from both the Pacific and Atlantic Oceans in the given matrix of heights.

*/

/**
 * Find positions where water can flow from the Pacific to the Atlantic ocean.
 * @param {number[][]} heights - The grid representing the heights of the land.
 * @returns {number[][]} - The positions where water can flow to both oceans.
 */
const pacificAtlantic = (heights) => {
  // Get the number of rows in the 'heights' matrix
  const rowLength = heights.length;

  // Get the number of columns in the 'heights' matrix by accessing the length of the first row
  const columnLength = heights[0].length;

  const pacificSet = new Set(); // Set to store positions reachable from the Pacific ocean
  const atlanticSet = new Set(); // Set to store positions reachable from the Atlantic ocean

  // Depth First Search (DFS) on first and last row to mark reachable positions
  for (let i = 0; i < columnLength; i++) {
    dfs(0, i, heights[0][i], heights, pacificSet); // DFS on first row
    dfs(rowLength - 1, i, heights[rowLength - 1][i], heights, atlanticSet); // DFS on last row
  }

  // Depth First Search (DFS) on first and last column to mark reachable positions
  for (let i = 0; i < rowLength; i++) {
    dfs(i, 0, heights[i][0], heights, pacificSet); // DFS on first column
    dfs(
      i,
      columnLength - 1,
      heights[i][columnLength - 1],
      heights,
      atlanticSet
    ); // DFS on last column
  }

  // Find positions that are reachable from both oceans
  const result = [];

  // Iterate through each position in the pacificSet
  for (let position of pacificSet) {
    // Check if the position is also present in the atlanticSet
    if (atlanticSet.has(position)) {
      // If the position is common in both sets, parse the position (assuming it's in JSON format) and add it to the result array
      result.push(JSON.parse(position));
    }
  }
  return result; // Return the positions where water can flow to both oceans
};

/**
 * Depth First Search (DFS) function to explore the grid.
 * @param {number} row - The current row.
 * @param {number} column - The current column.
 * @param {number} previousHeight - The height of the previous position.
 * @param {number[][]} heights - The grid representing the heights of the land.
 * @param {Set} visited - The set of visited positions.
 */
const dfs = (row, column, previousHeight, heights, visited) => {
  // Base cases:
  if (
    row < 0 ||
    column < 0 ||
    row >= heights.length ||
    column >= heights[0].length
  ) {
    return; // Out of bounds, return
  }

  if (heights[row][column] < previousHeight) {
    return; // Current height is lower than previous, return
  }

  const position = JSON.stringify([row, column]); // Convert position to a string

  if (visited.has(position)) {
    return; // Position already visited, return
  }

  visited.add(position); // Mark position as visited

  // Explore adjacent positions
  dfs(row, column + 1, heights[row][column], heights, visited); // Move right
  dfs(row + 1, column, heights[row][column], heights, visited); // Move down
  dfs(row, column - 1, heights[row][column], heights, visited); // Move left
  dfs(row - 1, column, heights[row][column], heights, visited); // Move up
};

// Example 1 Input
const heights1 = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
];

// Example 2 Input
const heights2 = [[1]];

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "Positions of the cells where rain water can flow to both the Pacific and Atlantic oceans: ",
  pacificAtlantic(heights1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "Positions of the cells where rain water can flow to both the Pacific and Atlantic oceans: ",
  pacificAtlantic(heights2)
);

// # Time Complexity:  O(m*n)
// The time complexity of the pacificAtlantic function is O(m*n) where m is the number of rows and n is the number of columns in the 'heights' matrix. This is because the function performs Depth First Search (DFS) on each cell of the matrix once to mark reachable positions from both oceans.
// The time complexity of the dfs function is also O(m*n) as it explores each cell of the matrix at most once.
// Therefore, the overall time complexity of the algorithm is O(m*n).

//  # Space Complexity: O(m*n)
// The space complexity of the pacificAtlantic function is O(m*n) where m is the number of rows and n is the number of columns in the 'heights' matrix. This is due to the space used by the two sets (pacificSet and atlanticSet) to store reachable positions from the Pacific and Atlantic oceans respectively.
// The space complexity of the dfs function is O(m*n) as well, due to the recursive calls and the space used by the visited set to store visited positions.
// Therefore, the overall space complexity of the algorithm is O(m*n).
