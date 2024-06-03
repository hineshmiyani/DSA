/**
 * @article : https://takeuforward.org/c-programs/reverse-a-number-in-c/
 */

/*
  ✅ Problem Statement: 

  Given a number N reverse the number and print it.

  Example 1:
  Input: N = 123
  Output: 321
  Explanation: The reverse of 123 is 321
  
  Example 2:
  Input: N = 234
  Output: 432
  Explanation: The reverse of 234 is 432


*/

const reverseNumberSolution1 = (number) => {
  let reverseNumber = 0;

  for (number; number > 0; ) {
    const lastDigit = number % 10;
    reverseNumber = reverseNumber * 10 + lastDigit;
    number = parseInt(number / 10);
  }

  return reverseNumber;
};

const countDigitsSolution2 = (number) => {
  let numberString = number.toString();
  let reverseString = "";

  for (const char of numberString) {
    reverseString = char + reverseString;
  }

  return Number(reverseString);
};

console.log("------------- Solution 1: ------------- ");
console.log("Reverse number of 123: ", reverseNumberSolution1(123));
console.log("Reverse number of 234: ", reverseNumberSolution1(234));

console.log("------------- Solution 2: ------------- ");
console.log("Reverse number of 123: ", countDigitsSolution2(123));
console.log("Reverse number of 234: ", countDigitsSolution2(234));
