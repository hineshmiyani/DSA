/**
 * @article  : https://takeuforward.org/data-structure/program-to-generate-pascals-triangle/
 * @question : https://leetcode.com/problems/pascals-triangle/description/
 */

/*
  ✅ Problem Statement (Variety-1): 

  Given the row number n. Print the n-th row of Pascal’s triangle.

  Example 1:
  Input Format: N = 5, r = 5, c = 3
  Result: 1 4 6 4 1 (for variation 2)
  Explanation: There are 5 rows in the output matrix. Each row is formed using the logic of Pascal’s triangle.

  Example 2:
  Input Format: N = 1, r = 1, c = 1
  Result: 1 (for variation 2)
  Explanation: The output matrix has only 1 row.

*/

// Brute-force Solution

// Function to calculate the binomial coefficient (nCr), which is used to determine the value at a specific position in Pascal's Triangle.
const nCrCalculation = (n, r) => {
  let result = 1;

  // Loop to calculate the binomial coefficient using the formula:
  // nCr = n! / (r! * (n - r)!)
  for (let i = 0; i < r; i++) {
    result = result * (n - i); // Multiply by (n - i)
    result = result / (i + 1); // Divide by (i + 1)
  }

  return result;
};

// Function to generate the nth row of Pascal's Triangle using the binomial coefficient.
const getPascalTriangleRowSolution1 = (row) => {
  const rowArr = []; // Initialize an empty array to store the row values.

  // Loop through each column in the row.
  for (let col = 1; col <= row; col++) {
    // Calculate the value at the current position using the binomial coefficient.
    rowArr.push(nCrCalculation(row - 1, col - 1));
  }

  return rowArr; // Return the generated row.
};

// Optimal Solution
// Function to generate the nth row of Pascal's Triangle using an optimal approach.
const getPascalTriangleRowSolution2 = (row) => {
  // Initialize an array to store the values of the row.
  const rowArr = [];

  // The first element of any row in Pascal's Triangle is always 1.
  rowArr.push(1);

  // Loop through each column in the row starting from the second element.
  for (let col = 1; col < row; col++) {
    // Get the last element added to the rowArr, which corresponds to the previous element in the row.
    const prevElement = rowArr[rowArr.length - 1];

    // Calculate the current element using the formula:
    // current element = previous element * (row - col) / col
    let result = prevElement * (row - col);
    result = result / col;

    // Add the calculated element to the rowArr.
    rowArr.push(result);
  }

  // Return the generated row.
  return rowArr;
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
console.log(`The ${row1} row is:`, getPascalTriangleRowSolution1(row1));
console.log("\n ------------- Example 2: ------------- \n");
console.log(`The ${row2} row is:`, getPascalTriangleRowSolution1(row2));

// Time Complexity: O(n*r), where n is the given row number, and r is the column index which can vary from 0 to n-1.
// Reason: We are calculating the element for each column. Now, there are total n columns, and for each column, the calculation of the element takes O(r) time where r is the column index.
// Space Complexity: O(1) as we are not using any extra space.

console.log("\n ------------- Solution 2: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(`The ${row1} row is:`, getPascalTriangleRowSolution2(row1));
console.log("\n ------------- Example 2: ------------- \n");
console.log(`The ${row2} row is:`, getPascalTriangleRowSolution2(row2));

// Time Complexity: O(N) where N = given row number. Here we are using only a single loop.
// Space Complexity: O(1) as we not using any extra space.
