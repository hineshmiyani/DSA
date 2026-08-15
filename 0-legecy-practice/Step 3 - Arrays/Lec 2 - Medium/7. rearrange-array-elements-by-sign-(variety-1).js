/**
 * @article  : https://takeuforward.org/arrays/rearrange-array-elements-by-sign/
 * @question : https://leetcode.com/problems/rearrange-array-elements-by-sign/description/
 */

/*
  ✅ Problem Statement (Variety-1): 

  There’s an array ‘A’ of size ‘N’ with an equal number of positive and negative elements. Without altering the relative order of positive and negative elements, you must return an array of alternately positive and negative values.

  Example 1:
  Input: arr[] = {1,2,-4,-5}, N = 4
  Output: 1 -4 2 -5
  Explanation: 
  Positive elements = 1,2
  Negative elements = -4,-5
  To maintain relative ordering, 1 must occur before 2, and -4 must occur before -5.

  Example 2:
  Input: arr[] = {1, 2, 3,-1,-2,-3}, N = 6
  Output: 1 -3 2 -1 3 -2
  Explanation: 
  Positive elements = 1,2,3
  Negative elements = -3,-1,-2
  To maintain relative ordering, 1 must occur before 2, and 2 must occur before 3.
  Also, -3 should come before -1, and -1 should come before -2.

*/

// Brute-force Solution
const rearrangeArraySolution1 = (arr) => {
  // Initialize two arrays to hold positive and negative numbers separately
  const positiveNumbers = [];
  const negativeNumbers = [];

  // Iterate through the input array to separate positive and negative numbers
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    // If the element is positive or zero, add it to the positiveNumbers array
    if (element >= 0) {
      positiveNumbers.push(element);
    } else {
      // If the element is negative, add it to the negativeNumbers array
      negativeNumbers.push(element);
    }
  }

  // Iterate through half the length of the input array to rearrange elements
  // The reason for using arr.length / 2 is because we are placing one positive and one negative number in each iteration
  for (let index = 0; index < arr.length / 2; index++) {
    // Place the positive number at the even index positions in the original array
    arr[index * 2] = positiveNumbers[index];
    // Place the negative number at the odd index positions in the original array
    arr[index * 2 + 1] = negativeNumbers[index];
  }

  // Return the rearranged array
  return arr;
};

// Optimal Solution
const rearrangeArraySolution2 = (arr) => {
  // Create a new array of the same length as the input array to store the rearranged elements
  const rearrangedArray = new Array(arr.length);

  // Initialize indices for placing positive and negative numbers in the rearranged array
  // positiveNumsIndex starts at 0 (even index) and negativeNumsIndex starts at 1 (odd index)
  let positiveNumsIndex = 0;
  let negativeNumsIndex = 1;

  // Iterate through each element in the input array
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index]; // Get the current element

    // Check if the current element is positive
    if (element > 0) {
      // Place the positive element at the current positiveNumsIndex in the rearranged array
      rearrangedArray[positiveNumsIndex] = element;
      // Move the positiveNumsIndex to the next even index
      positiveNumsIndex = positiveNumsIndex + 2;
    } else {
      // Place the negative element at the current negativeNumsIndex in the rearranged array
      rearrangedArray[negativeNumsIndex] = element;
      // Move the negativeNumsIndex to the next odd index
      negativeNumsIndex = negativeNumsIndex + 2;
    }
  }

  // Return the rearranged array with alternating positive and negative elements
  return rearrangedArray;
};

// Example 1 Input
const arr1 = [1, 2, -4, -5];

// Example 2 Input
const arr2 = [1, 2, 3, -1, -2, -3];

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("Rearranged array is: ", rearrangeArraySolution1(arr1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("Rearranged array is: ", rearrangeArraySolution1(arr2));

// Time Complexity: O(N+N/2) { O(N) for traversing the array once for segregating positives and negatives and another O(N/2) for adding those elements alternatively to the array, where N = size of the array A}.

// Space Complexity:  O(N/2 + N/2) = O(N) { N/2 space required for each of the positive and negative element arrays, where N = size of the array A}.

console.log("\n\n ------------- Solution 2: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("Rearranged array is: ", rearrangeArraySolution2(arr1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("Rearranged array is: ", rearrangeArraySolution2(arr2));

// Time Complexity: O(N) { O(N) for traversing the array once and substituting positives and negatives simultaneously using pointers, where N = size of the array A}.

// Space Complexity:  O(N) { Extra Space used to store the rearranged elements separately in an array, where N = size of array A}.
