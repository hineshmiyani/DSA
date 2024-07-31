/**
 * @article  : https://prepfortech.io/leetcode-solutions/reverse-bits
 * @article  : https://leetcode.com/problems/reverse-bits/solutions/54738/sharing-my-2ms-java-solution-with-explanation
 * @question : https://leetcode.com/problems/reverse-bits
 */

/*
  ✅ Problem Statement: 

  Reverse bits of a given 32 bits unsigned integer.

  Example 1:
  Input: n = 00000010100101000001111010011100
  Output:    964176192 (00111001011110000010100101000000)
  Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.

  Example 2:
  Input: n = 11111111111111111111111111111101
  Output:   3221225471 (10111111111111111111111111111111)
  Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.


*/

// Optimal Solution - 1

/* 
Approach:
  1. Initialization: Start with a result variable initialized to 0.
  2. Bit Manipulation: Iterate through each bit of the input number.
    - Extract the least significant bit (rightmost bit) from the input number using bitwise AND with 1.
    - Shift this bit to its reversed position (31 - current bit index).
    - Combine the shifted bit with the result using bitwise OR.
    - Shift the input number to the right by 1 bit to process the next bit in the next iteration.
  3. Return the Result: After processing all 32 bits, the result will contain the reversed bits.
*/

/**
 * Function to reverse the bits of a given 32-bit unsigned integer.
 */
const reverseBitsSolution1 = (number) => {
  // Initialize the result to 0, which will store the reversed bits.
  let result = 0;

  // Iterate over each bit position from 0 to 31.
  for (let i = 0; i < 32; i++) {
    // Extract the last bit of the current number.
    let lastBit = number & 1;

    // Shift the extracted bit to its reversed position.
    let reverseLastBit = lastBit << (31 - i);

    // Combine the reversed bit with the result using bitwise OR.
    result = result | reverseLastBit;

    // Right shift the number to process the next bit in the next iteration.
    number = number >> 1;
  }

  // Return the result as an unsigned 32-bit integer.
  return result >>> 0;
};

// Optimal Solution - 2
/* 
Approach:
  1. Initialization: Start with a result variable initialized to 0.
  2. Bit Manipulation: Iterate through each bit of the input number.
    - Shift the result to the left by 1 bit to make space for the next bit.
    - Extract the least significant bit (rightmost bit) from the input number using bitwise AND with 1.
    - Add this bit to the result.
    - Shift the input number to the right by 1 bit to process the next bit in the next iteration.
  3. Return the Result: After processing all 32 bits, the result will contain the reversed bits.
*/

/**
 * Reverses the bits of a given 32-bit unsigned integer.
 */
const reverseBitsSolution2 = (number) => {
  // Initialize the result to 0. This will store the reversed bits.
  let result = 0;

  // Iterate over each of the 32 bits of the input number.
  for (let i = 0; i < 32; i++) {
    // Shift the result to the left by 1 bit to make space for the next bit.
    result = result << 1;

    // Extract the last bit of the current number.
    const lastBit = number & 1;

    // Add the extracted bit to the result.
    result = result | lastBit;

    // Shift the number to the right by 1 bit to process the next bit in the next iteration.
    number = number >> 1;
  }

  // Return the result as an unsigned 32-bit integer.
  // The >>> 0 operation ensures the result is treated as an unsigned 32-bit integer.
  return result >>> 0;
};

// Example 1 Input
const number1 = 0b00000010100101000001111010011100;

// Example 2 Input
const number2 = 0b11111111111111111111111111111101;

console.log("\n ------------- Solution 1: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The reverse bits is: ", reverseBitsSolution1(number1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The reverse bits is: ", reverseBitsSolution1(number2));

// Time Complexity: O(1)
// This is because the loop runs a fixed number of times (32 iterations), regardless of the input size. Each operation inside the loop (bitwise operations and shifts) takes constant time.

// Space Complexity: O(1)
// The function uses a constant amount of extra space for the variables result, lastBit, and reverseLastBit, and these do not depend on the size of the input.

console.log("\n ------------- Solution 2: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The reverse bits is: ", reverseBitsSolution2(number1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The reverse bits is: ", reverseBitsSolution2(number2));

// Time Complexity: O(1)
// This is because the function always iterates exactly 32 times, regardless of the input. The number of operations is constant and does not depend on the size of the input.

// Space Complexity: O(1)
// The function uses a fixed amount of extra space for variables (result and lastBit), which does not grow with the size of the input.
