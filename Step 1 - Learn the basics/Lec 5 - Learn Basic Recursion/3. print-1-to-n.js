/**
 * @article : https://takeuforward.org/recursion/print-1-to-n-using-recursion/
 */

/*
  ✅ Problem Statement: 

  Print from 1 to N using Recursion

  */

const printNumberSolution1 = (count, number) => {
  if (count > number) {
    return;
  }

  console.log(count);

  count = count + 1;
  printNumberSolution1(count, number);
};

// Using backtracking
const printNumberSolution2 = (count, number) => {
  if (count < 1) {
    return;
  }

  printNumberSolution2(count - 1, number);

  console.log(count);
};

console.log("------------- Solution 1: ------------- ");
printNumberSolution1(1, 4);

console.log("------------- Solution 2: ------------- ");
printNumberSolution2(4, 4);
