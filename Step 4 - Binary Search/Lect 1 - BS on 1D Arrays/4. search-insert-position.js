/**
 * @article  : https://takeuforward.org/arrays/search-insert-position/
 * @question : https://leetcode.com/problems/search-insert-position/description/
 */

/*
  ✅ Problem Statement: 

  You are given a sorted array arr of distinct values and a target value x. You need to search for the index of the target value in the array.
  If the value is present in the array, then return its index. Otherwise, determine the index where it would be inserted in the array while maintaining the sorted order.

  Example 1:
  Input Format: arr[] = {1,2,4,7}, x = 6
  Result: 3
  Explanation: 6 is not present in the array. So, if we will insert 6 in the 3rd index(0-based indexing), the array will still be sorted. {1,2,4,6,7}.

  Example 2:
  Input Format: arr[] = {1,2,4,7}, x = 2
  Result: 1
  Explanation: 2 is present in the array and so we will return its index i.e. 1.

*/

// Optimal Solution
/**
 * Function to find the index at which a target value should be inserted into a sorted array.
 * If the target value is found in the array, it returns the index of the target.
 * If the target value is not found, it returns the index where the target should be inserted to maintain sorted order.
 *
 * @param {number[]} arr - The sorted array of numbers.
 * @param {number} target - The target value to search for.
 * @returns {number} - The index at which the target should be inserted.
 */
const searchInsertSolution1 = (arr, target) => {
  // Initialize the index to the length of the array, assuming the target is greater than all elements.
  let index = arr.length;

  // Initialize the low and high pointers for binary search.
  let low = 0;
  let high = arr.length - 1;

  // Perform binary search.
  while (low <= high) {
    // Calculate the middle index.
    const mid = Math.floor((low + high) / 2);

    // If the middle element is greater than or equal to the target,
    // update the index to mid and move the high pointer to mid - 1.
    if (arr[mid] >= target) {
      index = mid;
      high = mid - 1;
    } else {
      // If the middle element is less than the target,
      // move the low pointer to mid + 1.
      low = mid + 1;
    }
  }

  // Return the index where the target should be inserted.
  return index;
};

// Example 1 Input
const arr1 = [1, 2, 4, 7];
const target1 = 6;

// Example 2 Input
const arr2 = [1, 2, 4, 7];
const target2 = 2;

console.log("\n ------------- Solution 1: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The index is: ", searchInsertSolution1(arr1, target1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The index is: ", searchInsertSolution1(arr2, target2));

// Time Complexity: O(logN), where N = size of the given array.
// Reason: We are basically using the Binary Search algorithm.

// Space Complexity: O(1) as we are using no extra space.
