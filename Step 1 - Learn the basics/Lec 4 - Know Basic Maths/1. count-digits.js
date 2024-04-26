/**
 * 👉 Article Link: https://takeuforward.org/data-structure/count-digits-in-a-number/
 */

/*
  ✅ Problem Statement: 

  Given an integer N, write a program to count the number of digits in N.

  Example 1:
  Input:
  N = 12345

  Output
  : 5

  Explanation:
  N has 5 digits
  
  Example 2:

  Input:
  N = 8394

  Output
  : 4

  Explanation:
  N has 4 digits

*/

const countDigitsSolution1 = (number) => {
  let count = 0;
  for (number; number > 0; number = parseInt(number / 10)) {
    count = count + 1;
  }

  return count;
};

const countDigitsSolution2 = (number) => {
  const count = number.toString().length;
  return count;
};

const countDigitsSolution3 = (number) => {
  const count = parseInt(Math.log10(number)) + 1;
  return count;
};

console.log("------------- Solution 1: ------------- ");
console.log("Digit Count of 12345: ", countDigitsSolution1(12345));
console.log("Digit Count of 8394: ", countDigitsSolution1(8394));

console.log("------------- Solution 2: ------------- ");
console.log("Digit Count of 12345: ", countDigitsSolution2(12345));
console.log("Digit Count of 8394: ", countDigitsSolution2(8394));

console.log("------------- Solution 3: ------------- ");
console.log("Digit Count of 12345: ", countDigitsSolution3(12345));
console.log("Digit Count of 8394: ", countDigitsSolution3(8394));
