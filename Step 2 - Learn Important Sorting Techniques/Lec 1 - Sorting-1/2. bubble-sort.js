/**
 * @article  : https://takeuforward.org/data-structure/bubble-sort-algorithm/
 * @question : https://www.geeksforgeeks.org/problems/bubble-sort/1
 */

/*
  ✅ Problem Statement: 

  Given an array of N integers, write a program to implement the Bubble Sorting algorithm.

  Example 1:
  Input: N = 6, array[] = {13,46,24,52,20,9}
  Output: 9,13,20,24,46,52
  Explanation: After sorting we get 9,13,20,24,46,52

  Input: N = 5, array[] = {5,4,3,2,1}
  Output: 1,2,3,4,5
  Explanation: After sorting we get 1,2,3,4,5

*/

// Bubble sort algorithm to sort an array in ascending order

// NOTE: Push the MAX element to the last by adjacent swaps

/* 

  The algorithm steps are as follows:
  
  - First, we will select the range of the unsorted array. For that, we will run a loop(say i) that will signify the last index of the selected range. The loop will run backward from index  n-1 to 0(where n = size of the array). The value i = n-1 means the range is from 0 to n-1, and similarly, i = n-2 means the range is from 0 to n-2, and so on.
  
  - Within the loop, we will run another loop(say j, runs from 0 to i-1 though the range is from 0 to i) to push the maximum element to the last index of the selected range, by repeatedly swapping adjacent elements. Basically, we will swap adjacent elements(if arr[j] > arr[j+1]) until the maximum element of the range reaches the end.
  
  - Thus, after each iteration, the last part of the array will become sorted. Like: after the first iteration, the array up to the last index will be sorted, and after the second iteration, the array up to the second last index will be sorted, and so on.
  
  - After (n-1) iteration, the whole array will be sorted.

  Note: Here, after each iteration, the array becomes sorted up to the last index of the range. That is why the last index of the range decreases by 1 after each iteration. This decrement is achieved by the outer loop and the last index is represented by variable i in the following code. And the inner loop(i.e. j) helps to push the maximum element of range [0….i] to the last index(i.e. index i).

*/

const bubbleSort = (arr, n) => {
  // Iterate through the array multiple times, reducing the range with each pass
  for (let i = n - 1; i >= 1; i--) {
    // Flag to check if any swaps were made during the current pass
    let isSwapped = false;

    // Iterate through the array up to the current range
    for (let j = 0; j <= i - 1; j++) {
      // Compare adjacent elements and swap if the current element is greater than the next element
      if (arr[j] > arr[j + 1]) {
        // Swap the elements using destructuring assignment
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

        // Set the flag to true indicating a swap was made
        isSwapped = true;
      }
    }

    // If no swaps were made during the current pass, the array is already sorted
    if (!isSwapped) {
      break;
    }
  }

  // Return the sorted array
  return arr;
};

console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "Bubble sort of [13, 46, 24, 52, 20, 9] : \n",
  bubbleSort([13, 46, 24, 52, 20, 9], 6)
);

console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "Bubble sort of [5, 4, 3, 2, 1] : \n",
  bubbleSort([5, 4, 3, 2, 1], 5)
);

console.log("\n ------------- Example 3: ------------- \n");
console.log(
  "Bubble sort of [1, 2, 3, 4, 5] : \n",
  bubbleSort([1, 2, 3, 4, 5], 5)
);

// The time complexity of Bubble Sort is O(n^2) in the worst and average-case scenarios.
// This is because in each iteration, the algorithm compares and potentially swaps each pair of elements, resulting in a quadratic time complexity.

// The time complexity of Bubble Sort is O(n) in the best-case scenario when the array is already sorted.
// In this case, the algorithm makes a single pass through the array without any swaps, leading to a linear time complexity.
