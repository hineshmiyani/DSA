/**
 * 👉 Article Link: https://takeuforward.org/pattern/pattern-2-right-angled-triangle-pattern/
 */

/*  ✅ Problem Statement: 
      Input Format: N = 3
      Result: 
      * 
      * * 
      * * *

      Input Format: N = 6
      Result:
      * 
      * * 
      * * *
      * * * *
      * * * * *
      * * * * * *
*/

const printPattern = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j <= i; j++) {
      row = row + "* ";
    }

    console.log(row);
  }
};

printPattern(3);
console.log("-------------------------------");
printPattern(6);
