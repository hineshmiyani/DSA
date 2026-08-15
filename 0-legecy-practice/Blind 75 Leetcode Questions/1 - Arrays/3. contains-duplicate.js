/**
 * @article  : https://takeuforward.org/data-structure/contains-duplicate-check-if-a-value-appears-atleast-twice/
 * @article  : https://www.designgurus.io/viewer/document/grokking-the-coding-interview/63d906094c5ef6536969a376
 * @question : https://leetcode.com/problems/contains-duplicate/
 */

/*
  ✅ Problem Statement: 

  Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

  Example 1:
  Input: nums = [1,2,3,1]
  Output: true

  Example 2:
  Input: nums = [1,2,3,4]
  Output: false

  Example 3:
  Input: nums = [1,1,1,3,3,4,3,2,4,2]
  Output: true

*/

// Brute-force Solution
/**
 * Function to check if an array contains any duplicates.
 * This implementation uses a nested loop to compare each element with every other element.
 */
const containsDuplicateSolution1 = (arr) => {
  // Iterate through each element in the array
  for (let i = 0; i < arr.length; i++) {
    // For the current element, iterate through the subsequent elements
    for (let j = i + 1; j < arr.length; j++) {
      // If a duplicate is found, return true
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }

  // If no duplicates are found, return false
  return false;
};

// Optimal Solution - 1
/**
 * Function to check if an array contains any duplicates.
 * This implementation sorts the array first and then checks for consecutive duplicate elements.
 */
const containsDuplicateSolution2 = (arr) => {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Iterate through the sorted array and check for consecutive duplicates
  for (let index = 0; index < arr.length - 1; index++) {
    // If a duplicate is found, return true
    if (arr[index] === arr[index + 1]) {
      return true;
    }
  }

  // If no duplicates are found, return false
  return false;
};

// Optimal Solution - 2
/**
 * Function to check if an array contains any duplicates.
 * This implementation uses a Set to track unique numbers.
 */
const containsDuplicateSolution3 = (arr) => {
  // Initialize a new Set to store unique numbers from the array
  const numbersSet = new Set();

  // Iterate through each number in the array
  for (const number of arr) {
    // Check if the number is already in the Set
    if (numbersSet.has(number)) {
      // If it is, return true indicating a duplicate is found
      return true;
    } else {
      // If it is not, add the number to the Set
      numbersSet.add(number);
    }
  }

  // If no duplicates are found, return false
  return false;
};

// Optimal Solution - 3
/**
 * Function to check if an array contains any duplicates.
 *
 * This function leverages the properties of a Set to determine if there are any duplicate
 * elements in the input array. A Set is a collection of unique values, so if the size of the Set
 * created from the array is less than the length of the array, it means there were duplicate
 * elements in the array.
 */
const containsDuplicateSolution4 = (arr) => {
  // Create a new Set from the array. Sets automatically remove duplicate values.
  // Compare the size of the Set with the length of the array.
  // If the Set size is less than the array length, it means there were duplicates in the array.
  return new Set(arr).size < arr.length;
};

// Example 1 Input
const arr1 = [1, 2, 3, 1];

// Example 2 Input
const arr2 = [1, 2, 3, 4];

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("Is contains duplicates? : ", containsDuplicateSolution1(arr1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("Is contains duplicates? : ", containsDuplicateSolution1(arr2));

// Time Complexity:  O(N^2), Because we are traversing the whole array again and again for every integer.
// Space Complexity: O(1), Since, we are not using any extra space.

console.log("\n\n ------------- Solution 2: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("Is contains duplicates? : ", containsDuplicateSolution2(arr1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("Is contains duplicates? : ", containsDuplicateSolution2(arr2));

// Time Complexity:  O(N*logN), Sorting takes N*logN. Times where N is the length of the array
// Space Complexity: O(1), Since we are not using any extra space. If we are not counting extra space taken by sorting.

console.log("\n\n ------------- Solution 3: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("Is contains duplicates? : ", containsDuplicateSolution3(arr1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("Is contains duplicates? : ", containsDuplicateSolution3(arr2));

// Time Complexity:  O(N), where N is the length of the array. As searching in set takes O(1)
// Space Complexity: O(N), Where N is the number of elements stored in the set

console.log("\n\n ------------- Solution 4: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("Is contains duplicates? : ", containsDuplicateSolution4(arr1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("Is contains duplicates? : ", containsDuplicateSolution4(arr2));

// Time Complexity:  O(N), where N is the length of the array. As searching in set takes O(1)
// Space Complexity: O(N), Where N is the number of elements stored in the set
