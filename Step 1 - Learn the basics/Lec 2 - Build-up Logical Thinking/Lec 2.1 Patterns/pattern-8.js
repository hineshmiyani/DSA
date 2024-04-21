/**
 * 👉 Article Link: https://takeuforward.org/pattern/pattern-8-inverted-star-pyramid/
 */

/*  ✅ Problem Statement: 
      Input Format: N = 3
      Result: 
      *****  
       ***
        *   

      Input Format: N = 6
      Result:     
      ***********
       *********
        *******
         ***** 
          ***    
           *
*/

const printPatternMethod = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";

    // spaces
    for (let j = 0; j < i; j++) {
      row = row + " ";
    }

    // stars
    for (let j = 0; j < 2 * n - 2 * i - 1; j++) {
      row = row + "*";
    }

    // spaces
    for (let j = 0; j < i; j++) {
      row = row + " ";
    }

    console.log(row);
  }
};

printPatternMethod(3);
console.log("-------------------------------");
printPatternMethod(6);

/* Rough Work */
/* 

For Method 1 👇

for n = 6
                         [   space (i)  , star (2n-2i-1) ,   space (i)  ]
***********   i = 0      [      0       ,       11       ,       0      ]                                    
 *********    i = 1      [      1       ,       9        ,       1      ]               
  *******     i = 2      [      2       ,       7        ,       2      ]               
   *****      i = 3      [      3       ,       5        ,       3      ]               
    ***       i = 4      [      4       ,       3        ,       4      ]               
     *        i = 5      [      5       ,       1        ,       5      ]               

*/
