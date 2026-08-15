/**
 * @article : https://takeuforward.org/data-structure/print-all-divisors-of-a-given-number/
 */

/*
  ✅ Problem Statement: 

  Given a number, print all the divisors of the number. A divisor is a number that gives the remainder as zero when divided.

  Example 1:
  Input:
  n = 36
  Output:
  1 2 3 4 6 9 12 18 36
  Explanation:
  All the divisors of 36 are printed.

  Example 2:
  Input:
  n = 97
  Output:
  1 97
  Explanation:
  Since 97 is a prime number, only 1 and 97 are printed.

*/

const findDivisorsSolution1 = (number) => {
  const divisors = [];

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }

  return divisors.toString();
};

// Time Complexity: O(n), because the loop has to run from 1 to n always.
// Space Complexity: O(1), we are not using any extra space.

const findDivisorsSolution2 = (number) => {
  const divisors = [];

  for (let i = 1; i <= number ** (1 / 2); i++) {
    if (number % i === 0) {
      const otherFactor = number / i;

      if (otherFactor === i) {
        divisors.push(i);
      } else {
        divisors.push(i, otherFactor);
      }
    }
  }

  return divisors.sort((a, b) => a - b).toString();
};

// Time Complexity: O(sqrt(n)), because every time the loop runs only sqrt(n) times.
// Space Complexity: O(1), we are not using any extra space.

console.log("------------- Solution 1: ------------- ");
console.log("Divisors of 36 : ", findDivisorsSolution1(36));
console.log("Divisors of 97 : ", findDivisorsSolution1(97));

console.log("------------- Solution 2: ------------- ");
console.log("Divisors of 36 : ", findDivisorsSolution2(36));
console.log("Divisors of 97 : ", findDivisorsSolution2(97));
