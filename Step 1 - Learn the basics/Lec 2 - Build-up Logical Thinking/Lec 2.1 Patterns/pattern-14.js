/**
 * @article : https://takeuforward.org/pattern/pattern-14-increasing-letter-triangle-pattern/
 */

/*  ✅ Problem Statement: 
      Input Format: N = 3
      Result: 
      A
      A B
      A B C

      Input Format: N = 6
      Result:   
      A
      A B
      A B C
      A B C D
      A B C D E
      A B C D E F
*/

const printPatternMethod1 = (n) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      const condition = j <= letters.length ? j - 1 : j - letters.length - 1;
      const letter = letters.charAt(condition);

      row = row + letter + " ";
    }

    console.log(row);
  }
};

const printPatternMethod2 = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";

    for (
      let j = "A";
      row.replaceAll(" ", "").length <= i;
      j = String.fromCharCode(j.charCodeAt() + 1)
    ) {
      row = row + j + " ";
    }

    console.log(row);
  }
};

// console.log("Method 1: ");

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
