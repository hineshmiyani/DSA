/**
 * 👉 Article Link: https://takeuforward.org/data-structure/sum-of-first-n-natural-numbers/
 */

/*
  ✅ Problem Statement: 

  Given a number ‘N’, find out the sum of the first N natural numbers.

  Example 1:
  Input: N=5
  Output: 15
  Explanation: 1+2+3+4+5=15
  
  Example 2:
  Input: N=6
  Output: 21
  Explanation: 1+2+3+4+5+6=15

  */

// Parameterized Recursion
const sumOfNumbersSolution1 = (number, sum) => {
  if (number < 1) {
    console.log(sum);
    return;
  }

  sumOfNumbersSolution1(number - 1, sum + number);
};

// Time Complexity: O(N)
// Space Complexity: O(1)

// Functional Recursion
const sumOfNumbersSolution2 = (number) => {
  if (number === 0) {
    return 0;
  }

  return number + sumOfNumbersSolution2(number - 1);
};

// Time Complexity: O(N)
// Space Complexity: O(1)

console.log("------------- Solution 1: ------------- ");
console.log("Sum of first 5 numbers: ");
sumOfNumbersSolution1(5, 0);
console.log("Sum of first 6 numbers: ");
sumOfNumbersSolution1(6, 0);

console.log("------------- Solution 2: ------------- ");
console.log("Sum of first 5 numbers: ", sumOfNumbersSolution2(5));
console.log("Sum of first 6 numbers: ", sumOfNumbersSolution2(6));
