/**
 * @article  : https://takeuforward.org/data-structure/sort-an-array-of-0s-1s-and-2s/
 * @question : https://leetcode.com/problems/sort-colors/
 */

/*
  ✅ Problem Statement: 

  Given an array consisting of only 0s, 1s, and 2s. Write a program to in-place sort the array without using inbuilt sort functions. ( Expected: Single pass-O(N) and constant space)

  Example 1:
  Input: nums = [2,0,2,1,1,0]
  Output : [0,0,1,1,2,2]

  Example 2:
  Input: nums = [2,0,1]
  Output: [0,1,2]

  Example 3:
  Input: nums = [0]
  Output: [0]

*/

// Brute-force Solution
// Sorting ( even if it is not the expected solution here but it can be considered as one of the approaches). Since the array contains only 3 integers, 0, 1, and 2. Simply sorting the array would arrange the elements in increasing order.
const sortArraySolution1 = (arr) => {
  // The sort method sorts the elements of an array in place and returns the sorted array.
  // The compare function (a, b) => a - b ensures that the array is sorted in ascending order.
  // If the result of a - b is negative, a comes before b.
  // If the result of a - b is positive, b comes before a.
  // If the result of a - b is zero, the order of a and b remains unchanged.
  arr.sort((a, b) => a - b);

  // Return the sorted array.
  return arr;
};

// Better Solution
const sortArraySolution2 = (arr) => {
  // Initialize counters for 0s, 1s, and 2s
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;

  // First pass: Count the number of 0s, 1s, and 2s in the array
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];

    // Increment the respective counter based on the element value
    if (element === 0) {
      count0 = count0 + 1;
    } else if (element === 1) {
      count1 = count1 + 1;
    } else {
      count2 = count2 + 1;
    }
  }

  // Second pass: Overwrite the array with the counted number of 0s, 1s, and 2s
  // Fill the array with 0s up to count0
  for (let index = 0; index < count0; index++) {
    arr[index] = 0;
  }
  // Fill the array with 1s from count0 to count0 + count1
  for (let index = count0; index < count0 + count1; index++) {
    arr[index] = 1;
  }
  // Fill the array with 2s from count0 + count1 to n (arr.length)
  for (let index = count0 + count1; index < arr.length; index++) {
    arr[index] = 2;
  }

  // Return the sorted array
  return arr;
};

// Optimal Solution
const sortArraySolution3 = (arr) => {
  // Dutch National Flag algorithm
  // This algorithm is used to sort an array of 0s, 1s, and 2s in a single pass with constant space.
  // The idea is to partition the array into three sections:
  // 0 -> low - 1 : All 0s
  // low -> mid - 1 : All 1s
  // mid -> high : Unsorted elements
  // high + 1 -> n - 1 : All 2s

  // Initialize pointers for low, mid, and high
  let low = 0; // Pointer for the next position of 0
  let mid = 0; // Pointer for the current element being examined
  let high = arr.length - 1; // Pointer for the next position of 2

  // Traverse the array until mid pointer crosses high pointer
  while (mid <= high) {
    if (arr[mid] === 0) {
      // If the current element is 0, swap it with the element at the low pointer
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      // Increment both low and mid pointers
      low = low + 1;
      mid = mid + 1;
    } else if (arr[mid] === 1) {
      // If the current element is 1, just move the mid pointer to the next element
      mid = mid + 1;
    } else if (arr[mid] === 2) {
      // If the current element is 2, swap it with the element at the high pointer
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      // Decrement the high pointer
      high = high - 1;
      // Note: Do not increment mid pointer here because the swapped element needs to be examined
    }
  }

  // Return the sorted array
  return arr;
};

// Example 1 Input
const arr1 = [2, 0, 2, 1, 1, 0];

// Example 2 Input
const arr2 = [2, 0, 1];

// Example 3 Input
const arr3 = [0];

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The array after sorting is: ", sortArraySolution1(arr1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The array after sorting is: ", sortArraySolution1(arr2));
console.log("\n ------------- Example 3: ------------- \n");
console.log("The array after sorting is: ", sortArraySolution1(arr3));

// Time Complexity: O(N*logN)
// Space Complexity: O(1)

console.log("\n\n ------------- Solution 2: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The array after sorting is: ", sortArraySolution2(arr1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The array after sorting is: ", sortArraySolution2(arr2));
console.log("\n ------------- Example 3: ------------- \n");
console.log("The array after sorting is: ", sortArraySolution2(arr3));

// Time Complexity: O(N) + O(N), where N = size of the array. First O(N) for counting the number of 0’s, 1’s, 2’s, and second O(N) for placing them correctly in the original array.
// Space Complexity: O(1) as we are not using any extra space.

console.log("\n\n ------------- Solution 3: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The array after sorting is: ", sortArraySolution3(arr1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The array after sorting is: ", sortArraySolution3(arr2));
console.log("\n ------------- Example 3: ------------- \n");
console.log("The array after sorting is: ", sortArraySolution3(arr3));

// Time Complexity: O(N), where N = size of the given array.
// Reason: We are using a single loop that can run at most N times.

// Space Complexity: O(1) as we are not using any extra space.
