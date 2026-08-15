/**
 * @article  : https://takeuforward.org/data-structure/count-reverse-pairs/
 * @question : https://leetcode.com/problems/reverse-pairs/
 */

/*
  ✅ Problem Statement: 

  Given an array of numbers, you need to return the count of reverse pairs. Reverse Pairs are those pairs where i<j and arr[i]>2*arr[j].

  Example 1:
  Input: N = 5, array[] = {1,3,2,3,1)
  Output: 2 
  Explanation: The pairs are (3, 1) and (3, 1) as from both the pairs the condition arr[i] > 2*arr[j] is satisfied.

  Example 2:
  Input: N = 4, array[] = {3,2,1,4}
  Output: 1
  Explanation: There is only 1 pair  ( 3 , 1 ) that satisfy the condition arr[i] > 2*arr[j] 

*/

// Brute-force Solution
// Function to count the number of reverse pairs in an array
// A reverse pair is defined as a pair (i, j) such that i < j and arr[i] > 2 * arr[j]
const countReversePairsSolution1 = (arr) => {
  // Initialize the count of reverse pairs to 0
  let count = 0;

  // Iterate over each element in the array using index i
  for (let i = 0; i < arr.length; i++) {
    // For each element arr[i], iterate over the elements that come after it using index j
    for (let j = i + 1; j < arr.length; j++) {
      // Check if the current pair (arr[i], arr[j]) is a reverse pair
      if (arr[i] > 2 * arr[j]) {
        // If it is, increment the count of reverse pairs
        count = count + 1;
      }
    }
  }

  // Return the total count of reverse pairs found in the array
  return count;
};

// Optimal Solution
// Function to merge two sorted halves of an array
const merge = (arr, low, mid, high) => {
  // Temporary array to store merged elements
  const temp = [];

  // Pointers for left and right subarrays
  let left = low;
  let right = mid + 1;

  // Merge elements from both subarrays in sorted order
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      // If the element in the left subarray is smaller or equal, add it to temp
      temp.push(arr[left]);
      left = left + 1;
    } else {
      // If the element in the right subarray is smaller, add it to temp
      temp.push(arr[right]);
      right = right + 1;
    }
  }

  // Copy remaining elements from the left subarray, if any
  while (left <= mid) {
    temp.push(arr[left]);
    left = left + 1;
  }

  // Copy remaining elements from the right subarray, if any
  while (right <= high) {
    temp.push(arr[right]);
    right = right + 1;
  }

  // Copy merged elements back to the original array
  for (let index = low; index <= high; index++) {
    arr[index] = temp[index - low];
  }
};

// Function to count reverse pairs in the array
const countPairs = (arr, low, mid, high) => {
  let count = 0;
  let right = mid + 1;

  // Iterate through the left subarray
  for (let index = low; index <= mid; index++) {
    // Find the first element in the right subarray that is more than twice the current element in the left subarray
    while (right <= high && arr[index] > 2 * arr[right]) {
      right = right + 1;
    }

    // Count the number of such elements
    count = count + right - (mid + 1);
  }

  return count;
};

// Function to perform merge sort and count reverse pairs
const mergeSort = (arr, low, high) => {
  let count = 0;

  // Base case: if the subarray has one or zero elements, return count
  if (low >= high) return count;

  // Find the middle index
  const mid = parseInt((low + high) / 2);

  // Recursively sort the left half and count reverse pairs
  count = count + mergeSort(arr, low, mid);

  // Recursively sort the right half and count reverse pairs
  count = count + mergeSort(arr, mid + 1, high);

  // Count reverse pairs between the two halves
  count = count + countPairs(arr, low, mid, high);

  // Merge the two sorted halves
  merge(arr, low, mid, high);

  return count;
};

// Function to count reverse pairs in the entire array
const countReversePairsSolution2 = (arr) => {
  return mergeSort(arr, 0, arr.length - 1);
};

// Example 1 Input
const arr1 = [1, 3, 2, 3, 1];

// Example 2 Input
const arr2 = [3, 2, 1, 4];

console.log("\n ------------- Solution 1: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The number of inversions is: ", countReversePairsSolution1(arr1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The number of inversions is: ", countReversePairsSolution1(arr2));

// Time Complexity: O(N2), where N = size of the given array.
// Reason: We are using nested loops here and those two loops roughly run for N times.

// Space Complexity: O(1) as we are not using any extra space to solve this problem.

console.log("\n ------------- Solution 2: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The number of inversions is: ", countReversePairsSolution2(arr1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The number of inversions is: ", countReversePairsSolution2(arr2));

// Time Complexity: O(2N*logN), where N = size of the given array.
// Reason: Inside the mergeSort() we call merge() and countPairs() except mergeSort() itself. Now, inside the function countPairs(), though we are running a nested loop, we are actually iterating the left half once and the right half once in total. That is why, the time complexity is O(N). And the merge() function also takes O(N). The mergeSort() takes O(logN) time complexity. Therefore, the overall time complexity will be O(logN * (N+N)) = O(2N*logN).

// Space Complexity: O(N), as in the merge sort We use a temporary array to store elements in sorted order.
