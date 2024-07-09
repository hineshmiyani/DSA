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
  // Initialize maximumSum with the smallest possible integer value.
  // This ensures that any subarray sum will be larger than this initial value.
  let maximumSum = Number.MIN_SAFE_INTEGER;

  // Variables to store the start and end indices of the subarray with the maximum sum.
  let subArrStartIndex = -1;
  let subArrEndIndex = -1;

  // Outer loop to set the starting point of the subarray.
  // This loop iterates over each element in the array.
  for (let i = 0; i < arr.length; i++) {
    // Initialize sum for the current subarray starting at index i.
    let sum = 0;

    // Inner loop to extend the subarray to the right.
    // This loop iterates from the current starting point (i) to the end of the array.
    for (let j = i; j < arr.length; j++) {
      // Add the current element (arr[j]) to the sum of the subarray.
      sum = sum + arr[j];

      // Check if the current subarray sum is greater than the previously recorded maximum sum.
      // If it is, update the maximumSum and the start and end indices of the subarray.
      if (sum >= maximumSum) {
        maximumSum = sum;
        subArrStartIndex = i;
        subArrEndIndex = j;
      }
    }
  }

  // Return the subarray with the maximum sum.
  // The slice method is used to extract the subarray from the original array.
  return arr.slice(subArrStartIndex, subArrEndIndex + 1);
};

// Optimal Solution using Kadane's Algorithm
const maxSubarraySumSolution2 = (arr) => {
  // Kadane's Algorithm: This algorithm is used to find the maximum sum of a contiguous subarray in an array of integers.

  // Initialize maxSum with the smallest possible integer value.
  // This ensures that any subarray sum will be larger than this initial value.
  let maxSum = Number.MIN_SAFE_INTEGER;

  // Initialize sum to 0. This will be used to store the sum of the current subarray.
  let sum = 0;

  // Variables to store the start and end indices of the subarray with the maximum sum.
  let subArrStartIndex = -1;
  let subArrEndIndex = -1;

  // Iterate through each element in the array.
  for (let index = 0; index < arr.length; index++) {
    // If the current sum is 0, set the start index of the subarray to the current index.
    // This is to handle cases where the subarray starts at the current index.
    if (sum === 0) {
      subArrStartIndex = index;
    }

    // Add the current element to the sum of the current subarray.
    sum = sum + arr[index];

    // Update maxSum if the current subarray sum is greater than the previous maximum sum.
    // Also update the end index of the subarray to the current index.
    if (sum >= maxSum) {
      subArrEndIndex = index;
      maxSum = sum;
    }

    // If the sum of the current subarray becomes negative, reset it to 0.
    // This is because a negative sum would decrease the sum of any subsequent subarray.
    if (sum < 0) {
      sum = 0;
    }
  }

  // Return the subarray with the maximum sum.
  // The slice method is used to extract the subarray from the original array.
  return arr.slice(subArrStartIndex, subArrEndIndex + 1);
};

// Example 1 Input
const arr1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// Example 2 Input
const arr2 = [1];

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The subarray is: ", maxSubarraySumSolution1(arr1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The subarray is: ", maxSubarraySumSolution1(arr2));

// Time Complexity: O(N^2), where N = size of the array.
// Reason: We are using two nested loops, each running approximately N times.

// Space Complexity: O(1) as we are not using any extra space.

console.log("\n\n ------------- Solution 2: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The subarray is: ", maxSubarraySumSolution2(arr1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The subarray is: ", maxSubarraySumSolution2(arr2));

// Time Complexity: O(N), where N = size of the array.
// Reason: We are using a single loop running N times.

// Space Complexity: O(1) as we are not using any extra space.
