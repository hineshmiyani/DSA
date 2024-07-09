/**
 * @article  : https://takeuforward.org/data-structure/next_permutation-find-next-lexicographically-greater-permutation/
 * @question : https://leetcode.com/problems/next-permutation/
 */

/*
  ✅ Problem Statement: 

  Given an array Arr[] of integers, rearrange the numbers of the given array into the lexicographically next greater permutation of numbers.
  If such an arrangement is not possible, it must rearrange to the lowest possible order (i.e., sorted in ascending order).

  Example 1:
  Input format: Arr[] = {1,3,2}
  Output: Arr[] = {2,1,3}
  Explanation: All permutations of {1,2,3} are {{1,2,3} , {1,3,2}, {2,13} , {2,3,1} , {3,1,2} , {3,2,1}}. So, the next permutation just after {1,3,2} is {2,1,3}.

  Example 2:
  Input format: Arr[] = {3,2,1}
  Output: Arr[] = {1,2,3}
  Explanation: As we see all permutations of {1,2,3}, we find {3,2,1} at the last position. So, we have to return the topmost permutation.

*/

// Brute Force Solution: Finding all possible permutations.

// Approach :
// Step 1: Find all possible permutations of elements present and store them.
// Step 2: Search input from all possible permutations.
// Step 3: Print the next permutation present right after it.
// For reference of how to find all possible permutations, follow up https://www.youtube.com/watch?v=f2ic2Rsc9pU&t=32s. This video shows for distinct elements but code works for duplicates too.

// Optimal Solution

const reverseArr = (arr, left, right) => {
  while (left < right) {
    // Swap elements at 'left' and 'right' indices
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left = left + 1; // Move 'left' index to the right
    right = right - 1; // Move 'right' index to the left
  }
};

const nextGreaterPermutation = (arr) => {
  let breakPointIndex = -1; // Initialize the break point index to -1
  const n = arr.length; // Get the length of the array

  // Step 1: Find the first index from the end where the current element is less than the next element
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      breakPointIndex = i; // Set the break point index
      break; // Exit the loop
    }
  }

  // Step 2: If no such index is found, reverse the entire array to get the lowest possible order
  if (breakPointIndex === -1) {
    reverseArr(arr, 0, n - 1);
    return arr; // Return the reversed array
  }

  // Step 3: Find the first element from the end that is greater than the element at the break point index
  for (let i = n - 1; i >= breakPointIndex; i--) {
    if (arr[i] > arr[breakPointIndex]) {
      // Swap the elements at 'i' and 'breakPointIndex'
      [arr[i], arr[breakPointIndex]] = [arr[breakPointIndex], arr[i]];
      break; // Exit the loop
    }
  }

  // Step 4: Reverse the portion of the array from 'breakPointIndex + 1' to the end
  reverseArr(arr, breakPointIndex + 1, n - 1);

  return arr; // Return the next permutation of the array
};

// Example 1 Input
const arr1 = [1, 3, 2];

// Example 2 Input
const arr2 = [3, 2, 1];

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The next permutation is: ", nextGreaterPermutation(arr1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The next permutation is: ", nextGreaterPermutation(arr2));

// Time Complexity: O(3N), where N = size of the given array
// Finding the break-point, finding the next greater element, and reversal at the end takes O(N) for each, where N is the number of elements in the input array. This sums up to 3*O(N) which is approximately O(3N).

// Space Complexity: Since no extra storage is required. Thus, its space complexity is O(1).
