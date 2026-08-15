/**
 * @article : https://takeuforward.org/pattern/pattern-4-right-angled-number-pyramid-ii/
 */

/*  ✅ Problem Statement: 
      Input Format: N = 3
      Result: 
      1
      2 2 
      3 3 3

      Input Format: N = 6
      Result:
      1
      2 2
      3 3 3
      4 4 4 4
      5 5 5 5 5
      6 6 6 6 6 6
*/

const printPattern = (n) => {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      row = row + i + " ";
    }

    console.log(row);
  }
};

printPattern(3);
console.log("-------------------------------");
printPattern(6);
