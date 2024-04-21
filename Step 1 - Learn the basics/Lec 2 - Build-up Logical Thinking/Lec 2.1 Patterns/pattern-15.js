/**
 * 👉 Article Link: https://takeuforward.org/pattern/pattern-15-reverse-letter-triangle-pattern/
 */

/*  ✅ Problem Statement: 
      Input Format: N = 3
      Result: 
      A B C
      A B
      A

      Input Format: N = 6
      Result:   
      A B C D E F
      A B C D E 
      A B C D
      A B C
      A B
      A
*/

const printPatternMethod1 = (n) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 1; j <= n - i; j++) {
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
      row.replaceAll(" ", "").length < n - i;
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
