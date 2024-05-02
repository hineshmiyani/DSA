/**
 * 👉 Article Link: https://takeuforward.org/recursion/print-n-to-1-using-recursion/
 */

/*
  ✅ Problem Statement: 

  Print from N to 1 using Recursion

  */

const printNumberSolution1 = (number) => {
  if (number < 1) {
    return;
  }

  console.log(number);

  number = number - 1;
  printNumberSolution1(number);
};

// Using backtracking
const printNumberSolution2 = (count, number) => {
  if (count > 4) {
    return;
  }

  printNumberSolution2(count + 1);

  console.log(count);
};

console.log("------------- Solution 1: ------------- ");
printNumberSolution1(4);

console.log("------------- Solution 2: ------------- ");
printNumberSolution2(1, 4);
