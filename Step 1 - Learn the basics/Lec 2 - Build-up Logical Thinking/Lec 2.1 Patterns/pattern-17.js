/**
 * 👉 Article Link: https://takeuforward.org/pattern/pattern-17-alpha-hill-pattern/
 */

/*  ✅ Problem Statement: 
      Input Format: N = 3
      Result: 
        A  
       ABA 
      ABCBA


      Input Format: N = 6
      Result:   
           A     
          ABA    
         ABCBA   
        ABCDCBA  
       ABCDEDCBA 
      ABCDEFEDCBA
*/

const printPatternMethod = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";

    // spaces
    for (let j = 0; j <= n - i - 1; j++) {
      row = row + " ";
    }

    // letters
    let letter;

    // Generate the letter for the current row
    // We start from 'A' for the first row and move up/down based on the index
    // The letter increments/decrements based on the index and the position in the row
    for (let j = 0; j < 2 * i + 1; j++) {
      // If it's the first letter of the row, initialize it with 'A'
      if (j === 0) {
        letter = "A"; // Start with 'A'
      }
      // If it's in the range of 1 to i, increment the letter
      else if (j < i + 1) {
        letter = String.fromCharCode(letter.charCodeAt() + 1); // Increment the letter
      }
      // If it's beyond i, decrement the letter
      else {
        letter = String.fromCharCode(letter.charCodeAt() - 1); // Decrement the letter
      }

      // Append the letter to the row
      row = row + letter;
    }

    // spaces
    for (let j = 0; j <= n - i - 1; j++) {
      row = row + " ";
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

For Method 1 👇

for n = 6
                         [space (n-i-1) ,star (j<=i | j<i) , space (n-i-1) ] 
     A        i =  0     [      5       ,      1  |  0     ,       5       ]                                    
    ABA       i =  1     [      4       ,      2  |  1     ,       4       ]               
   ABCBA      i =  2     [      3       ,      3  |  2     ,       3       ]               
  ABCDCBA     i =  3     [      2       ,      4  |  3     ,       2       ]               
 ABCDEDCBA    i =  4     [      1       ,      5  |  4     ,       1       ]               
ABCDEFEDCBA   i =  5     [      0       ,      6  |  5     ,       0       ]               


*/
