/**
 * @article  : https://takeuforward.org/arrays/implement-lower-bound-bs-2/
 */

/*
  ✅ Problem Statement: 

  Given a sorted array of N integers and an integer x, write a program to find the lower bound of x.

  Example 1:
  Input Format: N = 4, arr[] = {1,2,2,3}, x = 2
  Result: 1
  Explanation: Index 1 is the smallest index such that arr[1] >= x.

  Example 2:
  Input Format: N = 5, arr[] = {3,5,8,15,19}, x = 9
  Result: 3
  Explanation: Index 3 is the smallest index such that arr[3] >= x.

*/

// Brute-force Solution
/**
 * This function finds the lower bound of a target value in a sorted array.
 * The lower bound is the index of the first element in the array that is not less than the target.
 * If all elements in the array are less than the target, it returns the length of the array.
 *
 * @param {number[]} arr - The sorted array in which to find the lower bound.
 * @param {number} target - The target value for which to find the lower bound.
 * @returns {number} - The index of the first element that is not less than the target, or the length of the array if no such element exists.
 */
const lowerBoundSolution1 = (arr, target) => {
  // Iterate through each element in the array
  for (let index = 0; index < arr.length; index++) {
    // Check if the current element is greater than or equal to the target
    if (arr[index] >= target) {
      // If so, return the current index as the lower bound
      return index;
    }
  }

  // If no element is found that is greater than or equal to the target,
  // return the length of the array, indicating that all elements are less than the target
  return arr.length;
};

// Optimal Solution
/**
 * This function finds the lower bound index of a target value in a sorted array.
 * The lower bound is the index of the first element in the array that is not less than the target.
 * If all elements in the array are less than the target, it returns the length of the array.
 *
 * @param {number[]} arr - The sorted array in which to find the lower bound.
 * @param {number} target - The target value for which to find the lower bound.
 * @returns {number} - The index of the lower bound of the target value in the array.
 */
const lowerBoundSolution2 = (arr, target) => {
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

// Example 1 Input
const arr1 = [1, 2, 2, 3];
const target1 = 2;

// Example 2 Input
const arr2 = [3, 5, 8, 15, 19];
const target2 = 9;

console.log("\n ------------- Solution 1: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The lower bound is the index: ",
  lowerBoundSolution1(arr1, target1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The lower bound is the index: ",
  lowerBoundSolution1(arr2, target2)
);

// Time Complexity: O(N), where N = size of the given array.
// Reason: In the worst case, we have to travel the whole array. This is basically the time complexity of the linear search algorithm.

// Space Complexity: O(1) as we are using no extra space.

console.log("\n ------------- Solution 2: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The lower bound is the index: ",
  lowerBoundSolution2(arr1, target1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The lower bound is the index: ",
  lowerBoundSolution2(arr2, target2)
);

// Time Complexity: O(logN), where N = size of the given array.
// Reason: We are basically using the Binary Search algorithm.

// Space Complexity: O(1) as we are using no extra space.
