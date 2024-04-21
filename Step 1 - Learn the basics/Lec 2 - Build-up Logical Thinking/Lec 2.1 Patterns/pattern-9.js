/**
 * 👉 Article Link: https://takeuforward.org/pattern/pattern-9-diamond-star-pattern/
 */

/*  ✅ Problem Statement: 
      Input Format: N = 3
      Result: 
        *  
       ***
      ***** 
      *****  
       ***
        *  

      Input Format: N = 6
      Result:   
           *
          ***
         ***** 
        *******
       *********
      ***********  
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
    for (let j = 0; j < n - i - 1; j++) {
      row = row + " ";
    }

    // stars
    for (let j = 0; j < 2 * i + 1; j++) {
      row = row + "*";
    }

    // spaces
    for (let j = 0; j < n - i - 1; j++) {
      row = row + " ";
    }

    console.log(row);
  }

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

for n = 6

                         [ space (n-i-1)  , star (2*i+1) , space(n-i-1) ]
     *        i = 0      [      5       ,       1        ,       5      ]                                    
    ***       i = 1      [      4       ,       3        ,       4      ]               
   *****      i = 2      [      3       ,       5        ,       3      ]               
  *******     i = 3      [      2       ,       7        ,       2      ]               
 *********    i = 4      [      1       ,       9        ,       1      ]              
***********   i = 5      [      0       ,       11       ,       0      ]     

                         [   space (i)  , star (2n-2i-1) ,   space (i)  ]
***********   i = 0      [      0       ,       11       ,       0      ]                                    
 *********    i = 1      [      1       ,       9        ,       1      ]               
  *******     i = 2      [      2       ,       7        ,       2      ]               
   *****      i = 3      [      3       ,       5        ,       3      ]               
    ***       i = 4      [      4       ,       3        ,       4      ]               
     *        i = 5      [      5       ,       1        ,       5      ]               

*/
