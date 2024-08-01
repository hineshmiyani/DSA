/**
 * @article  : https://leetcode.ca/2016-12-05-371-Sum-of-Two-Integers/
 * @article  : https://prepfortech.io/leetcode-solutions/sum-of-two-integers
 * @article  : https://leetcode.com/problems/sum-of-two-integers/solutions/606544/javascript-very-detailed-explanation-with-two-code-versions-enjoy
 * @question : https://leetcode.com/problems/sum-of-two-integers
 * @question : https://neetcode.io/problems/sum-of-two-integers
 */

/*
  ✅ Problem Statement: 

  Given two integers a and b, return the sum of the two integers without using the operators + and -.

  Example 1:
  Input: a = 1, b = 2
  Output: 3

  Example 2:
  Input: a = 2, b = 3
  Output: 5

*/

// Optimal Solution - 1

/* 
Approach:
1. Edge Case Handling:
   - If `a` is negative and `b` is zero, return `a` directly.
   - If `b` is negative and `a` is zero, return `b` directly.
   
2. Sum Calculation:
   - Use the properties of logarithms and exponential to calculate the sum.
   - Convert `a` and `b` to their exponential forms using `Math.exp(a)` and `Math.exp(b)`.
   - Multiply the exponential forms together.
   - Take the natural logarithm of the product to get the sum.
   - This approach leverages the mathematical identity: log(e^a * e^b) = a + b.
   
3. Return the Result:
   - The result of the logarithmic and exponential operations is returned as the sum.
   - Note: This method is unconventional and may not be accurate for all cases, especially with large numbers or edge cases not covered by the initial checks.
*/

/**
 * Function to calculate the sum of two integers using bit manipulation.
 * This function uses logarithmic and exponential functions to achieve the sum.
 */
const getSumSolution1 = (a, b) => {
  // If `a` is negative and `b` is zero, return `a` as the sum.
  if (a < 0 && b === 0) {
    return a;
  }

  // If `b` is negative and `a` is zero, return `b` as the sum.
  if (b < 0 && a === 0) {
    return b;
  }

  // Calculate the sum using logarithmic and exponential functions.
  // This is a non-standard way to sum two numbers and may not be accurate for all cases.
  return Math.log(Math.exp(a) * Math.exp(b));
};

// Optimal Solution - 2

/* 
Approach:
  1. Initialization:
    - Define two variables: `xor` to store the XOR result and `carry` to store the carry result.
  2. Loop Until No Carry:
    - Continue looping as long as `b` (which represents the carry) is not zero.
  3. Calculate Carry:
    - Use the bitwise AND operator (`&`) on `a` and `b` to find the carry bits.
    - Left shift the carry bits by 1 to align them with the next higher bit position.
  4. Calculate XOR:
    - Use the bitwise XOR operator (`^`) on `a` and `b` to find the sum without considering the carry.
  5. Update `a` and `b`:
    - Assign the XOR result to `a` (this becomes the new sum).
    - Assign the carry result to `b` (this becomes the new carry).
  6. Repeat:
    - Repeat steps 3 to 5 until there is no carry left (`b` becomes 0).
  7. Return the Result:
    - Once the loop exits, `a` contains the final sum of the two integers.
*/

/**
 * Function to calculate the sum of two integers without using the '+' operator.
 * This function uses bitwise operations to achieve the result.
 */
const getSumSolution2 = (a, b) => {
  let xor; // Variable to store the XOR result of a and b
  let carry; // Variable to store the carry result of a and b

  // Loop until there is no carry left
  while (b !== 0) {
    // Calculate the carry by ANDing a and b, then left shifting by 1
    carry = (a & b) << 1;

    // Calculate the XOR of a and b, which is the sum without carry
    xor = a ^ b;

    // Update a to be the XOR result
    a = xor;

    // Update b to be the carry result
    b = carry;
  }

  // Return the final result which is stored in a
  return a;
};

// Example 1 Inputs
const a1 = 1;
const b1 = 2;

// Example 2 Inputs
const a2 = 2;
const b2 = 3;

console.log("\n ------------- Solution 1: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The sum of two integer is: ", getSumSolution1(a1, b1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The sum of two integer is: ", getSumSolution1(a2, b2));

// Time Complexity: O(1)
// This is because the operations performed within the function (conditional checks and mathematical operations) take constant time regardless of the input values of a and b.

// Space Complexity: O(1)
// This is because the function uses a fixed amount of space for its operations and does not require any additional space that scales with the size of the input values a and b.

console.log("\n ------------- Solution 2: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The sum of two integer is: ", getSumSolution2(a1, b1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The sum of two integer is: ", getSumSolution2(a2, b2));

// Time Complexity: O(n), where n is the number of bits required to represent the larger of the two numbers a and b
// This is because, in the worst case, the loop runs once for each bit position until there are no more carries left. Each iteration of the loop processes one bit position.

// Space Complexity: O(1)
// This is because the function uses a constant amount of extra space regardless of the input size. The variables xor and carry are used to store intermediate results, but they do not depend on the size of the input.
