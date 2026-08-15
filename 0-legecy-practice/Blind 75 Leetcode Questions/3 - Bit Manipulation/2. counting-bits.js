/**
 * @article  : https://algo.monster/liteproblems/338
 * @article  : https://leetcode.com/problems/counting-bits/solutions/3986178/97-97-dp-bit-manipulation-offset
 * @question : https://leetcode.com/problems/counting-bits
 * @question : https://neetcode.io/problems/counting-bits
 */

/*
  ✅ Problem Statement: 

  Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] array is the number of 1's in the binary representation of i.

  Example 1:
  Input: n = 2
  Output: [0,1,1]
  Explanation:
  0 --> 0
  1 --> 1
  2 --> 10


  Example 2:
  Input: n = 5
  Output: [0,1,1,2,1,2]
  Explanation:
  0 --> 0
  1 --> 1
  2 --> 10
  3 --> 11
  4 --> 100
  5 --> 101

*/

// Optimal Solution - 1
/**
 * Function to count the number of 1's in the binary representation of each number from 0 to the given number.
 * This function uses dynamic programming to achieve the result efficiently.
 */
const countBitsSolution1 = (number) => {
  // Initialize a dynamic programming array with all elements set to 0.
  // The array will have a length of number + 1 to include the number itself.
  const dp = new Array(number + 1).fill(0);

  // Offset is used to keep track of the most recent power of 2.
  let offset = 1;

  // Iterate through each number from 1 to the given number.
  for (let i = 1; i <= number; i++) {
    // If i is a power of 2, update the offset to the current value of i.
    if (offset * 2 === i) {
      offset = i;
    }

    // The number of 1's in the binary representation of i is 1 plus the number of 1's in the binary representation of (i - offset).
    dp[i] = 1 + dp[i - offset];
  }

  // Return the dynamic programming array containing the count of 1's for each number from 0 to the given number.
  return dp;
};

// Optimal Solution - 2

/**
 * Function to count the number of 1 bits in the binary representation of each number from 0 to the given number.
 * This function uses dynamic programming to efficiently compute the number of 1 bits.
 */
const countBitsSolution2 = (number) => {
  // Initialize an array of size (number + 1) with all elements set to 0.
  // This array will store the count of 1 bits for each number from 0 to 'number'.
  const result = new Array(number + 1).fill(0);

  // Iterate through each number from 1 to 'number'.
  // Note: We start from 1 because the count for 0 is already initialized to 0.
  for (let i = 1; i <= number; i++) {
    // The number of 1 bits in 'i' can be derived from the number of 1 bits in 'i >> 1' (i divided by 2).
    // 'i >> 1' shifts the bits of 'i' to the right by 1, effectively dividing it by 2.
    // 'i & 1' checks if the least significant bit of 'i' is 1 (i.e., if 'i' is odd).
    // By adding these two values, we get the number of 1 bits in 'i'.
    result[i] = result[i >> 1] + (i & 1);
  }

  // Return the array containing the count of 1 bits for each number from 0 to 'number'.
  return result;
};

// Example 1 Input
const number1 = 2;

// Example 2 Input
const number2 = 5;

console.log("\n ------------- Solution 1: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The array of set bit counts is: ", countBitsSolution1(number1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The array of set bit counts is: ", countBitsSolution1(number2));

// Time Complexity: O(n), where (n) is the input number.
// This is because the function iterates through each number from 1 to number exactly once in the for loop.

// Space Complexity: O(n)
// This is due to the dynamic programming array dp which stores the count of 1's for each number from 0 to number. The size of this array is number + 1.

console.log("\n ------------- Solution 2: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The array of set bit counts is: ", countBitsSolution2(number1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The array of set bit counts is: ", countBitsSolution2(number2));

// Time Complexity: O(n), where n is the input number.
// This is because the function iterates through each number from 1 to number exactly once, performing a constant amount of work (bitwise operations and array access) for each iteration.

// Space Complexity: O(n)
// This is due to the result array, which stores the count of 1 bits for each number from 0 to number. The size of this array is number + 1, which is linear with respect to the input number.
