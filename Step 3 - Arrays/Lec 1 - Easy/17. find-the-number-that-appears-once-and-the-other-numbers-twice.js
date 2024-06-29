/**
 * @article  : https://takeuforward.org/arrays/find-the-number-that-appears-once-and-the-other-numbers-twice/
 * @question : https://leetcode.com/problems/single-number/
 */

/*
  ✅ Problem Statement: 

  Given a non-empty array of integers arr, every element appears twice except for one. Find that single one.

  Example 1:
  Input Format: arr[] = {2,2,1}
  Result: 1
  Explanation: In this array, only the element 1 appear once and so it is the answer.

  Example 2:
  Input Format: arr[] = {4,1,2,1,2}
  Result: 4
  Explanation: In this array, only element 4 appear once and the other elements appear twice. So, 4 is the answer

*/

// Brute-force Solution
const findSingleNumberSolution1 = (arr) => {
  // Iterate through each element in the array
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i]; // Current number to check

    let count = 0; // Initialize count of current number

    // Iterate through the array again to count occurrences of the current number
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === num) {
        count = count + 1; // Increment count if the number matches
      }
    }

    // If the count of the current number is 1, it is the single number
    if (count === 1) {
      return num; // Return the single number
    }
  }

  // If no single number is found, return -1 (though the problem guarantees there is one)
  return -1;
};

// Better Solution
const findSingleNumberSolution2 = (arr) => {
  // Create a Map to store the count of each number in the array
  const numberCountMap = new Map();

  // Iterate through each element in the array
  for (let index = 0; index < arr.length; index++) {
    // If the number is already in the Map, increment its count
    if (numberCountMap.has(arr[index])) {
      numberCountMap.set(arr[index], numberCountMap.get(arr[index]) + 1);
    } else {
      // If the number is not in the Map, add it with a count of 1
      numberCountMap.set(arr[index], 1);
    }
  }

  // Iterate through the Map to find the number with a count of 1
  for (const [key, value] of numberCountMap) {
    // If the count of the current number is 1, return it as the single number
    if (value === 1) {
      return key;
    }
  }

  // If no single number is found, return -1 (though the problem guarantees there is one)
  return -1;
};

// Optimal Solution
const findSingleNumberSolution3 = (arr) => {
  // Initialize a variable to hold the XOR result. Starting with 0 because XOR with 0 returns the same number.
  let xorResult = 0;

  // Iterate through each element in the array
  for (let index = 0; index < arr.length; index++) {
    // Apply XOR between the current result and the current array element.
    // XOR of two same numbers is 0, and XOR of a number with 0 is the number itself.
    // This property helps in canceling out the numbers that appear twice.
    xorResult = xorResult ^ arr[index];
  }

  // After processing all elements, xorResult will hold the single number that appears only once.
  return xorResult;
};

// Example 1 Input
const arr1 = [2, 2, 1];

// Example 2 Input
const arr2 = [4, 1, 2, 1, 2];

console.log("\n ------------- Solution 1: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The number that appears only once is: ",
  findSingleNumberSolution1(arr1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The number that appears only once is: ",
  findSingleNumberSolution1(arr2)
);

// Time Complexity: O(N^2), where N = size of the given array.
// Reason: For every element, we are performing a linear search to count its occurrence. The linear search takes O(N) time complexity. And there are N elements in the array. So, the total time complexity will be O(N2).

// Space Complexity: O(1) as we are not using any extra space.

console.log("\n ------------- Solution 2: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The number that appears only once is: ",
  findSingleNumberSolution2(arr1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The number that appears only once is: ",
  findSingleNumberSolution2(arr2)
);

// Time Complexity: O(N) + O(M), where M = size of the map i.e. M = (N/2)+1. N = size of the array.
// Reason: We are inserting N elements in the map data structure and insertion takes O(1) time(where M = size of the map). So this results in the first term O(N). The second term is to iterate the map and search the single element. In Javascript, HashMap generally takes O(1) time complexity for insertion and search. In that case, the time complexity will be O(N) + O(M).

// Note: The time complexity will be changed depending on which map data structure we are using. If we use unordered_map in C++, the time complexity will be O(N) for the best and average case instead of O(N*logM). But in the worst case(which rarely happens), it will be nearly O(N2).

// Space Complexity: O(M) as we are using a map data structure. Here M = size of the map i.e. M = (N/2)+1.

console.log("\n ------------- Solution 3: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The number that appears only once is: ",
  findSingleNumberSolution3(arr1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The number that appears only once is: ",
  findSingleNumberSolution3(arr2)
);

// Time Complexity: O(N), where N = size of the array.
// Reason: We are iterating the array only once.

// Space Complexity: O(1) as we are not using any extra space.
