/**
 * @article  : https://takeuforward.org/arrays/floor-and-ceil-in-sorted-array/
 */

/*
  ✅ Problem Statement: 

  You're given an sorted array arr of n integers and an integer x. Find the floor and ceiling of x in arr[0..n-1].
  The floor of x is the largest element in the array which is smaller than or equal to x.
  The ceiling of x is the smallest element in the array greater than or equal to x.

  Example 1:
  Input Format: n = 6, arr[] ={3, 4, 4, 7, 8, 10}, x = 5
  Result: 4 7
  Explanation: The floor of 5 in the array is 4, and the ceiling of 5 in the array is 7.

  Example 2:
  Input Format: n = 6, arr[] ={3, 4, 4, 7, 8, 10}, x = 8
  Result: 8 8
  Explanation: The floor of 8 in the array is 8, and the ceiling of 8 in the array is also 8.

*/

// Optimal Solution

// Function to find the floor of a target value in a sorted array
const findFloor = (arr, target) => {
  let floor = -1; // Initialize floor to -1, indicating no floor found yet

  let low = 0; // Start of the search range
  let high = arr.length - 1; // End of the search range

  // Binary search loop
  while (low <= high) {
    const mid = Math.floor((low + high) / 2); // Calculate the middle index

    if (arr[mid] <= target) {
      // If the middle element is less than or equal to the target
      floor = arr[mid]; // Update the floor to the middle element
      low = mid + 1; // Move the search range to the right half
    } else {
      high = mid - 1; // Move the search range to the left half
    }
  }

  return floor; // Return the found floor value
};

// Function to find the ceiling of a target value in a sorted array
const findCeil = (arr, target) => {
  let ceil = -1; // Initialize ceil to -1, indicating no ceil found yet

  let low = 0; // Start of the search range
  let high = arr.length - 1; // End of the search range

  // Binary search loop
  while (low <= high) {
    const mid = Math.floor((low + high) / 2); // Calculate the middle index

    if (arr[mid] >= target) {
      // If the middle element is greater than or equal to the target
      ceil = arr[mid]; // Update the ceil to the middle element
      high = mid - 1; // Move the search range to the left half
    } else {
      low = mid + 1; // Move the search range to the right half
    }
  }

  return ceil; // Return the found ceil value
};

// Function to get both floor and ceiling of a target value in a sorted array
const getFloorAndCeil = (arr, target) => {
  const floor = findFloor(arr, target); // Find the floor value
  const ceil = findCeil(arr, target); // Find the ceil value

  return {
    floor, // Return the floor value
    ceil, // Return the ceil value
  };
};

// Example 1 Input
const arr1 = [3, 4, 4, 7, 8, 10];
const target1 = 5;

// Example 2 Input
const arr2 = [3, 4, 4, 7, 8, 10];
const target2 = 8;

console.log("\n ------------- Solution 1: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The floor and ceil are: ", getFloorAndCeil(arr1, target1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The floor and ceil are: ", getFloorAndCeil(arr2, target2));

// Time Complexity: O(logN), where N = size of the given array.
// Reason: We are basically using the Binary Search algorithm.

// Space Complexity: O(1) as we are using no extra space.
