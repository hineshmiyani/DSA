/**
 * 👉 Article Link: https://takeuforward.org/maths/check-if-a-number-is-armstrong-number-or-not/
 */

/*
  ✅ Problem Statement: 

  Given a number, check if it is Armstrong Number or Not.

  Example 1:
  Input:153 
  Output: Yes, it is an Armstrong Number
  Explanation: 1^3 + 5^3 + 3^3 = 153

  Example 2:
  Input:170 
  Output: No, it is not an Armstrong Number
  Explanation: 1^3 + 7^3 + 0^3 !== 170

*/

const checkIsArmstrongSolution1 = (number) => {
  const originalNumber = number;

  let sum = 0;

  for (number; number > 0; ) {
    const lastDigit = number % 10;

    sum = sum + Math.pow(lastDigit, 3);

    number = parseInt(number / 10);
  }

  const isArmstrongNumber = originalNumber === sum;

  return isArmstrongNumber;
};

console.log("------------- Solution 1: ------------- ");
console.log("Is 153 Armstrong number? : ", checkIsArmstrongSolution1(153));
console.log("Is 170 Armstrong number? : ", checkIsArmstrongSolution1(170));
