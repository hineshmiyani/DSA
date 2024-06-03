/**
 * @article : https://takeuforward.org/data-structure/find-gcd-of-two-numbers/
 */

/*
  ✅ Problem Statement: 

  Find the gcd of two numbers.

  Example 1:
  Input:
  num1 = 4, num2 = 8
  Output:
  4
  Explanation:
  Since 4 is the greatest number which divides both num1 and num2.

  Example 2:
  Input:
  num1 = 3, num2 = 6
  Output:
  3
  Explanation:
  Since 3 is the greatest number which divides both num1 and num2.

*/

const findGCDSolution1 = (number1, number2) => {
  let GCD = 1;

  for (let i = 1; i <= Math.min(number1, number2); i++) {
    if (number1 % i === 0 && number2 % i === 0) {
      GCD = i;
    }
  }

  return GCD;
};

// Time Complexity: O(n), because the loop has to run from 1 to min(n1, n2) always.
// Space Complexity: O(1), we are not using any extra space.

const findGCDSolution2 = (number1, number2) => {
  let GCD = 1;

  while (number1 > 0 && number2 > 0) {
    if (number1 > number2) {
      number1 = number1 % number2;
    } else {
      number2 = number2 % number1;
    }
  }

  if (number1 === 0) {
    GCD = number2;
  } else if (number2 === 0) {
    GCD = number1;
  }

  return GCD;
};

// Time Complexity: O(log(Φ)min(n1,n2)) or O(log(phi)min(n1,n2)), because every time the loop runs only sqrt(n) times.
// Space Complexity: O(1), we are not using any extra space.

console.log("------------- Solution 1: ------------- ");
console.log("GCD of 4 and 8 : ", findGCDSolution1(4, 8));
console.log("GCD of 3 and 6 : ", findGCDSolution1(3, 6));

console.log("------------- Solution 2: ------------- ");
console.log("GCD of 4 and 8 : ", findGCDSolution2(4, 8));
console.log("GCD of 3 and 6 : ", findGCDSolution2(3, 6));
