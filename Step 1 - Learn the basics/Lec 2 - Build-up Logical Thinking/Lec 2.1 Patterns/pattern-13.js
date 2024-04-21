/**
 * 👉 Article Link: https://takeuforward.org/pattern/pattern-13-increasing-number-triangle-pattern/
 */

/*  ✅ Problem Statement: 
      Input Format: N = 3
      Result: 
      1
      2 3
      4 5 6

      Input Format: N = 6
      Result:   
      1
      2  3
      4  5  6
      7  8  9  10
      11  12  13  14  15
      16  17  18  19  20  21
*/

const printPatternMethod = (n) => {
  let count = 0; // Initialize a counter variable

  for (let i = 1; i <= n; i++) {
    let row = ""; // Initialize an empty string to store the numbers in each row

    for (let j = 1; j <= i; j++) {
      count = count + 1; // Increment the counter
      row = row + count + " "; // Add the current number and a space to the row string
    }

    console.log(row);
  }
};

printPatternMethod(3);
console.log("-------------------------------");
printPatternMethod(6);
