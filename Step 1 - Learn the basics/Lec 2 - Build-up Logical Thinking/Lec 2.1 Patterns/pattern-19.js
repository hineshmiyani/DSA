/**
 * 👉 Article Link: https://takeuforward.org/pattern/pattern-19-symmetric-void-pattern/
 */

/*  ✅ Problem Statement: 
      Input Format: N = 3
      Result: 
      ******
      **  **
      *    *
      *    *
      **  **
      ******

      Input Format: N = 6
      Result:   
      ************
      *****  *****
      ****    ****
      ***      ***
      **        **
      *          *
      *          *
      **        **
      ***      ***
      ****    ****
      *****  *****
      ************
*/

const printPatternMethod = (n) => {
  for (let i = 1; i <= n; i++) {
    let row = "";

    // stars
    for (let j = 1; j <= n - i + 1; j++) {
      row = row + "*";
    }

    // spaces
    for (let j = 1; j <= 2 * (i - 1); j++) {
      row = row + " ";
    }

    // stars
    for (let j = 1; j <= n - i + 1; j++) {
      row = row + "*";
    }

    console.log(row);
  }

  for (let i = 1; i <= n; i++) {
    let row = "";

    // stars
    for (let j = 1; j <= i; j++) {
      row = row + "*";
    }

    // spaces
    for (let j = 1; j <= 2 * (n - i); j++) {
      row = row + " ";
    }

    // stars
    for (let j = 1; j <= i; j++) {
      row = row + "*";
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


                              [ star (n-i+1) ,  space (2(i - 1)) , star (n-i+1) ]
************      i = 1       [       6        ,        0        ,       6       ]
*****  *****      i = 2       [       5        ,        2        ,       5       ]
****    ****      i = 3       [       4        ,        4        ,       4       ]
***      ***      i = 4       [       3        ,        6        ,       3       ]
**        **      i = 5       [       2        ,        8        ,       2       ]
*          *      i = 6       [       1        ,        10       ,       1       ]

                              [   star (i) ,  space (2(n - i)) ,  star (i)   ]
*          *      i = 1       [      1       ,        10       ,       1       ]                                      
**        **      i = 2       [      2       ,        8        ,       2       ]                                    
***      ***      i = 3       [      3       ,        6        ,       3       ]                                    
****    ****      i = 4       [      4       ,        4        ,       4       ]                                    
*****  *****      i = 5       [      5       ,        2        ,       5       ]                                      
************      i = 6       [      6       ,        0        ,       6       ]                                      


*/
