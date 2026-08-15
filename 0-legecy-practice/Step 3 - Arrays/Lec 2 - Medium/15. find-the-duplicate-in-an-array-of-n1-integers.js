/**
 * @article  : https://takeuforward.org/data-structure/find-the-duplicate-in-an-array-of-n1-integers/
 * @question : https://leetcode.com/problems/find-the-duplicate-number/
 */

/*
  ✅ Problem Statement: 

  Given an array of N + 1 size, where each element is between 1 and N. Assuming there is only one duplicate number, your task is to find the duplicate number.

  Example 1: 
  Input: arr=[1,3,4,2,2]
  Output: 2
  Explanation: Since 2 is the duplicate number the answer will be 2.

  Example 2:
  Input: [3,1,3,4,2]
  Output:3
  Explanation: Since 3 is the duplicate number the answer will be 3.

*/

// Brute-force Solution
/**
 * This implementation sorts the array first and then checks for consecutive duplicates.
 */
const findDuplicateSolution1 = (arr) => {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Iterate through the sorted array to find consecutive duplicates
  for (let index = 0; index < arr.length - 1; index++) {
    // If a duplicate is found, return it
    if (arr[index] === arr[index + 1]) {
      return arr[index];
    }
  }

  // If no duplicate is found, return -1
  return -1;
};

// Better Solution
/**
 *  This solution uses a Set to track seen numbers.
 */
const findDuplicateSolution2 = (arr) => {
  // Initialize a Set to keep track of numbers we have seen so far.
  const numsSet = new Set();

  // Iterate through each element in the array.
  for (let index = 0; index < arr.length; index++) {
    // Check if the current number is already in the Set.
    if (!numsSet.has(arr[index])) {
      // If not, add the current number to the Set.
      numsSet.add(arr[index]);
    } else {
      // If the number is already in the Set, it means we have found the duplicate.
      return arr[index];
    }
  }

  // If no duplicate is found, return -1.
  return -1;
};

// Optimal Solution
/*
 * This implementation uses Floyd's Tortoise and Hare (Cycle Detection) algorithm.
 * Here's the step-by-step approach:
 * 1. Initialize two pointers: The "tortoise" and the "hare".
 * 2. Move the tortoise and hare: Move the tortoise by one step and the hare by two steps until they meet.
 * 3. Find the entrance to the cycle: Reset one pointer to the start of the array and move both pointers one step at a time until they meet again. The meeting point is the duplicate number.
 */
const findDuplicateSolution3 = (arr) => {
  // Initialize the tortoise and hare pointers to the first element of the array.
  let tortoise = arr[0]; // Tortoise moves one step at a time.
  let hare = arr[0]; // Hare moves two steps at a time.

  // Phase 1: Finding the intersection point of the two runners.
  do {
    tortoise = arr[tortoise]; // Move tortoise one step.
    hare = arr[arr[hare]]; // Move hare two steps.
  } while (tortoise !== hare); // Continue until they meet.

  // Phase 2: Finding the entrance to the cycle.
  tortoise = arr[0]; // Reset tortoise to the start of the array.

  // Move both pointers at the same speed until they meet at the entrance of the cycle.
  while (tortoise !== hare) {
    tortoise = arr[tortoise]; // Move tortoise one step.
    hare = arr[hare]; // Move hare one step.
  }

  // The point where they meet is the duplicate number.
  return tortoise;
};

// Example 1 Input
const arr1 = [1, 3, 4, 2, 2];

// Example 2 Input
const arr2 = [3, 1, 3, 4, 2];

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The duplicate element is: ", findDuplicateSolution1(arr1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The duplicate element is: ", findDuplicateSolution1(arr2));

// Time Complexity:O(N*log(n) + N)
// Reason: N*log(n) for sorting the array and O(N) for traversing through the array and checking if adjacent elements are equal or not. But this will distort the array.
// Space Complexity:O(1)

console.log("\n\n ------------- Solution 2: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The duplicate element is: ", findDuplicateSolution2(arr1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The duplicate element is: ", findDuplicateSolution2(arr2));

// Time Complexity: O(N), as we are traversing through the array only once.
// Space Complexity: O(N), as we are using extra space for frequency array.

console.log("\n\n ------------- Solution 3: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The duplicate element is: ", findDuplicateSolution3(arr1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The duplicate element is: ", findDuplicateSolution3(arr2));

// Time complexity: O(N). Since we traversed through the array only once.
// Space complexity: O(1).
