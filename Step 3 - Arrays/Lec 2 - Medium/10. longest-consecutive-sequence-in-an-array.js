/**
 * @article  : https://takeuforward.org/data-structure/longest-consecutive-sequence-in-an-array/
 * @question : https://leetcode.com/problems/longest-consecutive-sequence/description/
 */

/*
  ✅ Problem Statement: 

  You are given an array of ‘N’ integers. You need to find the length of the longest sequence which contains the consecutive elements.

  Example 1:
  Input: [100, 200, 1, 3, 2, 4]
  Output: 4
  Explanation: The longest consecutive subsequence is 1, 2, 3, and 4.

  Example 2:
  Input: [3, 8, 5, 7, 6]
  Output: 4
  Explanation: The longest consecutive subsequence is 5, 6, 7, and 8.

*/

// Brute-force Solution
const linearSearch = (arr, element) => {
  // Iterate through each element in the array
  for (let j = 0; j < arr.length; j++) {
    // If the current element matches the target element, return true
    if (element === arr[j]) {
      return true;
    }
  }
  // If the element is not found in the array, return false
  return false;
};

const longestSuccessiveElementsSolution1 = (arr) => {
  // Initialize the variable to store the length of the longest consecutive sequence found
  let longest = 1;

  // Iterate through each element in the array
  for (let i = 0; i < arr.length; i++) {
    // Initialize the count of the current consecutive sequence
    let count = 1;

    // Start with the next element in the sequence
    let element = arr[i] + count;

    // Continue to check for the next consecutive elements in the sequence
    while (linearSearch(arr, element)) {
      // Increment the count for each consecutive element found
      count = count + 1;
      // Move to the next element in the sequence
      element = element + 1;
    }

    // Update the longest sequence length if the current sequence is longer
    longest = Math.max(count, longest);
  }

  // Return the length of the longest consecutive sequence found
  return longest;
};

// Better Solution:
const longestSuccessiveElementsSolution2 = (arr) => {
  // If the input array is empty, return 0 as there are no elements to form a sequence
  if (arr.length === 0) return 0;

  // Initialize the variable to store the length of the longest consecutive sequence found
  let longest = 1;
  // Initialize the count of the current consecutive sequence
  let currentCount = 0;
  // Initialize the last minimum element to the smallest possible integer value
  let lastMinElement = Number.MIN_SAFE_INTEGER;

  // Sort the array in ascending order to bring consecutive elements next to each other
  arr.sort((a, b) => a - b);

  // Iterate through each element in the sorted array
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];

    // Check if the current element is consecutive to the last minimum element
    if (element - 1 === lastMinElement) {
      // If it is, increment the current consecutive sequence count
      currentCount = currentCount + 1;
      // Update the last minimum element to the current element
      lastMinElement = element;
    } else if (arr[index] !== lastMinElement) {
      // If the current element is not consecutive and not a duplicate
      // Reset the current consecutive sequence count to 1
      currentCount = 1;
      // Update the last minimum element to the current element
      lastMinElement = element;
    }

    // Update the longest sequence length if the current sequence is longer
    longest = Math.max(longest, currentCount);
  }

  // Return the length of the longest consecutive sequence found
  return longest;
};

// Optimal Solution
const longestSuccessiveElementsSolution3 = (arr) => {
  // If the input array is empty, return 0 as there are no elements to form a sequence
  if (arr.length === 0) return 0;

  // Create a set from the array to remove duplicates and allow O(1) lookups
  const numbersSet = new Set(arr);
  // Initialize the variable to store the length of the longest consecutive sequence found
  let longest = 1;

  // Iterate through each unique element in the set
  for (let iterator of numbersSet) {
    // Check if the current element is the start of a new sequence
    // This is true if the previous element (iterator - 1) is not in the set
    if (!numbersSet.has(iterator - 1)) {
      // Initialize the count of the current consecutive sequence
      let count = 1;
      // Start with the next element in the sequence
      let element = iterator + count;

      // Continue to check for the next consecutive elements in the sequence
      while (numbersSet.has(element)) {
        // Increment the count for each consecutive element found
        count = count + 1;
        // Move to the next element in the sequence
        element = element + 1;
      }

      // Update the longest sequence length if the current sequence is longer
      longest = Math.max(longest, count);
    }
  }

  // Return the length of the longest consecutive sequence found
  return longest;
};
// Example 1 Input
const arr1 = [100, 200, 1, 3, 2, 4];

// Example 2 Input
const arr2 = [3, 8, 5, 7, 6];

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The longest consecutive sequence is: ",
  longestSuccessiveElementsSolution1(arr1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The longest consecutive sequence is: ",
  longestSuccessiveElementsSolution1(arr2)
);

// Time Complexity: O(N2), N = size of the given array.
// Reason: We are using nested loops each running for approximately N times.

// Space Complexity: O(1), as we are not using any extra space to solve this problem.

console.log("\n\n ------------- Solution 2: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The longest consecutive sequence is: ",
  longestSuccessiveElementsSolution2(arr1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The longest consecutive sequence is: ",
  longestSuccessiveElementsSolution2(arr2)
);

// Time Complexity: O(NlogN) + O(N), N = size of the given array.
// Reason: O(NlogN) for sorting the array. To find the longest sequence, we are using a loop that results in O(N).

// Space Complexity: O(1), as we are not using any extra space to solve this problem.

console.log("\n\n ------------- Solution 3: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The longest consecutive sequence is: ",
  longestSuccessiveElementsSolution3(arr1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The longest consecutive sequence is: ",
  longestSuccessiveElementsSolution3(arr2)
);

// Time Complexity: O(N) + O(2*N) ~ O(3*N), where N = size of the array.
// Reason: O(N) for putting all the elements into the set data structure. After that for every starting element, we are finding the consecutive elements. Though we are using nested loops, the set will be traversed at most twice in the worst case. So, the time complexity is O(2*N) instead of O(N2).

// Space Complexity: O(N), as we are using the set data structure to solve this problem.

// Note (Only for C++): The time complexity is computed under the assumption that we are using unordered_set and it is taking O(1) for the set operations.
// If we consider the worst case the set operations will take O(N) in that case and the total time complexity will be approximately O(N2).
// And if we use the set instead of unordered_set, the time complexity for the set operations will be O(logN) and the total time complexity will be O(NlogN).
