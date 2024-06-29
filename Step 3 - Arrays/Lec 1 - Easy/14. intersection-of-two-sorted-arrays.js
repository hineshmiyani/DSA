/**
 * @article  : https://takeuforward.org/data-structure/intersection-of-two-sorted-arrays/
 * @question : https://www.geeksforgeeks.org/problems/union-of-two-sorted-arrays-1587115621/1
 */

/*
  ✅ Problem Statement: 

  Find the intersection of two sorted arrays. OR in other words, Given 2 sorted arrays, find all the elements which occur in both the arrays.

  Example 1:
  Input: A: [1 2 3 3 4 5 6], B: [3 3 5]
  Output: 3,3,5
  Explanation: We are given two arrays A and B. The elements present in both the arrays are 3,3 and 5.

  Example 2:
  Input: A: [1 2 3 3 4 5 6], B: [3 5]
  Output: 3,5
  Explanation: We are given two arrays A and B. The elements present in both the arrays are 3 and 5.

*/

// Brute-force Solution
const findIntersectionSolution1 = (arr1, arr2) => {
  // Create an array to keep track of visited elements in arr2
  // Initialize all elements to 0 (not visited)
  const visitedArr = Array(arr2.length).fill(0);

  // Initialize an empty array to store the intersection elements
  const intersection = [];

  // Loop through each element in arr1
  for (let i = 0; i < arr1.length; i++) {
    // For each element in arr1, loop through each element in arr2
    for (let j = 0; j < arr2.length; j++) {
      // Check if the current element in arr1 matches the current element in arr2
      // and if the element in arr2 has not been visited yet
      if (arr1[i] === arr2[j] && visitedArr[j] === 0) {
        // If a match is found, add the element to the intersection array
        intersection.push(arr1[i]);
        // Mark the element in arr2 as visited
        visitedArr[j] = 1;
        // Break out of the inner loop to avoid counting the same element in arr1 multiple times
        break;
      }

      // If the current element in arr2 is greater than the current element in arr1,
      // break out of the inner loop because arr2 is sorted and no further matches are possible
      if (arr2[j] > arr1[i]) {
        break;
      }
    }
  }

  // Return the array containing the intersection of arr1 and arr2
  return intersection;
};

// Optimal Solution
const findIntersectionSolution2 = (arr1, arr2) => {
  // Get the lengths of the two input arrays
  const n = arr1.length;
  const m = arr2.length;

  // Initialize two pointers for traversing the arrays
  let i = 0;
  let j = 0;

  // Initialize an empty array to store the intersection elements
  const intersection = [];

  // Loop until we reach the end of either array
  while (i < n && j < m) {
    // If the current element in arr1 is less than the current element in arr2,
    // move the pointer in arr1 forward
    if (arr1[i] < arr2[j]) {
      i = i + 1;
    }
    // If the current element in arr1 is greater than the current element in arr2,
    // move the pointer in arr2 forward
    else if (arr1[i] > arr2[j]) {
      j = j + 1;
    }
    // If the current elements in both arrays are equal,
    // add the element to the intersection array and move both pointers forward
    else {
      intersection.push(arr1[i]);
      i = i + 1;
      j = j + 1;
    }
  }

  // Return the array containing the intersection of arr1 and arr2
  return intersection;
};

// Example 1 Inputs
const arr1 = [1, 2, 3, 3, 4, 5, 6];
const arr2 = [3, 3, 5];

// Example 2 Inputs
const arr3 = [1, 2, 3, 3, 4, 5, 6];
const arr4 = [3, 5];

console.log("\n ------------- Solution 1: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "Intersection of the two sorted arrays: ",
  findIntersectionSolution1(arr1, arr2)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "Intersection of the two sorted arrays: ",
  findIntersectionSolution1(arr3, arr4)
);

// Time Complexity: O(n1 x n2) ~ O(n^2) { There are nested loops where the outer one loops n1 times and the inner one loops n2 times, where n1 = A.length and n2 = B.length }.
// Space Complexity: O(n) { Extra Space used for the visited and ans arrays }.

console.log("\n ------------- Solution 2: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "Intersection of the two sorted arrays: ",
  findIntersectionSolution2(arr1, arr2)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "Intersection of the two sorted arrays: ",
  findIntersectionSolution2(arr3, arr4)
);

// Time Complexity: O(n) { Since the elements are compared within the single pass for both the arrays this approach would take a linear time and in the worst case O(n1+n2) where n1 = A.length and n2 = B.length }.

// Space Complexity: O(1) { There is no extra space used in the two-pointers approach }.
