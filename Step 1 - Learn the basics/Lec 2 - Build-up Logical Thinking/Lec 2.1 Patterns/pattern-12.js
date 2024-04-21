/**
 * 👉 Article Link: https://takeuforward.org/pattern/pattern-12-number-crown-pattern/
 */

/*  ✅ Problem Statement: 
      Input Format: N = 3
      Result: 
      1    1
      12  21
      123321
      
      Input Format: N = 6
      Result:   
      1          1
      12        21
      123      321
      1234    4321
      12345  54321
      123456654321
*/

const printPatternMethod = (n) => {
  for (let i = 1; i <= n; i++) {
    let row = "";

    // numbers
    for (let j = 1; j <= i; j++) {
      row = row + j;
    }

    // spaces
    for (let j = 1; j <= 2 * (n - i); j++) {
      row = row + " ";
    }

    // numbers
    for (let j = i; j > 0; j--) {
      row = row + j;
    }

    console.log(row);
  }
};

printPatternMethod(3);
console.log("-------------------------------");
printPatternMethod(6);

/* Rough Work */
/* 

Here is,  
  n = 6

Consider that the index starts from 1.

                            [   number (i) ,  space (2(n-i))  ,  number (i)  ]  
1          1     i = 1      [      1       ,       10       ,       1      ]  
12        21     i = 2      [      2       ,       8        ,       1      ]  
123      321     i = 3      [      3       ,       6        ,       3      ]  
1234    4321     i = 4      [      4       ,       4        ,       4      ]  
12345  54321     i = 5      [      5       ,       2        ,       5      ]  
123456654321     i = 6      [      6       ,       0        ,       6      ]  










*/
