/**
 * @article  : https://takeuforward.org/data-structure/program-to-generate-pascals-triangle/
 * @question : https://leetcode.com/problems/pascals-triangle/description/
 */

/*
  ✅ Problem Statement (Variety-1): 

  Given row number r and column number c. Print the element at position (r, c) in Pascal’s triangle.

  Example 1:
  Input Format: N = 5, r = 5, c = 3
  Result: 6 (for variation 1)
  Explanation: There are 5 rows in the output matrix. Each row is formed using the logic of Pascal’s triangle.

  Example 2:
  Input Format: N = 1, r = 1, c = 1
  Result: 1 (for variation 1)
  Explanation: The output matrix has only 1 row.

*/

// Brute-force Solution
// We can separately calculate n!, r!, (n-r)! and using their values we can calculate nCr. This is an extremely naive way to calculate. The time complexity will be O(n)+O(r)+O(n-r).

// Optimal Solution

// Function to calculate the binomial coefficient (nCr), which is used to find the value at a specific position in Pascal's Triangle.
const nCrCalculation = (n, r) => {
  let result = 1; // Initialize result to 1, as we will be multiplying values to it.

  // Loop to calculate the binomial coefficient using the formula:
  // nCr = n! / (r! * (n-r)!)
  for (let i = 0; i < r; i++) {
    result = result * (n - i); // Multiply result by (n - i)
    result = result / (i + 1); // Divide result by (i + 1)
  }

  return result; // Return the calculated binomial coefficient.
};

// Function to find the element at a specific position in Pascal's Triangle.
const getPascalTriangleElement = (row, column) => {
  // Calculate the element at the given position using the binomial coefficient.
  // In Pascal's Triangle, the element at position (row, column) is given by (row-1)C(column-1).
  const element = nCrCalculation(row - 1, column - 1);
  return element; // Return the calculated element.
};

// Example 1 Input
const n1 = 5;
const row1 = 5;
const column1 = 3;

// Example 2 Input
const n2 = 1;
const row2 = 1;
const column2 = 1;

console.log("\n ------------- Solution 1: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  `The element at position (${row1},${column1}) is:`,
  getPascalTriangleElement(row1, column1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  `The element at position (${row2},${column2}) is:`,
  getPascalTriangleElement(row2, column2)
);

// Time Complexity: O(c), where c = given column number.
// Reason: We are running a loop for r times, where r is c-1.

// Space Complexity: O(1) as we are not using any extra space.
