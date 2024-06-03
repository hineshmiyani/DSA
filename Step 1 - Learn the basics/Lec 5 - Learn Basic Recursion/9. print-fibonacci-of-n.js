/**
 * @article : https://takeuforward.org/arrays/print-fibonacci-series-up-to-nth-term/
 */

/*
  ✅ Problem Statement: 

  Given an integer N. Print the Fibonacci of the Nth term.

  Example 1:
  Input: N = 5
  Output: 5

  Example 2:
  Input: 6
  Output: 8

*/

const printFibonacci = (n) => {
  if (n <= 1) {
    return n;
  }

  const lastTermFibonacci = printFibonacci(n - 1);
  const secondLastTermFibonacci = printFibonacci(n - 2);

  return lastTermFibonacci + secondLastTermFibonacci;
};

// Time Complexity: O(2^n)
// Space Complexity: O(1)

console.log("------------- Solution 1: ------------- ");
const n1 = 5;
console.log(`Fibonacci of ${n1}th term: `, printFibonacci(n1));

const n2 = 6;
console.log(`Fibonacci of ${n2}th term: `, printFibonacci(n2));
