/**
 * @article  : https://takeuforward.org/data-structure/insertion-sort-algorithm/
 * @question : https://www.geeksforgeeks.org/problems/insertion-sort/0
 */

/*
  ✅ Problem Statement: 

  Given an array of N integers, write a program to implement the Insertion sorting algorithm.

  Example 1:
  Input: N = 6, array[] = {13,46,24,52,20,9}
  Output: 9,13,20,24,46,52
  Explanation: After sorting we get 9,13,20,24,46,52

  Input: N = 5, array[] = {5,4,3,2,1}
  Output: 1,2,3,4,5
  Explanation: After sorting we get 1,2,3,4,5

*/

/* 

  NOTE: 
  - Select an element in each iteration from the unsorted array(using a loop).
  - Place it in its corresponding position in the sorted part and shift the remaining elements accordingly (using an inner loop and swapping).
  - The “inner while loop” basically shifts the elements using swapping.

*/
//

const insertionSort = (arr, n) => {
  // Loop through each element in the array starting from the first element
  for (let i = 0; i <= n - 1; i++) {
    // Initialize j to the current index i
    let j = i;

    // While j is greater than 0 and the element at index j-1 is greater than the element at index j
    while (j > 0 && arr[j - 1] > arr[j]) {
      // Swap the elements at index j-1 and j
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];

      // Decrement j to continue comparing with previous elements
      j = j - 1;
    }
  }

  // Return the sorted array
  return arr;
};

console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "Insertion sort of [13, 46, 24, 52, 20, 9] : \n",
  insertionSort([13, 46, 24, 52, 20, 9], 6)
);

console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "Insertion sort of [5, 4, 3, 2, 1] : \n",
  insertionSort([5, 4, 3, 2, 1], 5)
);
