/**
 * @article : https://takeuforward.org/data-structure/quick-sort-algorithm/
 */

/*
  ✅ Problem Statement: 

  Given an array of n integers, sort the array using the Quicksort method.

  Example 1:
  Input:  N = 5  , Arr[] = {4,1,7,9,3}
  Output: 1 3 4 7 9 

  Explanation: After sorting the array becomes 1, 3, 4, 7, 9

  Example 2:
  Input: N = 8 , Arr[] = {4,6,2,5,7,9,1,3}
  Output: 1 2 3 4 5 6 7 9
  Explanation: After sorting the array becomes 1 2 3 4 5 6 7 9

*/

/* 

  NOTE: Quick Sort is a divide-and-conquer algorithm like the Merge Sort. But unlike Merge sort, this algorithm does not use any extra array for sorting(though it uses an auxiliary stack space). So, from that perspective, Quick sort is slightly better than Merge sort.

  - This algorithm is basically a repetition of two simple steps that are the following:
    - Pick a pivot and place it in its correct place in the sorted array.
    - Shift smaller elements(i.e. Smaller than the pivot) on the left of the pivot and larger ones to the right.  

  - Now, let’s discuss the steps in detail considering the array {4,6,2,5,7,9,1,3}:

  - Step 1: The first thing is to choose the pivot. A pivot is basically a chosen element of the given array. The element or the pivot can be chosen by our choice. So, in an array a pivot can be any of the following:
    - The first element of the array
    - The last element of the array
    - Median of array
    - Any Random element of the array
  
  - After choosing the pivot(i.e. the element), we should place it in its correct position(i.e. The place it should be after the array gets sorted) in the array. For example, if the given array is {4,6,2,5,7,9,1,3}, the correct position of 4 will be the 4th position.

  - Note: Here in this tutorial, we have chosen the first element as our pivot. You can choose any element as per your choice.

  - Step 2: In step 2, we will shift the smaller elements(i.e. Smaller than the pivot) to the left of the pivot and the larger ones to the right of the pivot. In the example, if the chosen pivot is 4, after performing step 2 the array will look like: {3, 2, 1, 4, 6, 5, 7, 9}. 
  
  - From the explanation, we can see that after completing the steps, pivot 4 is in its correct position with the left and right subarray unsorted. Now we will apply these two steps on the left subarray and the right subarray recursively. And we will continue this process until the size of the unsorted part becomes 1(as an array with a single element is always sorted).

  - So, from the above intuition, we can get a clear idea that we are going to use recursion in this algorithm.

  - To summarize, the main intention of this process is to place the pivot, after each recursion call, at its final position, where the pivot should be in the final sorted array.

*/

// Function to swap two elements in an array
const swapElements = (arr, lowerIndex, higherIndex) => {
  [arr[higherIndex], arr[lowerIndex]] = [arr[lowerIndex], arr[higherIndex]];
};

// Function to partition the array into two halves and return the pivot index
const partition = (arr, low, high) => {
  const pivot = arr[low]; // Choose the first element as the pivot
  let i = low; // Initialize i to the start of the array
  let j = high; // Initialize j to the end of the array

  // Loop until i and j cross each other
  while (i < j) {
    // Increment i until an element greater than the pivot is found
    while (arr[i] <= pivot && i <= high - 1) {
      i = i + 1;
    }

    // Decrement j until an element less than or equal to the pivot is found
    while (arr[j] > pivot && j >= low + 1) {
      j = j - 1;
    }

    // Swap elements at i and j if they haven't crossed each other
    if (i < j) {
      swapElements(arr, i, j);
    }
  }

  // Swap the pivot element with the element at j to place the pivot in its correct position
  swapElements(arr, low, j);
  return j; // Return the pivot index
};

// Function to perform QuickSort on the array
const quickSort = (arr, low, high) => {
  if (low < high) {
    // Partition the array and get the pivot index
    const pIndex = partition(arr, low, high);

    // Recursively sort the left subarray
    quickSort(arr, low, pIndex - 1);
    // Recursively sort the right subarray
    quickSort(arr, pIndex + 1, high);
  }

  return arr; // Return the sorted array
};

let arr1 = [4, 1, 7, 9, 3];
let arr2 = [4, 6, 2, 5, 7, 9, 1, 3];

console.log("\n ------------- Example 1: ------------- \n");

quickSort(arr1, 0, arr1.length - 1);
console.log(`Quick sort of [4, 1, 7, 9, 3] : \n`, arr1);

console.log("\n ------------- Example 2: ------------- \n");

quickSort(arr2, 0, arr2.length - 1);
console.log(`Quick sort of [4, 6, 2, 5, 7, 9, 1, 3] : \n`, arr2);

// The time complexity of the QuickSort algorithm as follows:

// Best and Average Case Time Complexity: O(N * log N)
// Reason: In the best and average cases, the pivot chosen divides the array into two nearly equal halves.
// This results in a balanced partitioning, leading to a logarithmic number of recursive calls (log N).
// Each partitioning step involves a linear scan of the array (N), resulting in an overall time complexity of O(N * log N).

// Worst Case Time Complexity: O(N^2)
// Reason: The worst case occurs when the pivot chosen is either the smallest or largest element in the array, leading to highly unbalanced partitions.
// In such cases, one partition will have N-1 elements and the other will have 0 elements.
// This results in N recursive calls, each involving a linear scan of the array (N), leading to an overall time complexity of O(N^2).

// Space Complexity: O(log N) to O(N)
// Reason: The space complexity is primarily due to the recursion stack.
// In the best and average cases, the depth of the recursion tree is log N, leading to a space complexity of O(log N).
// In the worst case, the depth of the recursion tree can be N, leading to a space complexity of O(N).

// Summary:

// Best and Average Case Time Complexity: O(N * log N)
// Worst Case Time Complexity: O(N^2)
// Space Complexity: O(log N) to O(N)
