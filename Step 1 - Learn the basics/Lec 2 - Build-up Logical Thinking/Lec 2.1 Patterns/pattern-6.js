/**
 * 👉 Article Link: https://takeuforward.org/pattern/pattern-6-inverted-numbered-right-pyramid/
 */

/*  ✅ Problem Statement: 
      Input Format: N = 3
      Result: 
      1 2 3
      1 2
      1

      Input Format: N = 6
      Result:
      1 2 3 4 5 6
      1 2 3 4 5
      1 2 3 4
      1 2 3
      1 2 
      1
*/

const printPattern = (n) => {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= n - i + 1; j++) {
      row = row + j + " ";
    }

    console.log(row);
  }
};

printPattern(3);
console.log("-------------------------------");
printPattern(6);

/* Rough Work */
/* 

for n = 6

Row (i) -> Length of column (print j)  // n - i + 1
1  ->  6                               // 6 - 1 + 1
2  ->  5                               // 6 - 2 + 1
3  ->  4                               // 6 - 3 + 1 
4  ->  3                               // 6 - 4 + 1
5  ->  2                               // 6 - 5 + 1
6  ->  1                               // 6 - 6 + 1

*/
