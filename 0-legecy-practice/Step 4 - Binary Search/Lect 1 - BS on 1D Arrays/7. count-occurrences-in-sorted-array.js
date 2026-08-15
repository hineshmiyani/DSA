/**
 * @article  : https://takeuforward.org/data-structure/count-occurrences-in-sorted-array/
 * @question : https://www.geeksforgeeks.org/problems/number-of-occurrence2259/1
 */

/*
  ✅ Problem Statement: 

  You are given a sorted array containing N integers and a number X, you have to find the occurrences of X in the given array.

  Example 1:
  Input: N = 7,  X = 3 , array[] = {2, 2 , 3 , 3 , 3 , 3 , 4}
  Output: 4
  Explanation: 3 is occurring 4 times in the given array so it is our answer.

  Example 2:
  Input: N = 8,  X = 2 , array[] = {1, 1, 2, 2, 2, 2, 2, 3}
  Output: 5
  Explanation: 2 is occurring 5 times in the given array so it is our answer 

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

// Function to count occurrences of a target value in a sorted array.
const countOccurrencesSolution1 = (arr, target) => {
  // Call the getLowerBound function to find the first occurrence of the target.
  // This function returns the index of the first element that is greater than or equal to the target.
  const lowerBound = getLowerBound(arr, target);

  // If the lower bound index is equal to the length of the array or the element at the lower bound index is not equal to the target,
  // it means the target is not present in the array. Return 0 in this case.
  if (lowerBound === arr.length || arr[lowerBound] !== target) {
    return 0;
  }

  // Call the getUpperBound function to find the index of the first element greater than the target.
  // This function returns the index of the first element that is strictly greater than the target.
  const upperBound = getUpperBound(arr, target);

  // Calculate the number of occurrences of the target in the array.
  // The number of occurrences is given by the difference between the upper bound and the lower bound.
  // Since the upper bound is the index of the first element greater than the target, we subtract 1 from it.
  // Adding 1 to the result to include the lower bound element itself.
  return upperBound - 1 - lowerBound + 1;
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

// Function to count occurrences of a target value in a sorted array.
const countOccurrencesSolution2 = (arr, target) => {
  // Find the first occurrence of the target value using binary search
  const firstOccurrence = getFirstOccurrence(arr, target);

  // If the target value is not found in the array, return 0
  if (firstOccurrence === -1) {
    return 0;
  }

  // Find the last occurrence of the target value using binary search
  const lastOccurrence = getLastOccurrence(arr, target);

  // Calculate the number of occurrences by subtracting the indices of the first and last occurrences
  // and adding 1 (since both indices are inclusive)
  return lastOccurrence - firstOccurrence + 1;
};

// Example 1 Input
const arr1 = [2, 2, 3, 3, 3, 3, 4];
const target1 = 3;

// Example 2 Input
const arr2 = [1, 1, 2, 2, 2, 2, 2, 3];
const target2 = 2;

console.log("\n ------------- Solution 1: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The number of occurrences is: ",
  countOccurrencesSolution1(arr1, target1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The number of occurrences is: ",
  countOccurrencesSolution1(arr2, target2)
);

// Time Complexity: O(2 * log n)
// Space Complexity: O(1)

console.log("\n ------------- Solution 2: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The number of occurrences is: ",
  countOccurrencesSolution2(arr1, target1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The number of occurrences is: ",
  countOccurrencesSolution2(arr2, target2)
);

// Time Complexity: O(2*logN), where N = size of the given array.
// Reason: We are basically using the binary search algorithm twice.

// Space Complexity: O(1) as we are using no extra space.
