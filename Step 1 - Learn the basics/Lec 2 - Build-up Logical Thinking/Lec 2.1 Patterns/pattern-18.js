/**
 * @article : https://takeuforward.org/pattern/pattern-18-alpha-triangle-pattern/
 */

/*  ✅ Problem Statement: 
      Input Format: N = 3
      Result: 
      C
      B C
      A B C

      Input Format: N = 6
      Result:   
      F
      E F
      D E F
      C D E F
      B C D E F
      A B C D E F
*/

const printPatternMethod = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";

    const firstRowLetter = String.fromCharCode("A".charCodeAt() + (n - i - 1));

    for (let j = 0; j <= i; j++) {
      const letter = String.fromCharCode(firstRowLetter.charCodeAt() + j);
      row = row + letter + " ";
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

Consider that the index starts from 0.


                         [column length : (j <= i) ]       [column character starts from (n-i-1)]
F             i =  0              [j <= 0]                     [n-0-1 = 5 => 'A'+ 5 => 'F' ]                             
E F           i =  1              [j <= 1]                     [n-1-1 = 4 => 'A'+ 4 => 'E' ]    
D E F         i =  2              [j <= 2]                     [n-2-1 = 3 => 'A'+ 3 => 'D' ]    
C D E F       i =  3              [j <= 3]                     [n-3-1 = 2 => 'A'+ 2 => 'C' ]    
B C D E F     i =  4              [j <= 4]                     [n-4-1 = 1 => 'A'+ 1 => 'B' ]    
A B C D E F   i =  5              [j <= 5]                     [n-5-1 = 0 => 'A'+ 0 => 'A' ]    


*/
