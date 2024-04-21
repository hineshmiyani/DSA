/**
 * 👉 Article Link: https://takeuforward.org/pattern/pattern-3-right-angled-number-pyramid/
 */

/*  ✅ Problem Statement: 
      Input Format: N = 3
      Result: 
      1
      1 2 
      1 2 3

      Input Format: N = 6
      Result:
      1
      1 2
      1 2 3
      1 2 3 4
      1 2 3 4 5
      1 2 3 4 5 6
*/

const printPattern = (n) => {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      row = row + j + " ";
    }

    console.log(row);
  }
};

printPattern(3);
console.log("-------------------------------");
printPattern(6);
