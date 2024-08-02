/**
 * @article  : https://takeuforward.org/data-structure/rotate-image-by-90-degree/
 * @question : https://leetcode.com/problems/rotate-image/
 */

/*
  ✅ Problem Statement: 

  Given a matrix, your task is to rotate the matrix 90 degrees clockwise.

  Example 1:
  Input: [[1,2,3],[4,5,6],[7,8,9]]
  Output: [[7,4,1],[8,5,2],[9,6,3]]
  Explanation: Rotate the matrix simply by 90 degree clockwise and return the matrix.

  Example 2:
  Input: [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
  Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
  Explanation: Rotate the matrix simply by 90 degree clockwise and return the matrix

*/

// Brute-force Solution

/*
  Step-by-Step Approach:
  1. Determine the size of the matrix:
    - Since the matrix is assumed to be square, the number of rows (or columns) is stored in variable `n`.
  
  2. Initialize a new matrix to store the rotated values:
    - Create a new matrix `rotatedMatrix` with the same dimensions as the original matrix.
    - Use `Array.from` to create an array of length `n`, where each element is an array of length `n`.

  3. Iterate over each element in the original matrix:
    - Use nested loops to traverse each element in the original matrix.
    - The outer loop runs from 0 to `n-1` (inclusive) for rows.
    - The inner loop runs from 0 to `n-1` (inclusive) for columns.

  4. Calculate the new position for each element:
    - For each element at position (i, j) in the original matrix, determine its new position in the rotated matrix.
    - The element at (i, j) in the original matrix will be placed at (j, n - i - 1) in the rotated matrix.

  5. Assign the element to its new position:
    - Set `rotatedMatrix[j][n - i - 1]` to the value of `matrix[i][j]`.

  6. Return the rotated matrix:
    - After all elements have been placed in their new positions, return the `rotatedMatrix`.

*/

const rotateMatrixSolution1 = (matrix) => {
  // Get the size of the matrix (assuming it's a square matrix)
  const n = matrix.length;

  // Create a new matrix of the same size to store the rotated values
  const rotatedMatrix = Array.from({ length: n }, () => Array(n));

  // Iterate over each element in the original matrix
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // Place the element from the original matrix into its new position
      // in the rotated matrix. The element at position (i, j) in the original
      // matrix will be placed at position (j, n - i - 1) in the rotated matrix.
      rotatedMatrix[j][n - i - 1] = matrix[i][j];
    }
  }

  // Return the newly created rotated matrix
  return rotatedMatrix;
};

// Optimal Solution

/*
  Step-by-step approach:
  1. Determine the size of the matrix (n x n).

  2. Transpose the matrix:
    a. Iterate over each element in the upper triangle of the matrix (excluding the diagonal).
    b. Swap the elements at position (i, j) with the elements at position (j, i).

  3. Reverse each row of the transposed matrix:
    a. Iterate over each row in the matrix.
    b. Reverse the current row.

  4. Return the rotated matrix.
*/
const rotateMatrixSolution2 = (matrix) => {
  // Get the size of the matrix (assuming it's a square matrix)
  const n = matrix.length;

  // Step 1: Transpose the matrix
  // Iterate over each element in the upper triangle of the matrix
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      // Swap the elements at position (i, j) with the elements at position (j, i)
      // This effectively transposes the matrix in place
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // Step 2: Reverse each row of the transposed matrix
  // Iterate over each row in the matrix
  for (let i = 0; i < n; i++) {
    // Reverse the current row
    const row = matrix[i];
    row.reverse();
  }

  // Return the rotated matrix
  return matrix;
};

// Example 1 Input
const matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Example 2 Input
const matrix2 = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The rotated matrix is: ",
  rotateMatrixSolution1(structuredClone(matrix1))
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The rotated matrix is: ",
  rotateMatrixSolution1(structuredClone(matrix2))
);

// Time Complexity: O(N*N) to linearly iterate and put it into some other matrix.
// Space Complexity: O(N*N) to copy it into some other matrix.

console.log("\n\n ------------- Solution 2: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The rotated matrix is: ",
  rotateMatrixSolution2(structuredClone(matrix1))
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The rotated matrix is: ",
  rotateMatrixSolution2(structuredClone(matrix2))
);

// Time Complexity: O(N*N) + O(N*N).One O(N*N) is for transposing the matrix and the other is for reversing the matrix.
// Space Complexity: O(1).
