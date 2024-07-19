/**
 * @article  : https://takeuforward.org/data-structure/binary-search-explained/
 * @question : https://leetcode.com/problems/binary-search/
 */

/*
  ✅ Problem Statement: 

  You are given a sorted array of integers and a target, your task is to search for the target in the given array. Assume the given array does not contain any duplicate numbers.

  Example 1:
  Input: Nums = [3, 4, 6, 7, 9, 12, 16, 17], target = 6
  Output: 2 (index of 6)

*/

// Iterative Solution
const binarySearchSolution1 = (arr, target) => {
  // Initialize the low and high pointers to the start and end of the array, respectively.
  let low = 0;
  let high = arr.length - 1;

  // Continue searching while the low pointer is less than or equal to the high pointer.
  while (low <= high) {
    // Calculate the middle index of the current search range.
    const mid = Math.floor((low + high) / 2);

    // Check if the target value is equal to the value at the middle index.
    if (target === arr[mid]) {
      // If the target is found, return the index.
      return mid;
    } else if (target < arr[mid]) {
      // If the target is less than the value at the middle index, adjust the high pointer to search the left half.
      high = mid - 1;
    } else if (target > arr[mid]) {
      // If the target is greater than the value at the middle index, adjust the low pointer to search the right half.
      low = mid + 1;
    }
  }

  // If the target value is not found, return -1.
  return -1;
};

// Recursive Solution
const binarySearchRecursive = (arr, target, low, high) => {
  // Base case: if the lower bound exceeds the upper bound, the target is not in the array
  if (low > high) {
    return -1;
  }

  // Calculate the middle index of the current search range
  const mid = Math.floor((low + high) / 2);

  // Check if the target value is at the middle index
  if (target === arr[mid]) {
    return mid; // Target found, return the index
  } else if (target < arr[mid]) {
    // If the target is less than the middle value, search in the left half
    return binarySearchRecursive(arr, target, low, mid - 1);
  } else if (target > arr[mid]) {
    // If the target is greater than the middle value, search in the right half
    return binarySearchRecursive(arr, target, mid + 1, high);
  }
};

const binarySearchSolution2 = (arr, target) => {
  // Start the recursive binary search with the full range of the array
  return binarySearchRecursive(arr, target, 0, arr.length - 1);
};

// Example 1 Input
const arr = [3, 4, 6, 7, 9, 12, 16, 17];
const target = 6;

console.log("\n ------------- Solution 1: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The target is at index: ", binarySearchSolution1(arr, target));

console.log("\n ------------- Solution 2: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The target is at index: ", binarySearchSolution2(arr, target));

// Time Complexity:
// In the algorithm, in every step, we are basically dividing the search space into 2 equal halves. This is actually equivalent to dividing the size of the array by 2, every time. After a certain number of divisions, the size will reduce to such an extent that we will not be able to divide that anymore and the process will stop. The number of total divisions will be equal to the time complexity.

// Let’s derive the number of divisions mathematically,

// If a number n can be divided by 2 for x times:
// 	2^x = n
// Therefore, x = log(n) (base is 2)
// So the overall time complexity is O(logN), where N = size of the given array.
