/**
 * @article  : https://takeuforward.org/data-structure/merge-sort-algorithm/
 * @question : https://www.geeksforgeeks.org/problems/merge-sort/1
 */

/*
  ✅ Problem Statement: 

  Given an array of size n, sort the array using Merge Sort.

  Example 1:
  Input: N=5, arr[]={4,2,1,6,7}
  Output: 1,2,4,6,7,


  Example 2:
  Input: N=7,arr[]={3,2,8,5,1,4,23}
  Output: 1,2,3,4,5,8,23

*/

/* 

  NOTE: Merge Sort is a divide and conquers algorithm, it divides the given array into equal parts and then merges the 2 sorted parts. 

  - There are 2 main functions :
    - merge(): This function is used to merge the 2 halves of the array. It assumes that both parts of the array are sorted and merges both of them.

    - mergeSort(): This function divides the array into 2 parts. low to mid and mid+1 to high where,
        low = leftmost index of the array
        high = rightmost index of the array
        mid = Middle index of the array 

  - We recursively split the array, and go from top-down until all sub-arrays size becomes 1.

*/

const merge = (arr, low, mid, high) => {
  // Initialize pointers for the left and right subarrays
  let left = low;
  let right = mid + 1;

  // Temporary array to store the merged result
  const temp = [];

  // Merge the two subarrays into temp[]
  while (left <= mid && right <= high) {
    // If the current element in the left subarray is smaller or equal,
    // add it to the temp array and move the left pointer
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left = left + 1;
    } else {
      // If the current element in the right subarray is smaller,
      // add it to the temp array and move the right pointer
      temp.push(arr[right]);
      right = right + 1;
    }
  }

  // If there are remaining elements in the left subarray, add them to temp[]
  while (left <= mid) {
    temp.push(arr[left]);
    left = left + 1;
  }

  // If there are remaining elements in the right subarray, add them to temp[]
  while (right <= high) {
    temp.push(arr[right]);
    right = right + 1;
  }

  // Copy the merged elements back into the original array
  for (let index = low; index <= high; index++) {
    arr[index] = temp[index - low];
  }
};

const mergeSort = (arr, low, high) => {
  // Base Case: If the subarray has one or no elements, it is already sorted
  if (low >= high) return;

  // Calculate the middle index of the current subarray
  // Using parseInt to ensure the result is an integer
  const mid = parseInt((low + high) / 2);

  // Recursively sort the left half of the subarray
  // This will keep dividing the left half until the base case is reached
  mergeSort(arr, low, mid);

  // Recursively sort the right half of the subarray
  // This will keep dividing the right half until the base case is reached
  mergeSort(arr, mid + 1, high);

  // Merge the two sorted halves back together
  // The merge function will combine the sorted left and right halves into a single sorted subarray
  merge(arr, low, mid, high);
};

let arr1 = [4, 2, 1, 6, 7];
let arr2 = [3, 2, 8, 5, 1, 4, 23];

console.log("\n ------------- Example 1: ------------- \n");

mergeSort(arr1, 0, arr1.length - 1);
console.log(`Merge sort of [4, 2, 1, 6, 7] : \n`, arr1);

console.log("\n ------------- Example 2: ------------- \n");

mergeSort(arr2, 0, arr2.length - 1);
console.log(`Merge sort of [3, 2, 8, 5, 1, 4, 23] : \n`, arr2);

// Time complexity: O(nlogn)
// Reason: At each step, we divide the whole array, for that logn and we assume n steps are taken to get a sorted array, so overall time complexity will be nlogn

// Space complexity: O(n)
// Reason: We are using a temporary array to store elements in sorted order.
// Auxiliary Space Complexity: O(n)
