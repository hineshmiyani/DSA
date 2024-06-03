/**
 * @article : https://takeuforward.org/pattern/pattern-7-star-pyramid/
 */

/*  ✅ Problem Statement: 
      Input Format: N = 3
      Result: 
        *  
       *** 
      *****   

      Input Format: N = 6
      Result:
           *     
          ***    
         *****   
        *******  
       ********* 
      ***********
*/

const printPatternMethod1 = (n) => {
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
};

const printPatternMethod2 = (n) => {
  for (let i = 1; i <= n; i++) {
    let row = "";

    const middleIndex = Math.ceil((2 * n - 1) / 2);

    for (let j = 1; j <= 2 * n - 1; j++) {
      if (j > middleIndex - i && j < middleIndex + i) {
        row = row + "*";
      } else {
        row = row + " ";
      }
    }

    console.log(row);
  }
};

const printPatternMethod3 = (n) => {
  for (let i = 1; i <= n; i++) {
    let row = "";

    const middleIndex = Math.ceil((2 * n - 1) / 2);

    for (let j = 1; j <= middleIndex; j++) {
      if (j >= middleIndex - i + 1) {
        row = row + "*";
      } else {
        row = row + " ";
      }
    }

    if (i > 1) {
      for (let j = 1; j <= i - 1; j++) {
        row = row + "*";
      }
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

console.log("\n");

console.log("Method 3: ");
printPatternMethod3(3);
console.log("-------------------------------");
printPatternMethod3(6);

/* Rough Work */
/* 

For Method 1 👇

for n = 6
                         [space (n-i-1) , star ((2*i)+1) , space (n-i-1)] 
     *        i =  0     [      5       ,       1        ,       5      ]                                    
    ***       i =  1     [      4       ,       3        ,       4      ]               
   *****      i =  2     [      3       ,       5        ,       3      ]               
  *******     i =  3     [      2       ,       7        ,       2      ]               
 *********    i =  4     [      1       ,       9        ,       1      ]               
***********   i =  5     [      0       ,       11       ,       0      ]               



For Method 2 👇

for n = 6

total column length with blank space => 2n - 1  => 2*6 - 1 = 11

middleIndex => Math.ceil((2 * n - 1) / 2) => 7

Row (i) ->  (print "*" only when  [ middleIndex - i < j < middleIndex + i ]) 
1       ->   7-1  < j < 7+1
2       ->   7-2  < j < 7+2  
3       ->   7-3  < j < 7+3  
4       ->   7-4  < j < 7+4  
5       ->   7-5  < j < 7+5  
6       ->   7-6  < j < 7+6  

*/
