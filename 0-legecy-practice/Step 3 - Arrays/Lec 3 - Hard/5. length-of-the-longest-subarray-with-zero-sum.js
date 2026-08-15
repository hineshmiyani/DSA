/**
 * @article  : https://takeuforward.org/data-structure/4-sum-find-quads-that-add-up-to-a-target-value/
 * @question : https://leetcode.com/problems/4sum/
 */

/*
  ✅ Problem Statement: 

  Given an array containing both positive and negative integers, we have to find the length of the longest subarray with the sum of all elements equal to zero.

  Example 1:
  Input Format: N = 6, array[] = {9, -3, 3, -1, 6, -5}
  Result: 5
  Explanation: The following subarrays sum to zero: {-3, 3} , {-1, 6, -5}, {-3, 3, -1, 6, -5}. Since we require the length of the longest subarray, our answer is 5!

  Example 2:
  Input Format: N = 8, array[] = {6, -2, 2, -8, 1, 7, 4, -10}
  Result: 8
  Subarrays with sum 0 : {-2, 2}, {-8, 1, 7}, {-2, 2, -8, 1, 7}, {6, -2, 2, -8, 1, 7, 4, -10}. Length of longest subarray = 8

  Example 3:
  Input Format: N = 3, array[] = {1, 0, -5}
  Result: 1
  Subarray : {0}. Length of longest subarray = 1

  Example 4:
  Input Format: N = 5, array[] = {1, 3, -5, 6, -2}
  Result: 0
  Subarray: There is no subarray that sums to zero

*/

// Brute-force Solution
const findLongestSubArrayLengthSolution1 = (arr, expectedSum) => {
  // Initialize the variable to store the maximum length of subarray found
  let maxLength = 0;

  // Outer loop to set the starting point of the subarray
  for (let i = 0; i < arr.length; i++) {
    // Initialize the sum for the current subarray starting at index i
    let sum = 0;

    // Inner loop to extend the subarray from the starting point i
    for (let j = i; j < arr.length; j++) {
      // Add the current element to the sum
      sum = sum + arr[j];

      // Check if the current sum equals the expected sum
      if (sum === expectedSum) {
        // Update the maximum length if the current subarray is longer
        maxLength = Math.max(maxLength, j - i + 1);
      }
    }
  }

  // Return the maximum length of subarray found
  return maxLength;
};

// Optimal Solution
const findLongestSubArrayLengthSolution2 = (arr, expectedSum) => {
  // Create a map to store the prefix sums and their corresponding indices
  const preSumMap = new Map();

  // Initialize the sum of elements and the maximum length of subarray found
  let sum = 0;
  let maxLength = 0;

  // Iterate through the array
  for (let index = 0; index < arr.length; index++) {
    // Add the current element to the sum
    sum = sum + arr[index];

    // If the sum equals the expected sum, update the maximum length
    if (sum === expectedSum) {
      maxLength = Math.max(maxLength, index + 1);
    }

    // Calculate the difference between the current sum and the expected sum
    const difference = sum - expectedSum;

    // If the difference is found in the map, it means there is a subarray
    // with the sum equal to the expected sum
    if (preSumMap.has(difference)) {
      // Calculate the length of the subarray
      const lengthOfSubArray = index - preSumMap.get(difference);
      // Update the maximum length if the current subarray is longer
      maxLength = Math.max(maxLength, lengthOfSubArray);
    }

    // If the current sum is not already in the map, add it with the current index
    // This ensures we store the earliest occurrence of each prefix sum
    if (!preSumMap.has(sum)) {
      preSumMap.set(sum, index);
    }
  }

  // Return the maximum length of subarray found
  return maxLength;
};

// Example 1 Input
const arr1 = [9, -3, 3, -1, 6, -5];
const target1 = 0;

// Example 2 Input
const arr2 = [6, -2, 2, -8, 1, 7, 4, -10];
const target2 = 0;

console.log("\n ------------- Solution 1: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The length of the longest subarray is: ",
  findLongestSubArrayLengthSolution1(arr1, target1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The length of the longest subarray is: ",
  findLongestSubArrayLengthSolution1(arr2, target2)
);

// Time Complexity: O(N^2) as we have two loops for traversal
// Space Complexity: O(1) as we aren’t using any extra space.

console.log("\n ------------- Solution 2: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The length of the longest subarray is: ",
  findLongestSubArrayLengthSolution2(arr1, target1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The length of the longest subarray is: ",
  findLongestSubArrayLengthSolution2(arr2, target2)
);

// Time Complexity: O(N), as we are traversing the array only once
// Space Complexity: O(N), in the worst case we would insert all array elements prefix sum into our hashmap
