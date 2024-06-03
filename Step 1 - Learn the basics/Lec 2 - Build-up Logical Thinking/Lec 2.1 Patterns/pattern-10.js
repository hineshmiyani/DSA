/**
 * @article : https://takeuforward.org/pattern/pattern-10-half-diamond-star-pattern/
 */

/*  ✅ Problem Statement: 
      Input Format: N = 3
      Result: 
      *  
      **
      ***  
      **
      *   

      Input Format: N = 6
      Result:   
      *
      **
      *** 
      ****
      *****
      ******  
      *****
      ****
      ***    
      **
      *
*/

const printPatternMethod1 = (n) => {
  for (let i = 1; i <= 2 * n - 1; i++) {
    let row = "";

    let starsLimit = i <= n ? i : 2 * n - i;

    for (let j = 1; j <= starsLimit; j++) {
      row = row + "*";
    }

    console.log(row);
  }
};

const printPatternMethod2 = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j <= i; j++) {
      row = row + "*";
    }

    console.log(row);
  }

  for (let i = 0; i < n - 1; i++) {
    let row = "";

    for (let j = 0; j < n - i - 1; j++) {
      row = row + "*";
    }

    console.log(row);
  }
};

console.log("Method 1: ");
printPatternMethod1(3);
console.log("-------------------------------");
printPatternMethod1(6);

console.log("\n");

console.log("Method 2: ");
printPatternMethod2(3);
console.log("-------------------------------");
printPatternMethod2(6);

/* Rough Work */
/* 

For Method 1 👇

Here is,  
  n = 6
  row = 2n - 1 = 11   

Consider that the index starts from 1.

Here is stars (j) =  i <= n ?  j <= i : j <= 2n - i  

                          [    stars    ]
*             i = 1       [    j <= i   ]                        
**            i = 2       [    j <= i   ]                        
***           i = 3       [    j <= i   ]                        
****          i = 4       [    j <= i   ]                        
*****         i = 5       [    j <= i   ]                        
******        i = 6       [    j <= i   ]                        
*****         i = 7       [ j <= 2n - i ]                        
****          i = 8       [ j <= 2n - i ]                        
***           i = 9       [ j <= 2n - i ]                        
**            i = 10      [ j <= 2n - i ]                        
*             i = 11      [ j <= 2n - i ]                        

For Method 2 👇

for n = 6:

                          [ star (j <= i)  ]
*             i = 0       [       1      ]                                    
**            i = 1       [       2      ]               
***           i = 2       [       3      ]               
****          i = 3       [       4      ]               
*****         i = 4       [       5      ]              
******        i = 5       [       6      ]     


Here, n - 1:

                          [star (j < (n-i-1)]
*****         i = 0       [       5      ] // (6)-0-1              
****          i = 1       [       4      ]               
***           i = 2       [       3      ]               
**            i = 3       [       2      ]               
*             i = 4       [       1      ]               

*/
