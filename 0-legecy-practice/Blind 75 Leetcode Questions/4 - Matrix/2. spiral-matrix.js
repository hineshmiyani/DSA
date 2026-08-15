/**
 * @article  : https://takeuforward.org/data-structure/spiral-traversal-of-matrix/
 * @question : https://leetcode.com/problems/spiral-matrix/
 */

/*
  ✅ Problem Statement: 

  Given a Matrix, print the given matrix in spiral order.

  Example 1:
  Input: Matrix[][] = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ];

  Output: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10].
  Explanation: The output of matrix in spiral form.

  Example 2:
  Input: Matrix[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
	Output: 1, 2, 3, 6, 9, 8, 7, 4, 5.
  Explanation: The output of matrix in spiral form.

*/

// Optimal Solution

/*
  Step-by-Step Approach:
  1. Get the number of rows (`n`) and columns (`m`) in the matrix.
  2. Initialize the boundaries of the matrix:
    - `left` starts at the first column (0).
    - `top` starts at the first row (0).
    - `right` starts at the last column (`m - 1`).
    - `bottom` starts at the last row (`n - 1`).
  3. Create an array `answerArr` to store the elements in spiral order.
  4. Loop until the boundaries overlap:
    a. Traverse from left to right along the top boundary and add elements to `answerArr`.
    b. Move the top boundary down by incrementing `top`.
    c. Traverse from top to bottom along the right boundary and add elements to `answerArr`.
    d. Move the right boundary left by decrementing `right`.
    e. If there are still rows to traverse (i.e., `top <= bottom`):
        - Traverse from right to left along the bottom boundary and add elements to `answerArr`.
        - Move the bottom boundary up by decrementing `bottom`.
     f. If there are still columns to traverse (i.e., `left <= right`):
        - Traverse from bottom to top along the left boundary and add elements to `answerArr`.
        - Move the left boundary right by incrementing `left`.
  5. Return the array `answerArr` containing the elements in spiral order.
*/

const printSpiralSolution1 = (matrix) => {
  // Get the number of rows in the matrix
  const n = matrix.length;
  // Get the number of columns in the matrix
  const m = matrix[0].length;

  // Initialize the boundaries of the matrix
  let left = 0; // Left boundary starts at the first column
  let top = 0; // Top boundary starts at the first row
  let right = m - 1; // Right boundary starts at the last column
  let bottom = n - 1; // Bottom boundary starts at the last row

  // Array to store the elements in spiral order
  const answerArr = [];

  // Continue looping until the boundaries overlap
  while (left <= right && top <= bottom) {
    // Traverse from left to right along the top boundary
    for (let i = left; i <= right; i++) {
      answerArr.push(matrix[top][i]);
    }
    // Move the top boundary down after traversing the top row
    top = top + 1;

    // Traverse from top to bottom along the right boundary
    for (let i = top; i <= bottom; i++) {
      answerArr.push(matrix[i][right]);
    }
    // Move the right boundary left after traversing the right column
    right = right - 1;

    // Check if there are still rows to traverse
    if (top <= bottom) {
      // Traverse from right to left along the bottom boundary
      for (let i = right; i >= left; i--) {
        answerArr.push(matrix[bottom][i]);
      }
      // Move the bottom boundary up after traversing the bottom row
      bottom = bottom - 1;
    }

    // Check if there are still columns to traverse
    if (left <= right) {
      // Traverse from bottom to top along the left boundary
      for (let i = bottom; i >= top; i--) {
        answerArr.push(matrix[i][left]);
      }
      // Move the left boundary right after traversing the left column
      left = left + 1;
    }
  }

  // Return the array containing the elements in spiral order
  return answerArr;
};

// Example 1 Input
const matrix1 = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

// Example 2 Input
const matrix2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The matrix elements in spiral order are: ",
  printSpiralSolution1(structuredClone(matrix1))
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The matrix elements in spiral order are: ",
  printSpiralSolution1(structuredClone(matrix2))
);

// Time Complexity: O(m x n) { Since all the elements are being traversed once and there are total n x m elements ( m elements in each row and total n rows) so the time complexity will be O(n x m)}.

// Space Complexity: O(n) { Extra Space used for storing traversal in the ans array }.
