/**
 * @article  : https://takeuforward.org/data-structure/search-element-in-a-rotated-sorted-array/
 * @question : https://leetcode.com/problems/search-in-rotated-sorted-array/
 */

/*
  ✅ Problem Statement: 

  Given an integer array arr of size N, sorted in ascending order (with distinct values) and a target value k. Now the array is rotated at some pivot point unknown to you. Find the index at which k is present and if k is not present return -1.

  Example 1:
  Input Format: arr = [4,5,6,7,0,1,2,3], k = 0
  Result: 4
  Explanation: Here, the target is 0. We can see that 0 is present in the given rotated sorted array, nums. Thus, we get output as 4, which is the index at which 0 is present in the array.

  Example 2:
  Input Format: arr = [4,5,6,7,0,1,2], k = 3
  Result: -1
  Explanation: Here, the target is 3. Since 3 is not present in the given rotated sorted array. Thus, we get the output as -1.

*/

// Brute-force Solution
/**
 * Function to find the index of a target number in an array.
 * This implementation uses a linear search algorithm.
 */
const findIndexOfNumberSolution1 = (arr, target) => {
  // Iterate through each element in the array
  for (let index = 0; index < arr.length; index++) {
    // Check if the current element matches the target number
    if (arr[index] === target) {
      // Return the index if the target number is found
      return index;
    }
  }

  // Return -1 if the target number is not found in the array
  return -1;
};

// Optimal Solution
/**
 * Function to find the index of a target number in a rotated sorted array.
 * This function uses a modified binary search algorithm to handle the rotation.
 */
const findIndexOfNumberSolution2 = (arr, target) => {
  // Initialize the low and high pointers for the binary search
  let low = 0;
  let high = arr.length - 1;

  // Continue the search while the low pointer is less than or equal to the high pointer
  while (low <= high) {
    // Calculate the mid index
    const mid = Math.floor((low + high) / 2);

    // If the target is found at the mid index, return the mid index
    if (arr[mid] === target) {
      return mid;
    }

    // Check if the left part of the array is sorted
    if (arr[low] <= arr[mid]) {
      // If the target is within the range of the sorted left part
      if (arr[low] <= target && target <= arr[mid]) {
        // Eliminate the right half by moving the high pointer to mid - 1
        high = mid - 1;
      } else {
        // Otherwise, eliminate the left half by moving the low pointer to mid + 1
        low = mid + 1;
      }
    } else {
      // If the right part of the array is sorted
      if (arr[mid] <= target && target <= arr[high]) {
        // If the target is within the range of the sorted right part
        // Eliminate the left half by moving the low pointer to mid + 1
        low = mid + 1;
      } else {
        // Otherwise, eliminate the right half by moving the high pointer to mid - 1
        high = mid - 1;
      }
    }
  }

  // If the target is not found, return -1
  return -1;
};

// Example 1 Input
const arr1 = [4, 5, 6, 7, 0, 1, 2, 3];
const target1 = 0;

// Example 2 Input
const arr2 = [4, 5, 6, 7, 0, 1, 2];
const target2 = 3;

console.log("\n ------------- Solution 1: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The index is: ", findIndexOfNumberSolution1(arr1, target1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The index is: ", findIndexOfNumberSolution1(arr2, target2));

// Time Complexity: O(N), N = size of the given array.
// Reason: We have to iterate through the entire array to check if the target is present in the array.

// Space Complexity: O(1)
// Reason: We have not used any extra data structures, this makes space complexity, even in the worst case as O(1).

console.log("\n ------------- Solution 2: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The index is: ", findIndexOfNumberSolution2(arr1, target1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The index is: ", findIndexOfNumberSolution2(arr2, target2));

// Time Complexity: O(logN), N = size of the given array.
// Reason: We are using binary search to search the target.

// Space Complexity: O(1)
// Reason: We have not used any extra data structures, this makes space complexity, even in the worst case as O(1).
