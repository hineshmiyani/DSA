/**
 * @article  : https://takeuforward.org/data-structure/kadanes-algorithm-maximum-subarray-sum-in-an-array/
 * @question : https://leetcode.com/problems/maximum-subarray/
 */

/*
  ✅ Problem Statement: 

  Given an integer array arr, find the contiguous subarray (containing at least one number) which has the largest sum and returns its sum and prints the subarray.

  Example 1:
  Input: arr = [-2,1,-3,4,-1,2,1,-5,4]
  Output: 6 
  Explanation: [4,-1,2,1] has the largest sum = 6. 

  Examples 2:
  Input: arr = [1] 
  Output: 1 
  Explanation: Array has only one element and which is giving positive sum of 1. 

*/

// Brute-force Solution
const maxSubarraySumSolution1 = (arr) => {
  // Initialize maximumSum with the first element of the array.
  // This is to handle cases where the array has only one element.
  let maximumSum = Number.MIN_SAFE_INTEGER;

  // Outer loop to set the starting point of the subarray.
  for (let i = 0; i < arr.length; i++) {
    // Initialize sum for the current subarray starting at index i.
    let sum = 0;

    // Inner loop to extend the subarray to the right.
    for (let j = i; j < arr.length; j++) {
      // Add the current element to the sum of the subarray.
      sum = sum + arr[j];

      // Update maximumSum if the current subarray sum is greater than the previous maximum.
      maximumSum = Math.max(maximumSum, sum);
    }
  }

  // Return the maximum sum found.
  return maximumSum;
};

// Optimal Solution
const maxSubarraySumSolution2 = (arr) => {
  // Kadane's Algorithm: This algorithm is used to find the maximum sum of a contiguous subarray in an array of integers.

  // Initialize maxSum with the first element of the array.
  // This is to handle cases where the array has only one element.
  let maxSum = Number.MIN_SAFE_INTEGER;

  // Initialize sum to 0. This will be used to store the sum of the current subarray.
  let sum = 0;

  // Iterate through each element in the array.
  for (let index = 0; index < arr.length; index++) {
    // Add the current element to the sum of the current subarray.
    sum = sum + arr[index];

    // Update maxSum if the current subarray sum is greater than the previous maximum sum.
    maxSum = Math.max(maxSum, sum);

    // If the sum of the current subarray becomes negative, reset it to 0.
    // This is because a negative sum would decrease the sum of any subsequent subarray.
    if (sum < 0) {
      sum = 0;
    }
  }

  // To consider the sum of the empty subarray
  // uncomment the following check:
  //if (maxSum < 0) maxSum = 0;

  // Return the maximum sum found.
  return maxSum;
};

// Example 1 Input
const arr1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// Example 2 Input
const arr2 = [1];

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The maximum subarray sum is: ", maxSubarraySumSolution1(arr1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The maximum subarray sum is: ", maxSubarraySumSolution1(arr2));

// Time Complexity: O(N^2), where N = size of the array.
// Reason: We are using two nested loops, each running approximately N times.

// Space Complexity: O(1) as we are not using any extra space.

console.log("\n\n ------------- Solution 2: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The maximum subarray sum is: ", maxSubarraySumSolution2(arr1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The maximum subarray sum is: ", maxSubarraySumSolution2(arr2));

// Time Complexity: O(N), where N = size of the array.
// Reason: We are using a single loop running N times.

// Space Complexity: O(1) as we are not using any extra space.
