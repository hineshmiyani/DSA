/**
 * @article  : https://takeuforward.org/data-structure/set-matrix-zero/
 * @question : https://leetcode.com/problems/set-matrix-zeroes/
 */

/*
  ✅ Problem Statement: 

  Given a matrix if an element in the matrix is 0 then you will have to set its entire column and row to 0 and then return the matrix.

  Examples 1:
  Input: matrix=[[1,1,1],[1,0,1],[1,1,1]]
  Output: [[1,0,1],[0,0,0],[1,0,1]]
  Explanation: Since matrix[2][2]=0.Therefore the 2nd column and 2nd row wil be set to 0.
 
  Examples 2:
  Input: matrix=[[0,1,2,0],[3,4,5,2],[1,3,1,5]]
  Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
  Explanation: Since matrix[0][0]=0 and matrix[0][3]=0. Therefore 1st row, 1st column and 4th column will be set to 0

*/

// Brute-force Solution
const zeroMatrixSolution1 = (matrix) => {
  const n = matrix.length; // Number of rows in the matrix
  const m = matrix[0].length; // Number of columns in the matrix

  // Marks all elements in the specified row as -1, except those that are already 0.
  const markRow = (i) => {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] !== 0) {
        matrix[i][j] = -1; // Mark non-zero elements as -1
      }
    }
  };

  // Marks all elements in the specified column as -1, except those that are already 0.
  const markColumn = (j) => {
    for (let i = 0; i < n; i++) {
      if (matrix[i][j] !== 0) {
        matrix[i][j] = -1; // Mark non-zero elements as -1
      }
    }
  };

  // First pass: mark rows and columns that need to be zeroed
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        markRow(i); // Mark the entire row
        markColumn(j); // Mark the entire column
      }
    }
  }

  // Second pass: set marked elements to 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === -1) {
        matrix[i][j] = 0; // Convert marked elements to 0
      }
    }
  }

  return matrix; // Return the modified matrix
};

// Better Solution:
const zeroMatrixSolution2 = (matrix) => {
  // Get the number of rows (n) and columns (m) in the matrix
  const n = matrix.length;
  const m = matrix[0].length;

  // Initialize two arrays to keep track of which rows and columns need to be zeroed
  const rowHash = Array(n).fill(0); // Array to mark rows that need to be zeroed
  const columnHash = Array(m).fill(0); // Array to mark columns that need to be zeroed

  // First pass: Identify all rows and columns that contain at least one zero
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        // If an element is zero, mark its row and column in the respective arrays
        rowHash[i] = 1;
        columnHash[j] = 1;
      }
    }
  }

  // Second pass: Update the matrix based on the rowHash and columnHash arrays
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // If the current row or column is marked, set the element to zero
      if (rowHash[i] === 1 || columnHash[j] === 1) {
        matrix[i][j] = 0;
      }
    }
  }

  // Return the modified matrix
  return matrix;
};

// Optimal Solution
const zeroMatrixSolution3 = (matrix) => {
  // Get the number of rows (n) and columns (m) in the matrix
  const n = matrix.length;
  const m = matrix[0].length;

  // Initialize a variable to track if the first column should be zeroed
  let col0 = 1;

  // First pass: Use the first row and first column as markers
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        // Mark the first element of the row as 0
        matrix[i][0] = 0;

        // Mark the first element of the column as 0, unless it's the first column
        if (j !== 0) {
          matrix[0][j] = 0;
        } else {
          // If it's the first column, set col0 to 0
          col0 = 0;
        }
      }
    }
  }

  // Second pass: Use the markers to set elements to 0
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (matrix[i][j] !== 0) {
        // If the row or column is marked, set the element to 0
        if (matrix[i][0] === 0 || matrix[0][j] === 0) {
          matrix[i][j] = 0;
        }
      }
    }
  }

  // If the first element of the first row is 0, set the entire first row to 0
  if (matrix[0][0] === 0) {
    for (let j = 0; j < m; j++) {
      matrix[0][j] = 0;
    }
  }

  // If col0 is 0, set the entire first column to 0
  if (col0 === 0) {
    for (let i = 0; i < n; i++) {
      matrix[i][0] = 0;
    }
  }

  // Return the modified matrix
  return matrix;
};

// Example 1 Input
const matrix1 = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

// Example 2 Input
const matrix2 = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The Final matrix is: ",
  zeroMatrixSolution1(structuredClone(matrix1))
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The Final matrix is: ",
  zeroMatrixSolution1(structuredClone(matrix2))
);

// Time Complexity: O((N*M)*(N + M)) + O(N*M), where N = no. of rows in the matrix and M = no. of columns in the matrix.
// Reason: Firstly, we are traversing the matrix to find the cells with the value 0. It takes O(N*M). Now, whenever we find any such cell we mark that row and column with -1. This process takes O(N+M). So, combining this the whole process, finding and marking, takes O((N*M)*(N + M)).
// Another O(N*M) is taken to mark all the cells with -1 as 0 finally.

// Space Complexity: O(1) as we are not using any extra space.

console.log("\n\n ------------- Solution 2: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The Final matrix is: ",
  zeroMatrixSolution2(structuredClone(matrix1))
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The Final matrix is: ",
  zeroMatrixSolution2(structuredClone(matrix2))
);

// Time Complexity: O(2*(N*M)), where N = no. of rows in the matrix and M = no. of columns in the matrix.
// Reason: We are traversing the entire matrix 2 times and each traversal is taking O(N*M) time complexity.

// Space Complexity: O(N) + O(M), where N = no. of rows in the matrix and M = no. of columns in the matrix.
// Reason: O(N) is for using the row array and O(M) is for using the col array.

console.log("\n\n ------------- Solution 3: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The Final matrix is: ",
  zeroMatrixSolution3(structuredClone(matrix1))
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The Final matrix is: ",
  zeroMatrixSolution3(structuredClone(matrix2))
);

// Time Complexity: O(2*(N*M)), where N = no. of rows in the matrix and M = no. of columns in the matrix.
// Reason: In this approach, we are also traversing the entire matrix 2 times and each traversal is taking O(N*M) time complexity.

// Space Complexity: O(1) as we are not using any extra space
