/**
 * @article  : https://takeuforward.org/data-structure/count-maximum-consecutive-ones-in-the-array/
 * @question : https://leetcode.com/problems/max-consecutive-ones/
 */

/*
  ✅ Problem Statement: 

  Given an array that contains only 1 and 0 return the count of maximum consecutive ones in the array.

  Example 1:
  Input: prices = {1, 1, 0, 1, 1, 1}
  Output: 3
  Explanation: There are two consecutive 1’s and three consecutive 1’s in the array out of which maximum is 3.

  Example 2:
  Input: prices = {1, 0, 1, 1, 0, 1} 
  Output: 2
  Explanation: There are two consecutive 1's in the array. 

*/

const maximumConsecutiveOnes = (arr) => {
  // Initialize count to keep track of the current streak of consecutive 1s
  let count = 0;

  // Initialize maxCount to keep track of the maximum streak of consecutive 1s found so far
  let maxCount = 0;

  // Loop through each element in the array
  for (let index = 0; index < arr.length; index++) {
    // Check if the current element is 1
    if (arr[index] === 1) {
      // Increment the current streak count
      count = count + 1;
      // Use Math.max to ensure maxCount is the highest value between count and maxCount
      maxCount = Math.max(count, maxCount);
    } else {
      // Reset the current streak count if the current element is not 1
      count = 0;
    }
  }

  // Return the maximum streak of consecutive 1s found
  return maxCount;
};

// Example 1 Inputs
const arr1 = [1, 1, 0, 1, 1, 1];

// Example 2 Inputs
const arr2 = [1, 0, 1, 1, 0, 1];

console.log("\n ------------- Example 1: ------------- \n");
console.log("The maximum consecutive ones is: ", maximumConsecutiveOnes(arr1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The maximum consecutive ones is: ", maximumConsecutiveOnes(arr2));

// Time Complexity: O(N) since the solution involves only a single pass.
// Space Complexity: O(1) because no extra space is used.
