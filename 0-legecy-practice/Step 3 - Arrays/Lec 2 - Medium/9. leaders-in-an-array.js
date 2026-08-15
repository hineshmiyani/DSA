/**
 * @article  : https://takeuforward.org/data-structure/leaders-in-an-array/
 * @question : https://www.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1
 */

/*
  ✅ Problem Statement: 

  Given an array, print all the elements which are leaders. A Leader is an element that is greater than all of the elements on its right side in the array.

  Example 1:
  Input: arr = [4, 7, 1, 0]
  Output: 7 1 0
  Explanation: Rightmost element is always a leader. 7 and 1 are greater than the elements in their right side.

  Example 2:
  Input: arr = [10, 22, 12, 3, 0, 6]
  Output: 22 12 6
  Explanation: 6 is a leader. In addition to that, 12 is greater than all the elements in its right side (3, 0, 6), also 22 is  greater than 12, 3, 0, 6.

*/

// Brute-force Solution
const printLeadersSolution1 = (arr) => {
  // Initialize an empty array to store leader elements.
  const leaders = [];

  // Get the length of the input array.
  const n = arr.length;

  // Iterate through each element in the array.
  for (let i = 0; i < n; i++) {
    // Assume the current element is a leader.
    let isLeader = true;

    // Check all elements to the right of the current element.
    for (let j = i + 1; j < n; j++) {
      // If any element to the right is greater, the current element is not a leader.
      if (arr[i] < arr[j]) {
        isLeader = false;
        break; // Exit the inner loop early as we found a larger element.
      }
    }

    // If the current element is still considered a leader, add it to the leaders array.
    if (isLeader === true) {
      leaders.push(arr[i]);
    }
  }

  // Return the array of leader elements.
  return leaders;
};

// Optimal Solution
const printLeadersSolution2 = (arr) => {
  // Initialize an empty array to store leader elements.
  const leaders = [];

  // Get the length of the input array.
  const n = arr.length;

  // The rightmost element is always a leader, so add it to the leaders array.
  leaders.push(arr.at(-1));

  // Iterate through the array from the second last element to the first element.
  for (let index = n - 2; index >= 0; index--) {
    // If the current element is greater than the last element in the leaders array,
    // it means the current element is a leader.
    if (arr[index] > leaders.at(-1)) {
      // Add the current element to the leaders array.
      leaders.push(arr[index]);
    }
  }

  // The leaders array is built in reverse order, so reverse it before returning.
  return leaders.reverse();
};

// Example 1 Input
const arr1 = [4, 7, 1, 0];

// Example 2 Input
const arr2 = [10, 22, 12, 3, 0, 6];

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("Leaders array is: ", printLeadersSolution1(arr1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("Leaders array is: ", printLeadersSolution1(arr2));

// Time Complexity: O(N^2) { Since there are nested loops being used, at the worst case n^2 time would be consumed }.
// Space Complexity: O(N) { There is no extra space being used in this approach. But, a O(N) of space for ans array will be used in the worst case }.

console.log("\n\n ------------- Solution 2: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("Leaders array is: ", printLeadersSolution2(arr1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("Leaders array is: ", printLeadersSolution2(arr2));

// Time Complexity: O(N) { Since the array is traversed single time back to front, it will consume O(N) of time where N = size of the array }.
// Space Complexity: O(N) { There is no extra space being used in this approach. But, a O(N) of space for ans array will be used in the worst case }.
