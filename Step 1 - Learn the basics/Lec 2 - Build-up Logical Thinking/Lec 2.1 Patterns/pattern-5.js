/**
 * 👉 Article Link: https://takeuforward.org/pattern/pattern-5-inverted-right-pyramid/
 */

/*  ✅ Problem Statement: 
      Input Format: N = 3
      Result: 
      * * *
      * * 
      *

      Input Format: N = 6
      Result:
      * * * * * *
      * * * * * 
      * * * * 
      * * * 
      * * 
      * 
*/

const printPattern = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < n - i; j++) {
      row = row + "* ";
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

Row -> Length of column 
0  ->  6
1  ->  5
2  ->  4
3  ->  3
4  ->  2
5  ->  1

*/
