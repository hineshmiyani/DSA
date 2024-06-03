/**
 * @article : https://takeuforward.org/pattern/pattern-22-the-number-pattern/
 */

/*  ✅ Problem Statement: 
      Input Format: N = 3
      Result: 
      3 3 3 3 3 
      3 2 2 2 3 
      3 2 1 2 3 
      3 2 2 2 3 
      3 3 3 3 3
      
      Input Format: N = 6
      Result:   
      6 6 6 6 6 6 6 6 6 6 6 
      6 5 5 5 5 5 5 5 5 5 6 
      6 5 4 4 4 4 4 4 4 5 6 
      6 5 4 3 3 3 3 3 4 5 6 
      6 5 4 3 2 2 2 3 4 5 6 
      6 5 4 3 2 1 2 3 4 5 6 
      6 5 4 3 2 2 2 3 4 5 6 
      6 5 4 3 3 3 3 3 4 5 6 
      6 5 4 4 4 4 4 4 4 5 6 
      6 5 5 5 5 5 5 5 5 5 6 
      6 6 6 6 6 6 6 6 6 6 6

*/

/*
This function, 'printPatternMethod', takes an integer 'n' as input and prints a pattern based on the value of 'n'.

The pattern consists of rows and columns. Each cell in the pattern contains a number. The number in each cell depends on the position of the cell in the row and column.

The pattern is symmetric about the center cell, which is the cell in the middle of the row and column.

The function does the following:
1. It initializes an empty string, 'row', to store each row of the pattern.
2. It loops through each row of the pattern.
3. It loops through each cell in the row.
4. It calculates the positions of the cell in the row and column relative to the center cell.
5. It finds the minimum value among these positions.
6. It appends the difference between 'n' and the minimum position value to the 'row' string.
7. It appends a space after each number in the 'row' string.
8. It prints the 'row' string.
*/
const printPatternMethod = (n) => {
  // Loop through each row of the pattern
  for (let i = 0; i < 2 * n - 1; i++) {
    let row = ""; // Initialize an empty string to store each row of the pattern

    // Loop through each cell in the row
    for (let j = 0; j < 2 * n - 1; j++) {
      // Calculate the positions of the cell in the row and column relative to the border
      const left = j; // Position of cell
      const top = i; // Position of cell
      const right = 2 * n - 2 - j; // Position of cell
      const bottom = 2 * n - 2 - i; // Position of cell

      // Find the minimum value among these positions
      const minPositionValue = Math.min(left, top, right, bottom);

      // Append the difference between 'n' and the minimum position value to the 'row' string
      row = row + (n - minPositionValue) + " ";
    }

    // Print the 'row' string
    console.log(row);
  }
};

printPatternMethod(3);
console.log("-------------------------------");
printPatternMethod(6);

/* Rough Work */
/* 

for n = 3

Consider that the index starts from 1.

[Original Matrix]                [Subtracts n from the number of rows and columns]           
3 3 3 3 3                        0 0 0 0 0               
3 2 2 2 3                        0 1 1 1 0         
3 2 1 2 3                        0 1 2 1 0         
3 2 2 2 3                        0 1 1 1 0         
3 3 3 3 3                        0 0 0 0 0         


*/
