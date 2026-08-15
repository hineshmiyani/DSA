/**
 * @article  : https://takeuforward.org/data-structure/program-to-generate-pascals-triangle/
 * @question : https://leetcode.com/problems/pascals-triangle/description/
 */

/*
  ✅ Problem Statement (Variety-1): 

  Given the number of rows n. Print the first n rows of Pascal’s triangle.

  Example 1:
  Input Format: N = 5, r = 5, c = 3
  Result: 
  1 
  1 1 
  1 2 1 
  1 3 3 1 
  1 4 6 4 1    (for variation 3)
  Explanation: There are 5 rows in the output matrix. Each row is formed using the logic of Pascal’s triangle.

  Example 2:
  Input Format: N = 1, r = 1, c = 1
  Result:
  1  (for variation 3)
  Explanation:
  The output matrix has only 1 row.
  

*/

// Brute-force Solution
/**
 * Function to calculate the binomial coefficient (nCr), which is used to determine
 * the elements of Pascal's Triangle.
 */
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

/**
 * Function to generate Pascal's Triangle up to a given number of rows.
 */
const getPascalTriangleSolution1 = (rowCount) => {
  const triangle = []; // Initialize an empty array to hold the rows of Pascal's Triangle

  // Loop through each row from 1 to rowCount (inclusive)
  for (let row = 1; row <= rowCount; row++) {
    const rowArr = []; // Initialize an empty array to hold the current row's elements

    // Loop through each column in the current row
    for (let col = 1; col <= row; col++) {
      // Calculate the element at the current position using the binomial coefficient
      const element = nCrCalculation(row - 1, col - 1);
      rowArr.push(element); // Add the element to the current row's array
    }

    triangle.push(rowArr); // Add the current row's array to the triangle array
  }

  return triangle; // Return the complete Pascal's Triangle
};

// Optimal Solution
/**
 * Function to generate a single row of Pascal's Triangle.
 */
const generateRow = (row) => {
  const rowArr = []; // Initialize an empty array to hold the elements of the row

  rowArr.push(1); // The first element of every row in Pascal's Triangle is always 1

  // Loop through each column in the current row, starting from the second element
  for (let col = 1; col < row; col++) {
    const prevElement = rowArr[rowArr.length - 1]; // Get the last element added to the row
    let result = prevElement * (row - col); // Calculate the numerator for the binomial coefficient
    result = result / col; // Divide by the column index to complete the binomial coefficient calculation
    rowArr.push(result); // Add the calculated element to the row array
  }

  return rowArr; // Return the completed row array
};

/**
 * Function to generate Pascal's Triangle up to a given number of rows.
 */
const getPascalTriangleSolution2 = (numRows) => {
  const triangle = []; // Initialize an empty array to hold all the rows of Pascal's Triangle

  // Loop through each row from 1 to numRows (inclusive)
  for (let row = 1; row <= numRows; row++) {
    triangle.push(generateRow(row)); // Generate the current row and add it to the triangle array
  }

  return triangle; // Return the complete Pascal's Triangle
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
  `The pascal triangle for ${row1} is: `,
  getPascalTriangleSolution1(row1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  `The pascal triangle for ${row2} is: `,
  getPascalTriangleSolution1(row2)
);

// Time Complexity: O(n*n*r) ~ O(n3), where n = number of rows, and r = column index.
// Reason: The row loop will run for approximately n times. And generating a row using the naive approach of variation 2 takes O(n*r) time complexity.

// Space Complexity: In this case, we are only using space to store the answer. That is why space complexity can be still considered as O(1)

console.log("\n ------------- Solution 2: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  `The pascal triangle for ${row1} is: `,
  getPascalTriangleSolution2(row1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  `The pascal triangle for ${row2} is: `,
  getPascalTriangleSolution2(row2)
);

// Time Complexity: O(n2), where n = number of rows(given).
// Reason: We are generating a row for each single row. The number of rows is n. And generating an entire row takes O(n) time complexity.

// Space Complexity: In this case, we are only using space to store the answer. That is why space complexity can still be considered as O(1).
