/**
 * @article  : https://algo.monster/liteproblems/191
 * @article  : https://leetcode.com/problems/number-of-1-bits/solutions/1996783/javascript-solutions-notes-from-a-bootcamp-teacher
 * @question : https://leetcode.com/problems/number-of-1-bits/
 * @question : https://neetcode.io/problems/number-of-one-bits
 */

/*
  ✅ Problem Statement: 

  Write a function that takes the binary representation of a positive integer and returns the number of set bits it has (also known as the Hamming weight).

  Example 1:
  Input: n = 11
  Output: 3
  Explanation:
  The input binary string 1011 has a total of three set bits.

  Example 2:
  Input: n = 128
  Output: 1
  Explanation:
  The input binary string 10000000 has a total of one set bit.

  Example 3:
  Input: n = 2147483645
  Output: 30
  Explanation:
  The input binary string 1111111111111111111111111111101 has a total of thirty set bits.

*/

// Optimal Solution - 1
/**
 * Function to count the number of '1' bits (also known as the Hamming weight) in the binary representation of a given number.
 * This implementation uses bitwise operations to achieve the result.
 */
const hammingWeightSolution1 = (number) => {
  // Initialize a counter to keep track of the number of '1' bits.
  let countOfSetBits = 0;

  // Loop until all bits are processed (i.e., the number becomes 0).
  while (number !== 0) {
    // Check if the least significant bit (LSB) is set (i.e., if it is '1').
    const isSetBit = (number & 1) === 1;

    // If the LSB is set, increment the counter.
    if (isSetBit) {
      countOfSetBits = countOfSetBits + 1;
    }

    // Right shift the number by 1 bit to process the next bit in the next iteration.
    // The '>>>' operator is used to perform an unsigned right shift, ensuring that the sign bit is filled with 0.
    number = number >>> 1;
  }

  // Return the total count of '1' bits.
  return countOfSetBits;
};

// Optimal Solution - 2
/**
 * Calculates the number of '1' bits (also known as the Hamming weight) in the binary representation of a given number.
 * This function uses Brian Kernighan's algorithm to count the set bits.
 */
const hammingWeightSolution2 = (number) => {
  // Initialize the counter for the number of set bits
  let countOfSetBits = 0;

  // Loop until the number becomes zero
  while (number !== 0) {
    // Perform bitwise AND between the number and (number - 1)
    // This operation removes the rightmost '1' bit from the number
    // For example, if number is 12 (1100 in binary), number - 1 is 11 (1011 in binary)
    // The bitwise AND of 1100 & 1011 results in 1000, effectively removing the rightmost '1' bit
    number = number & (number - 1);

    // Increment the count of set bits
    countOfSetBits = countOfSetBits + 1;
  }

  // Return the total count of '1' bits
  return countOfSetBits;
};

// Example 1 Input
const number1 = 11;

// Example 2 Input
const number2 = 128;

console.log("\n ------------- Solution 1: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The count of set bits is: ", hammingWeightSolution1(number1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The count of set bits is: ", hammingWeightSolution1(number2));

// Time Complexity : O(k), where k is the number of bits in the binary representation of the input number.
// The while loop runs until number becomes 0.
// In each iteration, the number is right-shifted by 1 bit.
// Therefore, the number of iterations is equal to the number of bits in the binary representation of number.
// For a 32-bit integer, the loop will run at most 32 times, making the time complexity O(32), which simplifies to O(1) for fixed-width integers. However, for a general case where the number of bits is not fixed, the time complexity is O(k).

// Space Complexity: O(1)
// The function uses a constant amount of extra space.
// The variables countOfSetBits and isSetBit use a fixed amount of memory regardless of the input size.
// No additional data structures are used that grow with the input size.
// Thus, the space complexity is O(1).

console.log("\n ------------- Solution 2: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The count of set bits is: ", hammingWeightSolution2(number1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The count of set bits is: ", hammingWeightSolution2(number2));

// Time Complexity: O(k), where k is the number of set bits (1s) in the binary representation of the input number.
// The while loop runs as long as number is not zero.
// In each iteration of the loop, the operation number = number & (number - 1) removes the rightmost set bit from number.
// Therefore, the loop executes exactly as many times as there are set bits in the binary representation of number.

// Space Complexity:
// The space complexity of the hammingWeightSolution2 function is O(1).
// The function uses a constant amount of extra space regardless of the input size.
// The variables countOfSetBits and number are the only additional storage used, and they do not depend on the size of the input.
