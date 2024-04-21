/**
 * 👉 Article Link: https://takeuforward.org/pattern/pattern-11-binary-number-triangle-pattern/
 */

/*  ✅ Problem Statement: 
      Input Format: N = 3
      Result: 
      1
      01
      101
      
      Input Format: N = 6
      Result:   
      1
      01
      101
      0101
      10101
      010101
*/

const printPatternMethod1 = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";

    let start;
    const isEven = i % 2 === 0;

    if (isEven) {
      start = 1;
    } else {
      start = 0;
    }

    for (let j = 0; j <= i; j++) {
      row = row + start;
      start = 1 - start;
    }

    console.log(row);
  }
};

const printPatternMethod2 = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";

    const isEven = i % 2 === 0;

    for (let j = 0; j <= i; j++) {
      // For the first column
      if (j === 0) {
        if (isEven) {
          row = row + "1";
        } else {
          row = row + "0";
        }
      } else {
        // For the rest of the columns
        if (row.endsWith("0")) {
          row = row + "1";
        } else if (row.endsWith("1")) {
          row = row + "0";
        }
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

/* Rough Work */
/* 

For Method 2 👇

Here is,  
  n = 6

Consider that the index starts from 0.

// Initialize each column: start with '1' if the 'i' is even, otherwise start with '0'.
// For each subsequent character in the column, alternate between '1' and '0' based on the last character:
// - If the last character is '1', then append '0'.
// - If the last character is '0', then append '1'.

                          [ stars (j <= i)  ]
1             i = 0       []                    
01            i = 1       []                        
101           i = 2       []                        
0101          i = 3       []                        
10101         i = 4       []                        
010101        i = 5       []                        


*/
