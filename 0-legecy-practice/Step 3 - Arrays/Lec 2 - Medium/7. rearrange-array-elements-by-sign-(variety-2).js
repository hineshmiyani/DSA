/**
 * @article  : https://takeuforward.org/arrays/rearrange-array-elements-by-sign/
 * @question : https://leetcode.com/problems/rearrange-array-elements-by-sign/description/
 */

/*
  ✅ Problem Statement (Variety-2): 

  There’s an array ‘A’ of size ‘N’ with positive and negative elements (not necessarily equal). Without altering the relative order of positive and negative elements, you must return an array of alternately positive and negative values. The leftover elements should be placed at the very end in the same order as in array A.
  Note: Start the array with positive elements.

  Example 1:
  Input: arr[] = {1,2,-4,-5,3,4}, N = 6
  Output: 1 -4 2 -5 3 4
  Explanation: 
  Positive elements = 1,2
  Negative elements = -4,-5
  To maintain relative ordering, 1 must occur before 2, and -4 must occur before -5.
  Leftover positive elements are 3 and 4 which are then placed at the end of the array.

  Example 2:
  Input: arr[] = {1,2,-3,-1,-2, -4}, N = 6
  Output: 1 -3 2 -1 -2 -4
  Explanation: 
  Positive elements = 1,2
  Negative elements = -3,-1,-2,-4
  To maintain relative ordering, 1 must occur before 2.
  Also, -3 should come before -1, and -1 should come before -2.
  After alternate ordering, -2 and -4 are left, which would be placed at the end of the ans array.

*/

// Optimal Solution
const rearrangeArray = (arr) => {
  // Initialize two arrays to hold positive and negative numbers separately
  const positiveNumbers = [];
  const negativeNumbers = [];

  // Iterate through the input array to separate positive and negative numbers
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element >= 0) {
      // If the element is positive or zero, add it to the positiveNumbers array
      positiveNumbers.push(element);
    } else {
      // If the element is negative, add it to the negativeNumbers array
      negativeNumbers.push(element);
    }
  }

  // Check which array (positiveNumbers or negativeNumbers) has fewer elements
  if (negativeNumbers.length > positiveNumbers.length) {
    // If there are more negative numbers, start by placing positive numbers at even indices
    for (let index = 0; index < positiveNumbers.length; index++) {
      arr[index * 2] = positiveNumbers[index];
      arr[index * 2 + 1] = negativeNumbers[index];
    }

    // Calculate the starting index for the remaining negative numbers
    let startIndex = positiveNumbers.length * 2;

    // Place the remaining negative numbers at the end of the array
    for (
      let index = positiveNumbers.length;
      index < negativeNumbers.length;
      index++
    ) {
      arr[startIndex] = negativeNumbers[index];
      startIndex = startIndex + 1;
    }
  } else {
    // If there are more positive numbers or they are equal, start by placing negative numbers at odd indices
    for (let index = 0; index < negativeNumbers.length; index++) {
      arr[index * 2] = positiveNumbers[index];
      arr[index * 2 + 1] = negativeNumbers[index];
    }

    // Calculate the starting index for the remaining positive numbers
    let startIndex = negativeNumbers.length * 2;

    // Place the remaining positive numbers at the end of the array
    for (
      let index = negativeNumbers.length;
      index < positiveNumbers.length;
      index++
    ) {
      arr[startIndex] = positiveNumbers[index];
      startIndex = startIndex + 1;
    }
  }

  // Return the rearranged array
  return arr;
};

// Example 1 Input
const arr1 = [1, 2, -4, -5, 3, 4];

// Example 2 Input
const arr2 = [1, 2, -3, -1, -2, -4];

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("Rearranged array is: ", rearrangeArray(arr1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("Rearranged array is: ", rearrangeArray(arr2));

// Time Complexity: O(2*N) { The worst case complexity is O(2*N) which is a combination of O(N) of traversing the array to segregate into neg and pos array and O(N) for adding the elements alternatively to the main array}.

// Explanation: The second O(N) is a combination of O(min(pos, neg)) + O(leftover elements). There can be two cases: when only positive or only negative elements are present, O(min(pos, neg)) + O(leftover) = O(0) + O(N), and when equal no. of positive and negative elements are present, O(min(pos, neg)) + O(leftover) = O(N/2) + O(0). So, from these two cases, we can say the worst-case time complexity is O(N) for the second part, and by adding the first part we get the total complexity of O(2*N).

// Space Complexity:  O(N/2 + N/2) = O(N) { N/2 space required for each of the positive and negative element arrays, where N = size of the array A}.
