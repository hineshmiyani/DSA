/**
 * @article  : https://takeuforward.org/data-structure/move-all-zeros-to-the-end-of-the-array/
 * @question : https://leetcode.com/problems/move-zeroes/
 */

/*
  ✅ Problem Statement: 

  You are given an array of integers, your task is to move all the zeros in the array to the end of the array and move non-negative integers to the front by maintaining their order.

  Example 1:
  Input: [1 ,0 ,2 ,3 ,0 ,4 ,0 ,1]
  Output: [1 ,2 ,3 ,4 ,1 ,0 ,0 ,0]
  Explanation: All the zeros are moved to the end and non-negative integers are moved to front by maintaining order

  Example 2:
  Input: [1, 2, 0, 1, 0, 4, 0]
  Output: [1, 2, 1, 4, 0, 0, 0]
  Explanation: All the zeros are moved to the end and non-negative integers are moved to front by maintaining order

*/

// Brute-force Solution
const moveZerosSolution1 = (arr) => {
  // Initialize an empty array to store non-zero numbers
  const nonZeroNums = [];

  // First pass: Iterate through the input array to collect all non-zero numbers
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] !== 0) {
      // If the current element is not zero, add it to the nonZeroNums array
      nonZeroNums.push(arr[index]);
    }
  }

  // Second pass: Copy the non-zero numbers back to the original array
  for (let index = 0; index < nonZeroNums.length; index++) {
    // Place each non-zero number in its original order at the beginning of the array
    arr[index] = nonZeroNums[index];
  }

  // Third pass: Fill the remaining positions in the array with zeros
  for (let index = nonZeroNums.length; index < arr.length; index++) {
    // Set the remaining elements in the array to zero
    arr[index] = 0;
  }

  // Return the modified array with all zeros moved to the end
  return arr;
};

// Optimal Solution
const moveZerosSolution2 = (arr) => {
  // Initialize a variable 'k' to keep track of the first zero's index
  let k = -1;

  // First loop: Find the first occurrence of zero in the array
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === 0) {
      k = index; // Set 'k' to the index of the first zero
      break; // Exit the loop once the first zero is found
    }
  }

  // If no zero is found, return the original array as it is already in the desired state
  if (k === -1) return arr;

  // Second loop: Iterate through the array starting from the index after the first zero
  for (let index = k + 1; index < arr.length; index++) {
    if (arr[index] !== 0) {
      // Swap the current non-zero element with the element at index 'k'
      [arr[k], arr[index]] = [arr[index], arr[k]];
      k++; // Move 'k' to the next position
    }
  }

  // Return the modified array with all zeros moved to the end
  return arr;
};

console.log("\n ------------- Solution 1: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "Moved zeros to the end: ",
  moveZerosSolution1([1, 0, 2, 3, 0, 4, 0, 1])
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "Moved zeros to the end: ",
  moveZerosSolution1([1, 2, 0, 1, 0, 4, 0])
);

// Time Complexity: O(N) + O(X) + O(N-X) ~ O(2*N), where N = total no. of elements,
// X = no. of non-zero elements, and N-X = total no. of zeros.
// Reason: O(N) for copying non-zero elements from the original to the temporary array. O(X) for again copying it back from the temporary to the original array. O(N-X) for filling zeros in the original array. So, the total time complexity will be O(2*N).

// Space Complexity: O(N), as we are using a temporary array to solve this problem and the maximum size of the array can be N in the worst case.
// Reason: The temporary array stores the non-zero elements. In the worst case, all the given array elements will be non-zero.

console.log("\n ------------- Solution 2: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "Moved zeros to the end:  ",
  moveZerosSolution2([1, 0, 2, 3, 0, 4, 0, 1])
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "Moved zeros to the end: ",
  moveZerosSolution2([1, 2, 0, 1, 0, 4, 0])
);

// Time Complexity: O(N), N = size of the array.
// Reason: We have used 2 loops and using those loops, we are basically traversing the array once.

// Space Complexity: O(1) as we are not using any extra space to solve this problem.
