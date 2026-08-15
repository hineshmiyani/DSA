/**
 * @article  : https://takeuforward.org/arrays/implement-upper-bound/
 */

/*
  ✅ Problem Statement: 

  Given a sorted array of N integers and an integer x, write a program to find the upper bound of x.

  Example 1:
  Input Format: N = 4, arr[] = {1,2,2,3}, x = 2
  Result: 3
  Explanation: Index 3 is the smallest index such that arr[3] > x.

  Example 2:
  Input Format: N = 6, arr[] = {3,5,8,9,15,19}, x = 9
  Result: 4
  Explanation: Index 4 is the smallest index such that arr[4] > x.

*/

// Brute-force Solution
/**
 * Function to find the upper bound of a target value in a sorted array.
 * The upper bound is the first index at which the value is greater than the target.
 * If no such index exists, it returns the length of the array.
 *
 * @param {number[]} arr - The sorted array in which to find the upper bound.
 * @param {number} target - The target value to find the upper bound for.
 * @returns {number} - The index of the first element greater than the target, or the length of the array if no such element exists.
 */
const upperBoundSolution1 = (arr, target) => {
  // Iterate through each element in the array
  for (let index = 0; index < arr.length; index++) {
    // Check if the current element is greater than the target
    if (arr[index] > target) {
      // If so, return the current index as the upper bound
      return index;
    }
  }

  // If no element greater than the target is found, return the length of the array
  return arr.length;
};

// Optimal Solution
/**
 * Finds the upper bound index of the target element in a sorted array using binary search.
 *
 * @param {number[]} arr - The sorted array to search in.
 * @param {number} target - The target element to find the upper bound for.
 * @returns {number} The index of the first element greater than the target.
 */
const upperBoundSolution2 = (arr, target) => {
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

// Example 1 Input
const arr1 = [1, 2, 2, 3];
const target1 = 2;

// Example 2 Input
const arr2 = [3, 5, 8, 9, 15, 19];
const target2 = 9;

console.log("\n ------------- Solution 1: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The upper bound is the index: ",
  upperBoundSolution1(arr1, target1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The upper bound is the index: ",
  upperBoundSolution1(arr2, target2)
);

// Time Complexity: O(N), where N = size of the given array.
// Reason: In the worst case, we have to travel the whole array. This is basically the time complexity of the linear search algorithm.

// Space Complexity: O(1) as we are using no extra space.

console.log("\n ------------- Solution 2: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The upper bound is the index: ",
  upperBoundSolution2(arr1, target1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The upper bound is the index: ",
  upperBoundSolution2(arr2, target2)
);

// Time Complexity: O(logN), where N = size of the given array.
// Reason: We are basically using the Binary Search algorithm.

// Space Complexity: O(1) as we are using no extra space.
