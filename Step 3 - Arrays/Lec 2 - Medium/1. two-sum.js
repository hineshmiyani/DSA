/**
 * @article  : https://takeuforward.org/data-structure/two-sum-check-if-a-pair-with-given-sum-exists-in-array/
 * @question : https://leetcode.com/problems/two-sum/description/
 */

/*
  ✅ Problem Statement: 

  Given an array of integers arr[] and an integer target. 

  1st variant: Return YES if there exist two numbers such that their sum is equal to the target. Otherwise, return NO.

  2nd variant: Return indices of the two numbers such that their sum is equal to the target. Otherwise, we will return {-1, -1}.

  Example 1:
  Input Format: N = 5, arr[] = {2,6,5,8,11}, target = 14
  Result: YES (for 1st variant), [1, 3] (for 2nd variant)
  Explanation: arr[1] + arr[3] = 14. So, the answer is “YES” for the first variant and [1, 3] for 2nd variant.

  Example 2:
  Input Format: N = 5, arr[] = {2,6,5,8,11}, target = 15
  Result: NO (for 1st variant), [-1, -1] (for 2nd variant)
  Explanation: There exist no such two numbers whose sum is equal to the target.

*/

// Brute-force Solution
const twoSumSolution1 = (arr, target) => {
  // Iterate through each element in the array
  for (let i = 0; i < arr.length; i++) {
    // Calculate the difference needed to reach the target sum
    const difference = target - arr[i];

    // Iterate through the remaining elements in the array
    for (let j = i + 1; j < arr.length; j++) {
      // Check if the current element matches the required difference
      if (arr[j] === difference) {
        // If a match is found, return the indices of the two elements
        return [i, j];
      }
    }
  }

  // If no pair is found that adds up to the target, return [-1, -1]
  return [-1, -1];
};

// Better Solution
// Optimal Solution for Variant 2
const twoSumSolution2 = (arr, target) => {
  // Create a new Map to store the elements and their indices
  const hashMap = new Map();

  // Iterate through each element in the array
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index]; // Current element

    // Calculate the difference needed to reach the target sum
    const difference = target - element;

    // Check if the difference exists in the hashMap
    if (hashMap.has(difference)) {
      // If it exists, return the indices of the two elements
      return [hashMap.get(difference), index];
    }

    // Store the current element and its index in the hashMap
    hashMap.set(element, index);
  }

  // If no pair is found that adds up to the target, return [-1, -1]
  return [-1, -1];
};

// Optimal Solution for Variant 1
const twoSumSolution3 = (arr, target) => {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Initialize two pointers, one at the beginning (left) and one at the end (right) of the array
  let left = 0;
  let right = arr.length - 1;

  // Loop until the two pointers meet
  while (left < right) {
    // Calculate the sum of the elements at the two pointers
    const sum = arr[left] + arr[right];

    // If the sum is equal to the target, return "YES"
    if (sum === target) {
      return "YES";
    }
    // If the sum is less than the target, move the left pointer to the right to increase the sum
    else if (sum < target) {
      left = left + 1;
    }
    // If the sum is greater than the target, move the right pointer to the left to decrease the sum
    else if (sum > target) {
      right = right - 1;
    }
  }

  // If no pair is found that adds up to the target, return "NO"
  return "NO";
};

// Example 1 Input
const arr1 = [2, 6, 5, 8, 11];
const target1 = 14;

// Example 2 Input
const arr2 = [2, 3, 5, 1, 9];
const target2 = 15;

console.log("\n ------------- Solution 1: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "This is the answer for variant 1: ",
  twoSumSolution1(arr1, target1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "This is the answer for variant 1: ",
  twoSumSolution1(arr2, target2)
);

// Time Complexity: O(n^2)
// The time complexity of the twoSumSolution1 function is (O(n^2)), where (n) is the length of the input array arr. This is because:
// The outer loop runs (n) times.
// For each iteration of the outer loop, the inner loop runs up to (n-1) times in the worst case.
// Therefore, the total number of iterations is approximately (n \times (n-1) / 2), which simplifies to (O(n^2)).

// Space Complexity: O(1)
// The space complexity of the twoSumSolution1 function is (O(1)). This is because:
// The function uses a constant amount of extra space regardless of the input size.
// Variables such as difference, i, and j do not depend on the size of the input array.

console.log("\n ------------- Solution 2: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "This is the answer for variant 1: ",
  twoSumSolution2(arr1, target1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "This is the answer for variant 1: ",
  twoSumSolution2(arr2, target2)
);

// Time Complexity: O(n)
// The time complexity of the twoSumSolution2 function is (O(n)), where (n) is the length of the input array arr. This is because:
// The function iterates through each element of the array exactly once using a single for loop, which takes (O(n)) time.
// The operations inside the loop (checking if an element exists in the hashMap and setting a new element in the hashMap) are (O(1)) on average due to the properties of the Map data structure.
// Therefore, the overall time complexity is (O(n)).

// Space Complexity: O(n)
// The space complexity of the twoSumSolution2 function is also (O(n)). This is because:
// The function uses a Map to store the elements of the array and their indices. In the worst case, all elements of the array will be stored in the Map, which requires (O(n)) space.
// Therefore, the overall the space complexity is (O(n)).

console.log("\n ------------- Solution 3: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "This is the answer for variant 2: ",
  twoSumSolution3(arr1, target1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "This is the answer for variant 2: ",
  twoSumSolution3(arr2, target2)
);

// Time Complexity: O(n * log n)
// Sorting the array: The array is sorted initially, which takes (O(n * log n)) time, where (n) is the length of the array.
// Two-pointer traversal: After sorting, the function uses a two-pointer technique to find the pair, which takes (O(n)) time.
// Therefore, the overall time complexity is (O(n * log n)).

// Space Complexity: O(1)
// Sorting the array: Sorting the array in place does not require additional space beyond the input array.
// Two-pointer traversal: The two-pointer technique uses a constant amount of extra space, (O(1)).
// Therefore, the overall space complexity is (O(1)).
