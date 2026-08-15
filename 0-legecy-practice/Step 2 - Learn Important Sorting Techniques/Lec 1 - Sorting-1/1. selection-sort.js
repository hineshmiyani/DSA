/**
 * @article  : https://takeuforward.org/sorting/selection-sort-algorithm/
 * @question : https://www.geeksforgeeks.org/problems/selection-sort/1
 */

/*
  ✅ Problem Statement: 

  Given an array of N integers, write a program to implement the Selection sorting algorithm.

  Example 1:
  Input: N = 6, array[] = {13,46,24,52,20,9}
  Output: 9,13,20,24,46,52
  Explanation: After sorting the array is: 9, 13, 20, 24, 46, 52

  Example 2:
  Input: N=5, array[] = {5,4,3,2,1}
  Output: 1,2,3,4,5
  Explanation: After sorting the array is: 1, 2, 3, 4, 5

*/

/* 

  NOTE: Find the minimum element and swap

  The algorithm steps are as follows:

  - First, we will select the range of the unsorted array using a loop (say i) that indicates the starting index of the range.

  - The loop will run forward from 0 to n-1. The value i = 0 means the range is from 0 to n-1, and similarly, i = 1 means the range is from 1 to n-1, and so on. 
    (Initially, the range will be the whole array starting from the first index.)
  
  - Now, in each iteration, we will select the minimum element from the range of the unsorted array using an inner loop.
   
  - After that, we will swap the minimum element with the first element of the selected range(in step 1). 
   
  - Finally, after each iteration, we will find that the array is sorted up to the first index of the range. 
   
  Note: Here, after each iteration, the array becomes sorted up to the first index of the range. That is why the starting index of the range increases by 1 after each iteration. This increment is achieved by the outer loop and the starting index is represented by variable i in the following code. And the inner loop(i.e. j) helps to find the minimum element of the range [i…..n-1].

*/

const selectionSort = (arr, n) => {
  // Outer loop to iterate over each element in the array except the last one
  for (let i = 0; i < n - 1; i++) {
    // Assume the current element is the minimum
    let minElementIndex = i;

    // Inner loop to find the minimum element in the remaining unsorted part of the array
    for (let j = i; j < n; j++) {
      // If a smaller element is found, update the index of the minimum element
      if (arr[j] < arr[minElementIndex]) {
        minElementIndex = j;
      }
    }

    // Swap the found minimum element with the first element of the unsorted part
    [arr[i], arr[minElementIndex]] = [arr[minElementIndex], arr[i]];
  }

  // Return the sorted array
  return arr;
};

console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "Selection sort of [13, 46, 24, 52, 20, 9] : \n",
  selectionSort([13, 46, 24, 52, 20, 9], 6)
);

console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "Selection sort of [5, 4, 3, 2, 1] : \n",
  selectionSort([5, 4, 3, 2, 1], 5)
);

// The time complexity of selection sort is O(n^2)
