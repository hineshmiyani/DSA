/**
 * 👉 Article Link: https://takeuforward.org/data-structure/pattern-1-rectangular-star-pattern/
 */

/*  ✅ Problem Statement: 
      Example 1:
      Input: N = 3
      Output: 
      * * *
      * * *
      * * *

      Example 2:
      Input: N = 6
      Output:
      * * * * * *
      * * * * * *
      * * * * * *
      * * * * * *
      * * * * * *
      * * * * * * 
*/

const printPattern = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < n; j++) {
      row = row + "* ";
    }

    console.log(row);
  }
};

printPattern(3);
console.log("-------------------------------");
printPattern(6);
