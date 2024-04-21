/**
 * 👉 Article Link: https://takeuforward.org/pattern/pattern-20-symmetric-butterfly-pattern/
 */

/*  ✅ Problem Statement: 
      Input Format: N = 3
      Result: 
      *    *
      **  **
      ******
      **  **
      *    *

      Input Format: N = 6
      Result:   
      *          *
      **        **
      ***      ***
      ****    ****
      *****  *****
      ************
      *****  *****
      ****    ****
      ***      ***
      **        **
      *          *

*/

const printPatternMethod = (n) => {
  const totalRows = 2 * n - 1;
  for (let i = 1; i <= totalRows; i++) {
    let row = "";

    const starsLimit = n >= i ? i : 2 * n - i;
    const spacesLimit = n >= i ? 2 * (n - i) : 2 * (i - n);

    // stars
    for (let j = 1; j <= starsLimit; j++) {
      row = row + "*";
    }

    // spaces
    for (let j = 1; j <= spacesLimit; j++) {
      row = row + " ";
    }

    // stars
    for (let j = 1; j <= starsLimit; j++) {
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


                              [    star (i)   , space (2(n - i)),    star (i)   ]
*          *      i = 1       [       1       ,        10       ,       1       ]
**        **      i = 2       [       2       ,        8        ,       2       ]
***      ***      i = 3       [       3       ,        6        ,       3       ]
****    ****      i = 4       [       4       ,        4        ,       4       ]
*****  *****      i = 5       [       5       ,        2        ,       5       ]
************      i = 6       [       6       ,        0        ,       6       ]

                              [   star (2n-i) , space (2(i - n)),   star (2n-i) ]
*****  *****      i = 7       [       5       ,        2        ,       5       ]   
****    ****      i = 8       [       4       ,        4        ,       4       ]   
***      ***      i = 9       [       3       ,        6        ,       3       ]   
**        **      i = 10      [       2       ,        8        ,       2       ]   
*          *      i = 11      [       1       ,        10       ,       1       ]   



*/
