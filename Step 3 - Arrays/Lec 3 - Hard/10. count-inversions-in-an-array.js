/**
 * @article  : https://takeuforward.org/data-structure/count-inversions-in-an-array/
 * @question : https://www.geeksforgeeks.org/problems/inversion-of-array-1587115620/1
 */

/*
  ✅ Problem Statement: 

  Given an array of N integers, count the inversion of the array (using merge-sort).
  What is an inversion of an array? Definition: for all i & j < size of array, if i < j then you have to find pair (A[i],A[j]) such that A[j] < A[i].

  Example 1:
  Input Format: N = 5, array[] = {1,2,3,4,5}
  Result: 0
  Explanation: we have a sorted array and the sorted array has 0 inversions as for i < j you will never find a pair such that A[j] < A[i]. More clear example: 2 has index 1 and 5 has index 4 now 1 < 5 but 2 < 5 so this is not an inversion.

  Example 2:
  Input Format: N = 5, array[] = {5,4,3,2,1}
  Result: 10
  Explanation: we have a reverse sorted array and we will get the maximum inversions as for i < j we will always find a pair such that A[j] < A[i]. Example: 5 has index 0 and 3 has index 2 now (5,3) pair is inversion as 0 < 2 and 5 > 3 which will satisfy out conditions and for reverse sorted array we will get maximum inversions and that is (n)*(n-1) / 2.For above given array there is 4 + 3 + 2 + 1 = 10 inversions.

  Example 3:
  Input Format: N = 5, array[] = {5,3,2,1,4}
  Result: 7
  Explanation: There are 7 pairs (5,1), (5,3), (5,2), (5,4),(3,2), (3,1), (2,1) and we have left 2 pairs (2,4) and (1,4) as both are not satisfy our condition. 

*/

// Brute-force Solution
// An inversion pair is a pair of indices (i, j) such that i < j and arr[i] > arr[j]
const numberOfInversionsSolution1 = (arr) => {
  // Initialize a counter to keep track of the number of inversion pairs
  let inversionPairsCount = 0;

  // Loop through each element in the array
  for (let i = 0; i < arr.length; i++) {
    // For the current element arr[i], loop through the elements that come after it
    for (let j = i + 1; j < arr.length; j++) {
      // Check if the current pair (arr[i], arr[j]) is an inversion pair
      if (arr[i] > arr[j]) {
        // If it is, increment the inversion pairs counter
        inversionPairsCount = inversionPairsCount + 1;
      }
    }
  }

  // Return the total number of inversion pairs found in the array
  return inversionPairsCount;
};

// Optimal Solution
// Function to merge two halves of an array and count inversions
const merge = (arr, low, mid, high) => {
  let count = 0; // Initialize inversion count

  const temp = []; // Temporary array to store merged elements

  let left = low; // Starting index for the left subarray
  let right = mid + 1; // Starting index for the right subarray

  // Merge the two subarrays while counting inversions
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      // If element in left subarray is smaller or equal, no inversion
      temp.push(arr[left]);
      left = left + 1;
    } else {
      // If element in right subarray is smaller, it's an inversion
      temp.push(arr[right]);
      right = right + 1;
      count = count + mid - left + 1; // Count inversions
    }
  }

  // Copy remaining elements of left subarray, if any
  while (left <= mid) {
    temp.push(arr[left]);
    left = left + 1;
  }

  // Copy remaining elements of right subarray, if any
  while (right <= high) {
    temp.push(arr[right]);
    right = right + 1;
  }

  // Copy merged elements back into original array
  for (let index = low; index <= high; index++) {
    arr[index] = temp[index - low];
  }

  return count; // Return the number of inversions counted
};

// Function to perform merge sort and count inversions
const mergeSort = (arr, low, high) => {
  let count = 0; // Initialize inversion count

  // Base case: if the array has one or no elements, no inversions
  if (low >= high) return count;

  const mid = parseInt((low + high) / 2); // Find the middle point

  // Recursively sort and count inversions in the left half
  count = count + mergeSort(arr, low, mid);
  // Recursively sort and count inversions in the right half
  count = count + mergeSort(arr, mid + 1, high);

  // Merge the two halves and count inversions during the merge
  count = count + merge(arr, low, mid, high);

  return count; // Return the total number of inversions
};

// Function to count the number of inversions in the array
const numberOfInversionsSolution2 = (arr) => {
  return mergeSort(arr, 0, arr.length - 1); // Call mergeSort on the entire array
};

// Example 1 Input
const arr1 = [1, 2, 3, 4, 5];

// Example 2 Input
const arr2 = [5, 4, 3, 2, 1];

// Example 3 Input
const arr3 = [5, 3, 2, 1, 4];

console.log("\n ------------- Solution 1: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The number of inversions is: ", numberOfInversionsSolution1(arr1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The number of inversions is: ", numberOfInversionsSolution1(arr2));
console.log("\n ------------- Example 3: ------------- \n");
console.log("The number of inversions is: ", numberOfInversionsSolution1(arr3));

// Time Complexity: O(N2), where N = size of the given array.
// Reason: We are using nested loops here and those two loops roughly run for N times.

// Space Complexity: O(1) as we are not using any extra space to solve this problem.

console.log("\n ------------- Solution 2: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The number of inversions is: ", numberOfInversionsSolution2(arr1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The number of inversions is: ", numberOfInversionsSolution2(arr2));
console.log("\n ------------- Example 3: ------------- \n");
console.log("The number of inversions is: ", numberOfInversionsSolution2(arr3));

// Time Complexity: O(N*logN), where N = size of the given array.
// Reason: We are not changing the merge sort algorithm except by adding a variable to it. So, the time complexity is as same as the merge sort.

// Space Complexity: O(N), as in the merge sort We use a temporary array to store elements in sorted order.
