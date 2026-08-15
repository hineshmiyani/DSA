/**
 * @article  : https://takeuforward.org/data-structure/longest-subarray-with-given-sum-k/
 * @question : https://www.geeksforgeeks.org/problems/longest-sub-array-with-sum-k0809/1
 */

/*
  ✅ Problem Statement: 

  Given an array and a sum k, we need to print the length of the longest subarray that sums to k.
  (Longest Subarray with given Sum K(Positives))

  Example 1:
  Input Format: N = 3, k = 5, array[] = {2,3,5}
  Result: 2
  Explanation: The longest subarray with sum 5 is {2, 3}. And its length is 2.

  Example 2:
  Input Format: N = 5, k = 10, array[] = {2,3,5,1,9}
  Result: 3
  Explanation: The longest subarray with sum 10 is {2, 3, 5}. And its length is 3.

*/

// Brute-force Solution
const findLongestSubArrayLengthSolution1 = (arr, k) => {
  // Initialize the variable to store the maximum length of subarray found
  let maxLength = 0;

  // Outer loop to set the starting point of the subarray
  for (let i = 0; i < arr.length; i++) {
    // Initialize the sum of the current subarray starting at index i
    let sum = 0;

    // Inner loop to set the ending point of the subarray
    for (let j = i; j < arr.length; j++) {
      // Add the current element to the sum of the subarray
      sum = sum + arr[j];

      // Check if the current subarray sum equals the target sum k
      if (sum === k) {
        // Update maxLength if the current subarray is longer than the previous longest
        maxLength = Math.max(maxLength, j - i + 1);
      }
    }
  }

  // Return the length of the longest subarray with sum equal to k
  return maxLength;
};

// Better Solution
const findLongestSubArrayLengthSolution2 = (arr, k) => {
  // Create a map to store the prefix sums and their corresponding indices
  const preSumMap = new Map();

  // Initialize the sum of elements and the maximum length of subarray found
  let sum = 0;
  let maxLength = 0;

  // Iterate through the array
  for (let index = 0; index < arr.length; index++) {
    // Add the current element to the sum
    sum = sum + arr[index];

    // If the sum equals the target sum k, update maxLength to the current index + 1
    if (sum === k) {
      maxLength = Math.max(maxLength, index + 1);
    }

    // Calculate the difference between the current sum and the target sum k
    const difference = sum - k;

    // If the difference is found in the map, it means there is a subarray that sums to k
    if (preSumMap.has(difference)) {
      // Calculate the length of the subarray
      const length = index - preSumMap.get(difference);
      // Update maxLength if the current subarray is longer than the previous longest
      maxLength = Math.max(maxLength, length);
    }

    // If the current sum is not already in the map, add it with the current index
    if (!preSumMap.has(sum)) {
      preSumMap.set(sum, index);
    }
  }

  // Return the length of the longest subarray with sum equal to k
  return maxLength;
};

// Optimal Solution
const findLongestSubArrayLengthSolution3 = (arr, k) => {
  // Initialize the variable to store the maximum length of subarray found
  let maxLength = 0;

  // Initialize the sum of the current subarray starting with the first element
  let sum = arr[0];

  // Initialize two pointers for the sliding window technique
  let left = 0;
  let right = 0;

  // Get the length of the array
  const n = arr.length;

  // Iterate through the array using the right pointer
  while (right < n) {
    // If the current sum exceeds the target sum k, move the left pointer to the right
    // and subtract the element at the left pointer from the sum
    while (left <= right && sum > k) {
      sum = sum - arr[left];
      left = left + 1;
    }

    // If the current sum equals the target sum k, update maxLength
    if (sum === k) {
      maxLength = Math.max(maxLength, right - left + 1);
    }

    // Move the right pointer to the right
    right = right + 1;

    // If the right pointer is still within the array bounds, add the element at the right pointer to the sum
    if (right < n) {
      sum = sum + arr[right];
    }
  }

  // Return the length of the longest subarray with sum equal to k
  return maxLength;
};

// Example 1 Input
const arr1 = [2, 3, 5];
const k1 = 5;

// Example 2 Input
const arr2 = [2, 3, 5, 1, 9];
const k2 = 10;

console.log("\n ------------- Solution 1: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The length of the longest subarray is : ",
  findLongestSubArrayLengthSolution1(arr1, k1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The length of the longest subarray is : ",
  findLongestSubArrayLengthSolution1(arr2, k2)
);

// Time Complexity: O(N2) approx., where N = size of the array.
// Reason: We are using two nested loops, each running approximately N times.

// Space Complexity: O(1) as we are not using any extra space.

console.log("\n ------------- Solution 2: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The length of the longest subarray is : ",
  findLongestSubArrayLengthSolution2(arr1, k1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The length of the longest subarray is : ",
  findLongestSubArrayLengthSolution2(arr2, k2)
);

// Time Complexity: O(N)
// The time complexity of the `findLongestSubArrayLengthSolution2` function is O(N), where N is the length of the input array. This is because we iterate through the array once, performing constant-time operations (like map lookups and updates) for each element.

// Space Complexity: O(N)
// The space complexity of the function is O(N) as well. This is due to the `preSumMap` which, in the worst case, could store a prefix sum for each element in the array.

console.log("\n ------------- Solution 3: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The length of the longest subarray is : ",
  findLongestSubArrayLengthSolution3(arr1, k1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The length of the longest subarray is : ",
  findLongestSubArrayLengthSolution3(arr2, k2)
);

// Time Complexity: O(2*N), where N = size of the given array.
// Reason: The outer while loop i.e. the right pointer can move up to index n-1(the last index). Now, the inner while loop i.e. the left pointer can move up to the right pointer at most. So, every time the inner loop does not run for n times rather it can run for n times in total. So, the time complexity will be O(2*N) instead of O(N2).

// Space Complexity: O(1) as we are not using any extra space.
