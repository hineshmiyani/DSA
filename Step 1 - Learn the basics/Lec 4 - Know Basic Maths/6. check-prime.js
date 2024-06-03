/**
 * @article : https://takeuforward.org/data-structure/check-if-a-number-is-prime-or-not/
 */

/*
  ✅ Problem Statement: 

  Given a number, check whether it is prime or not. A prime number is a natural number that is only divisible by 1 and by itself. (Examples 1 2 3 5 7 11 13 17 19 …)

  Example 1:
  Input:
  N = 3
  Output:
  Prime
  Explanation:
  3 is a prime number

  Example 2:
  Input:
  N = 26
  Output:
  Non-Prime
  Explanation:
  26 is not prime

*/

const checkIsPrimeSolution1 = (number) => {
  if (number === 0 || number === 1) return false;

  let isPrime;

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      if (i === 1 || i === number) {
        // Prime
        isPrime = true;
      } else {
        // Non Prime
        isPrime = false;
        break;
      }
    }
  }

  return isPrime;
};

// Time Complexity: O(n), because the loop has to run from 1 to n always.
// Space Complexity: O(1), we are not using any extra space.

const checkIsPrimeSolution2 = (number) => {
  if (number === 0 || number === 1) return false;

  let isPrime;

  for (let i = 1; i <= number ** (1 / 2); i++) {
    if (number % i === 0) {
      if (i === 1 || i === number) {
        isPrime = true;
      } else {
        isPrime = false;
        break;
      }
    }
  }

  return isPrime;
};

// Time Complexity: O(sqrt(n)), because every time the loop runs only sqrt(n) times.
// Space Complexity: O(1), we are not using any extra space.

console.log("------------- Solution 1: ------------- ");
console.log("Is 3 prime number? : ", checkIsPrimeSolution1(3));
console.log("Is 26 prime number? : ", checkIsPrimeSolution1(26));

console.log("------------- Solution 2: ------------- ");
console.log("Is 3 prime number? : ", checkIsPrimeSolution2(3));
console.log("Is 26 prime number? : ", checkIsPrimeSolution2(26));
