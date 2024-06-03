/**
 * @article : https://takeuforward.org/pattern/pattern-16-alpha-ramp-pattern/
 */

/*  ✅ Problem Statement: 
      Input Format: N = 3
      Result: 
      A
      B B
      C C C
      
      Input Format: N = 6
      Result:   
      A 
      B B
      C C C
      D D D D
      E E E E E
      F F F F F F
*/

const printPatternMethod1 = (n) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < n; i++) {
    let row = "";

    const condition = i < letters.length ? i : i - letters.length;

    for (let j = 0; j <= i; j++) {
      const letter = letters.charAt(condition);

      row = row + letter + " ";
    }

    console.log(row);
  }
};

const printPatternMethod2 = (n) => {
  let letter = "A";

  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j <= i; j++) {
      row = row + letter + " ";
    }

    letter = String.fromCharCode(letter.charCodeAt() + 1);

    console.log(row);
  }
};

console.log("Method 1: ");

printPatternMethod1(3);
console.log("-------------------------------");
printPatternMethod1(6);
console.log("-------------------------------");
printPatternMethod1(40);

console.log("\n");

console.log("Method 2: ");

printPatternMethod2(3);
console.log("-------------------------------");
printPatternMethod2(6);
console.log("-------------------------------");
printPatternMethod2(40);
