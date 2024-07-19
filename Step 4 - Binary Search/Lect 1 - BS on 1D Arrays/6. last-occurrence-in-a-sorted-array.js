/**
 * @article  : https://takeuforward.org/arrays/first-and-last occurrence-in-sorted-array/
 * @question : https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 */

/*
  ✅ Problem Statement: 

  Given a sorted array of N integers, write a program to find the index of the first and last occurrence of the target key. If the target is not found  then return [-1, -1].

  Note: Consider 0 based indexing

  Example 1:
  Input: N = 7, target=13, array[] = {3,4,13,13,13,20,40}
  Output: [2, 4]
  Explanation: As the target value is 13 , it appears for the first time at index number 2.

  Example 2:
  Input: N = 7, target=60, array[] = {3,4,13,13,13,20,40}
  Output: [-1, -1]
  Explanation: Target value 60 is not present in the array 

*/

// Optimal Solution - 1
/**
 * This function finds the lower bound index of a target value in a sorted array.
 * The lower bound is the index of the first element in the array that is not less than the target.
 * If all elements in the array are less than the target, it returns the length of the array.
 *
 * @param {number[]} arr - The sorted array in which to find the lower bound.
 * @param {number} target - The target value for which to find the lower bound.
 * @returns {number} - The index of the lower bound of the target value in the array.
 */
const getLowerBound = (arr, target) => {
  // Initialize the lower bound index to the length of the array.
  // This will be the return value if no element in the array is greater than or equal to the target.
  let lowerBoundIndex = arr.length;

  // Initialize the low and high pointers for binary search.
  let low = 0;
  let high = arr.length - 1;

  // Perform binary search to find the lower bound.
  while (low <= high) {
    // Calculate the middle index.
    const mid = Math.floor((low + high) / 2);

    // If the middle element is greater than or equal to the target,
    // update the lower bound index and move the high pointer to mid - 1.
    if (arr[mid] >= target) {
      lowerBoundIndex = mid;
      high = mid - 1;
    } else {
      // If the middle element is less than the target,
      // move the low pointer to mid + 1.
      low = mid + 1;
    }
  }

  // Return the lower bound index.
  return lowerBoundIndex;
};

/**
 * Finds the upper bound index of the target element in a sorted array using binary search.
 *
 * @param {number[]} arr - The sorted array to search in.
 * @param {number} target - The target element to find the upper bound for.
 * @returns {number} The index of the first element greater than the target.
 */
const getUpperBound = (arr, target) => {
  // Initialize the upper bound index to the length of the array.
  // This will be the default value if no element greater than the target is found.
  let upperBoundIndex = arr.length;

  // Initialize the low and high pointers for binary search.
  let low = 0;
  let high = arr.length - 1;

  // Perform binary search to find the upper bound.
  while (low <= high) {
    // Calculate the middle index.
    const mid = Math.floor((low + high) / 2);

    // If the middle element is greater than the target,
    // update the upper bound index and move the high pointer to the left.
    if (arr[mid] > target) {
      upperBoundIndex = mid;
      high = mid - 1;
    } else {
      // If the middle element is less than or equal to the target,
      // move the low pointer to the right.
      low = mid + 1;
    }
  }

  // Return the index of the first element greater than the target.
  return upperBoundIndex;
};

// Function to find the first and last occurrence of a target value in a sorted array.
const getFirstAndLastOccurrenceSolution1 = (arr, target) => {
  // Call the getLowerBound function to find the first occurrence of the target.
  const lowerBound = getLowerBound(arr, target);

  // If the lower bound index is equal to the length of the array or the element at the lower bound index is not equal to the target,
  // it means the target is not present in the array. Return -1 for both first and last occurrences.
  if (lowerBound === arr.length || arr[lowerBound] !== target) {
    return { first: -1, last: -1 };
  }

  // Call the getUpperBound function to find the index of the first element greater than the target.
  const upperBound = getUpperBound(arr, target);

  // Return an object containing the first and last occurrence of the target.
  // The first occurrence is the lower bound index.
  // The last occurrence is the upper bound index minus one.
  return {
    first: lowerBound,
    last: upperBound - 1,
  };
};

// Optimal Solution - 2
// Function to find the first occurrence of a target value in a sorted array
const getFirstOccurrence = (arr, target) => {
  // Initialize the variable to store the index of the first occurrence
  let firstOccurrence = -1;

  // Define the initial boundaries of the search space
  let low = 0;
  let high = arr.length - 1;

  // Perform binary search within the defined boundaries
  while (low <= high) {
    // Calculate the middle index of the current search space
    const mid = Math.floor((low + high) / 2);

    // Check if the middle element is equal to the target
    if (arr[mid] === target) {
      // Update the first occurrence index
      firstOccurrence = mid;
      // Narrow the search space to the left half to find the first occurrence
      high = mid - 1;
    } else if (arr[mid] < target) {
      // If the middle element is less than the target, search in the right half
      low = mid + 1;
    } else {
      // If the middle element is greater than the target, search in the left half
      high = mid - 1;
    }
  }

  // Return the index of the first occurrence, or -1 if not found
  return firstOccurrence;
};

// Function to find the last occurrence of a target value in a sorted array
const getLastOccurrence = (arr, target) => {
  // Initialize the variable to store the index of the last occurrence
  let lastOccurrence = -1;

  // Define the initial boundaries of the search space
  let low = 0;
  let high = arr.length - 1;

  // Perform binary search within the defined boundaries
  while (low <= high) {
    // Calculate the middle index of the current search space
    const mid = Math.floor((low + high) / 2);

    // Check if the middle element is equal to the target
    if (arr[mid] === target) {
      // Update the last occurrence index
      lastOccurrence = mid;
      // Narrow the search space to the right half to find the last occurrence
      low = mid + 1;
    } else if (arr[mid] < target) {
      // If the middle element is less than the target, search in the right half
      low = mid + 1;
    } else {
      // If the middle element is greater than the target, search in the left half
      high = mid - 1;
    }
  }

  // Return the index of the last occurrence, or -1 if not found
  return lastOccurrence;
};

// Function to find both the first and last occurrences of a target value in a sorted array
const getFirstAndLastOccurrenceSolution2 = (arr, target) => {
  // Find the first occurrence of the target value
  const firstOccurrence = getFirstOccurrence(arr, target);

  // If the target value is not found, return -1 for both first and last occurrences
  if (firstOccurrence === -1) {
    return {
      first: -1,
      last: -1,
    };
  }

  // Find the last occurrence of the target value
  const lastOccurrence = getLastOccurrence(arr, target);

  // Return an object containing both the first and last occurrences
  return {
    first: firstOccurrence,
    last: lastOccurrence,
  };
};

// Example 1 Input
const arr1 = [3, 4, 13, 13, 13, 20, 40];
const target1 = 13;

// Example 2 Input
const arr2 = [3, 4, 13, 13, 13, 20, 40];
const target2 = 60;

console.log("\n ------------- Solution 1: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The first and last occurrence are: ",
  getFirstAndLastOccurrenceSolution1(arr1, target1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The first and last occurrence are: ",
  getFirstAndLastOccurrenceSolution1(arr2, target2)
);

// Time Complexity: O(2 * log n)
// Space Complexity: O(1)

console.log("\n ------------- Solution 2: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The first and last occurrence are: ",
  getFirstAndLastOccurrenceSolution2(arr1, target1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The first and last occurrence are: ",
  getFirstAndLastOccurrenceSolution2(arr2, target2)
);

// Time Complexity: O(2 * log n)
// Space Complexity: O(1)
