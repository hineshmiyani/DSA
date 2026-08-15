/**
 * @article  : https://takeuforward.org/data-structure/count-the-number-of-subarrays-with-given-xor-k/
 * @question : https://www.interviewbit.com/problems/subarray-with-given-xor/
 */

/*
  ✅ Problem Statement: 

  Given an array of integers A and an integer K. Find the total number of subarrays having bitwise XOR of all elements equal to k.

  Example 1:
  Input Format: A = [4, 2, 2, 6, 4] , k = 6
  Result: 4
  Explanation: The subarrays having XOR of their elements as 6 are  [4, 2], [4, 2, 2, 6, 4], [2, 2, 6], [6]

  Example 2:
  Input Format: A = [5, 6, 7, 8, 9], k = 5
  Result: 2
  Explanation: The subarrays having XOR of their elements as 5 are [5] and [5, 6, 7, 8, 9]

*/

// Brute-force Solution
const subarraysWithXorKSolution1 = (arr, k) => {
  // Initialize the count of subarrays with XOR equal to k
  let subArraysCount = 0;

  // Iterate over each element in the array as the starting point of the subarray
  for (let i = 0; i < arr.length; i++) {
    // Initialize XOR for the current subarray starting at index i
    let XOR = 0;

    // Iterate over each element from the starting point to the end of the array
    for (let j = i; j < arr.length; j++) {
      // Calculate the XOR for the current subarray from index i to j
      XOR = XOR ^ arr[j];

      // If the XOR of the current subarray equals k, increment the count
      if (XOR === k) {
        subArraysCount = subArraysCount + 1;
      }
    }
  }

  // Return the total count of subarrays with XOR equal to k
  return subArraysCount;
};

// Optimal Solution
const subarraysWithXorKSolution2 = (arr, k) => {
  // Initialize the count of subarrays with XOR equal to k
  let subArraysCount = 0;

  // Create a map to store the prefix XOR values and their frequencies
  const preXORMap = new Map();
  // Initialize the map with the base case: XOR of 0 has occurred once
  preXORMap.set(0, 1);

  // Initialize the XOR accumulator
  let XOR = 0;

  // Iterate over each element in the array
  for (let index = 0; index < arr.length; index++) {
    // Update the XOR accumulator with the current element
    XOR = XOR ^ arr[index];

    // Calculate the required XOR value that would satisfy the condition
    // By formula: x = XOR ^ k, where x is the prefix XOR that we need to find in the map
    const x = XOR ^ k;

    // If the required XOR value exists in the map, it means there are subarrays
    // ending at the current index which have XOR equal to k
    if (preXORMap.has(x)) {
      // Increment the count of subarrays by the frequency of the required XOR value
      subArraysCount = subArraysCount + preXORMap.get(x);
    }

    // Update the map with the current XOR value
    // If the XOR value already exists in the map, increment its frequency by 1
    // Otherwise, set its frequency to 1
    preXORMap.set(XOR, (preXORMap.get(XOR) || 0) + 1);
  }

  // Return the total count of subarrays with XOR equal to k
  return subArraysCount;
};

// Example 1 Input
const arr1 = [4, 2, 2, 6, 4];
const k1 = 6;

// Example 2 Input
const arr2 = [5, 6, 7, 8, 9];
const k2 = 5;

console.log("\n ------------- Solution 1: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The number of subarrays with XOR k is: ",
  subarraysWithXorKSolution1(arr1, k1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The number of subarrays with XOR k is: ",
  subarraysWithXorKSolution1(arr2, k2)
);

// Time Complexity: O(N2), where N = size of the array.
// Reason: We are using two nested loops here. As each of them is running for N times, the time complexity will be approximately O(N2).

// Space Complexity: O(1) as we are not using any extra space.

console.log("\n ------------- Solution 2: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The number of subarrays with XOR k is: ",
  subarraysWithXorKSolution2(arr1, k1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The number of subarrays with XOR k is: ",
  subarraysWithXorKSolution2(arr2, k2)
);

// Time Complexity: O(N) or O(N*logN) depending on which map data structure we are using, where N = size of the array.
// Reason: For example, if we are using an unordered_map data structure in C++ the time complexity will be O(N) but if we are using a map data structure, the time complexity will be O(N*logN). The least complexity will be O(N) as we are using a loop to traverse the array. Point to remember for unordered_map in the worst case, the searching time increases to O(N), and hence the overall time complexity increases to O(N2).

// Space Complexity: O(N) as we are using a map data structure.
