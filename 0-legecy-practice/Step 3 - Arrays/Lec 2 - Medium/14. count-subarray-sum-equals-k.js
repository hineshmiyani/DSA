/**
 * @article  : https://takeuforward.org/arrays/count-subarray-sum-equals-k/
 * @question : https://leetcode.com/problems/subarray-sum-equals-k/
 */

/*
  ✅ Problem Statement: 

  Given an array of integers and an integer k, return the total number of subarrays whose sum equals k.
  A subarray is a contiguous non-empty sequence of elements within an array.

  Example 1:
  Input Format: N = 4, array[] = {3, 1, 2, 4}, k = 6
  Result: 2
  Explanation: The subarrays that sum up to 6 are [3, 1, 2] and [2, 4].

  Example 2: Input Format:
  N = 3, array[] = {1,2,3}, k = 3
  Result: 2
  Explanation: The subarrays that sum up to 3 are [1, 2], and [3].

*/

// Brute-force Solution
const totalSubarraysCountSolution1 = (arr, k) => {
  let count = 0; // Initialize the count of subarrays to 0

  // Iterate over each element in the array as the starting point of the subarray
  for (let i = 0; i < arr.length; i++) {
    let sum = 0; // Initialize the sum of the current subarray to 0

    // Iterate over the elements starting from the current starting point
    for (let j = i; j < arr.length; j++) {
      sum = sum + arr[j]; // Add the current element to the sum

      // Check if the current sum equals the target sum k
      if (sum === k) {
        count = count + 1; // Increment the count if the sum matches k
      }
    }
  }

  return count; // Return the total count of subarrays whose sum equals k
};

// Optimal Solution
const totalSubarraysCountSolution2 = (arr, k) => {
  let currentSum = 0; // Initialize the current sum of elements
  let subarrayCount = 0; // Initialize the count of subarrays whose sum equals k

  // Create a map to store the frequency of prefix sums
  const prefixSumMap = new Map();
  prefixSumMap.set(0, 1); // Initialize with prefix sum 0 having one occurrence

  // Iterate over each element in the array
  for (const num of arr) {
    currentSum = currentSum + num; // Update the current sum by adding the current element

    // Calculate the required sum that would make the current subarray sum equal to k
    const requiredSum = currentSum - k;

    // Check if the required sum exists in the prefix sum map
    if (prefixSumMap.has(requiredSum)) {
      // If it exists, it means there are subarrays ending at the current index which sum up to k
      subarrayCount = subarrayCount + prefixSumMap.get(requiredSum);
    }

    // Update the prefix sum map with the current sum
    // If the current sum already exists in the map, increment its count by 1
    // Otherwise, add the current sum to the map with a count of 1
    prefixSumMap.set(currentSum, (prefixSumMap.get(currentSum) || 0) + 1);
  }

  return subarrayCount; // Return the total count of subarrays whose sum equals k
};

// Example 1 Input
const arr1 = [3, 1, 2, 4];
const k1 = 6;

// Example 2 Input
const arr2 = [1, 2, 3];
const k2 = 3;

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The number of subarrays is: ",
  totalSubarraysCountSolution1(arr1, k1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The number of subarrays is: ",
  totalSubarraysCountSolution1(arr2, k2)
);

// Time Complexity: O(N2), where N = size of the array.
// Reason: We are using two nested loops here. As each of them is running for exactly N times, the time complexity will be approximately O(N2).

// Space Complexity: O(1) as we are not using any extra space.

console.log("\n\n ------------- Solution 2: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The number of subarrays is: ",
  totalSubarraysCountSolution2(arr1, k1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The number of subarrays is: ",
  totalSubarraysCountSolution2(arr2, k2)
);

// Time Complexity: O(n)
// The function iterates over each element in the array exactly once using a for loop.
// Each operation inside the loop (such as updating the current sum, checking the map, and updating the map) takes constant time, O(1).
// Therefore, the overall time complexity is O(n), where n is the number of elements in the array arr.

// Space Complexity: O(n)
// The function uses a Map (prefixSumMap) to store the frequency of prefix sums.
// In the worst case, the map could store a unique prefix sum for each element in the array, leading to n entries in the map.
// Therefore, the space complexity is O(n), where n is the number of elements in the array arr.
