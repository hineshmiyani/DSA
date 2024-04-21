/**
 * 👉 Article Link: https://takeuforward.org/pattern/pattern-21-hollow-rectangle-pattern/
 */

/*  ✅ Problem Statement: 
      Input Format: N = 3
      Result: 
      ***
      * *
      ***

      Input Format: N = 6
      Result:   
      ******
      *    *
      *    *
      *    *
      *    *
      ******

*/

const printPatternMethod = (n) => {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= n; j++) {
      if (i === 1 || i === n || j === 1 || j === n) {
        row = row + "*";
      } else {
        row = row + " ";
      }
    }

    console.log(row);
  }
};

printPatternMethod(3);
console.log("-------------------------------");
printPatternMethod(6);
console.log("-------------------------------");
printPatternMethod(40);

/* Rough Work */
/* 

for n = 6

Consider that the index starts from 1.

                              [    star         ,          space            ,    star       ]
******            i = 1       [   6 (i === 1)   ,  0                        ,  0            ]
*    *            i = 2       [   1 (j === 1)   ,  4 (j !== 1 || j !== n )  ,  1 (j === n)  ]
*    *            i = 3       [   1 (j === 1)   ,  4 (j !== 1 || j !== n )  ,  1 (j === n)  ]
*    *            i = 4       [   1 (j === 1)   ,  4 (j !== 1 || j !== n )  ,  1 (j === n)  ]
*    *            i = 5       [   1 (j === 1)   ,  4 (j !== 1 || j !== n )  ,  1 (j === n)  ]
******            i = 6       [   6 (i === n)   ,  0                        ,  0            ]


*/
