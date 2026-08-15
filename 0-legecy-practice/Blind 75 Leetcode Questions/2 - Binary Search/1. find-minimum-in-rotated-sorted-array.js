/**
 * @article  : https://takeuforward.org/data-structure/minimum-in-rotated-sorted-array/
 * @question : https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 */

/*
  ✅ Problem Statement: 

  Given an integer array arr of size N, sorted in ascending order (with distinct values). Now the array is rotated between 1 to N times which is unknown. Find the minimum element in the array. 

  Example 1:
  Input Format: arr = [4,5,6,7,0,1,2,3]
  Result: 0
  Explanation: Here, the element 0 is the minimum element in the array.

  Example 2:
  Input Format: arr = [3,4,5,1,2]
  Result: 1
  Explanation: Here, the element 1 is the minimum element in the array.

*/

// Brute-force Solution
/**
 * Function to find the minimum number in a rotated sorted array.
 * This implementation uses a linear search to find the minimum element.
 */
const findMinimumSolution1 = (arr) => {
  // Initialize the minimum number with the first element of the array
  let minimumNumber = arr[0];

  // Iterate through the array starting from the second element
  for (let index = 1; index < arr.length; index++) {
    // Update the minimum number if the current element is smaller
    minimumNumber = Math.min(minimumNumber, arr[index]);
  }

  // Return the minimum number found in the array
  return minimumNumber;
};

// Optimal Solution
/**
 * Finds the minimum element in a rotated sorted array.
 * This function assumes that the array does not contain duplicates.
 */
const findMinimumSolution2 = (arr) => {
  // Initialize the minimum number with the first element of the array
  let minimumNumber = arr[0];

  // Initialize the low and high pointers
  let low = 0;
  let high = arr.length - 1;

  // Binary search loop to find the minimum element
  while (low <= high) {
    // If the subarray is already sorted, the minimum is the first element
    if (arr[low] <= arr[high]) {
      minimumNumber = Math.min(minimumNumber, arr[low]);
      break;
    }

    // Calculate the middle index
    const mid = Math.floor((low + high) / 2);

    // If the left part is sorted, update minimumNumber and eliminate the left part
    if (arr[low] <= arr[mid]) {
      minimumNumber = Math.min(minimumNumber, arr[low]);
      low = mid + 1; // Move the low pointer to the right of mid
    } else {
      // If the right part is sorted, update minimumNumber and eliminate the right part
      minimumNumber = Math.min(minimumNumber, arr[mid]);
      high = mid - 1; // Move the high pointer to the left of mid
    }
  }

  // Return the found minimum number
  return minimumNumber;
};

// Example 1 Input
const arr1 = [4, 5, 6, 7, 0, 1, 2, 3];

// Example 2 Input
const arr2 = [3, 4, 5, 1, 2];

console.log("\n ------------- Solution 1: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The minimum element is: ", findMinimumSolution1(arr1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The minimum element is: ", findMinimumSolution1(arr2));

// Time Complexity: O(N), N = size of the given array.
// Reason: We have to iterate through the entire array to check if the target is present in the array.

// Space Complexity: O(1)
// Reason: We have not used any extra data structures, this makes space complexity, even in the worst case as O(1).

console.log("\n ------------- Solution 2: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The minimum element is: ", findMinimumSolution2(arr1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The minimum element is: ", findMinimumSolution2(arr2));

// Time Complexity: O(logN), N = size of the given array.
// Reason: We are basically using binary search to find the minimum.

// Space Complexity: O(1)
// Reason: We have not used any extra data structures, this makes space complexity, even in the worst case as O(1).
