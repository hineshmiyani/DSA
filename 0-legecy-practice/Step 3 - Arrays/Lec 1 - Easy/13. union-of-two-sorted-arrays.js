/**
 * @article  : https://takeuforward.org/data-structure/union-of-two-sorted-arrays/
 * @question : https://www.geeksforgeeks.org/problems/union-of-two-sorted-arrays-1587115621/1
 */

/*
  ✅ Problem Statement: 

  Given two sorted arrays, arr1, and arr2 of size n and m. Find the union of two sorted arrays. 
  The union of two arrays can be defined as the common and distinct elements in the two arrays. 
  Elements in the union should be in ascending order.

  Example 1:
  Input: n = 5,m = 5. arr1[] = {1,2,3,4,5} arr2[] = {2,3,4,4,5}
  Output: {1,2,3,4,5}
  Explanation: 
  Common Elements in arr1 and arr2  are:  2,3,4,5
  Distinct Elements in arr1 are : 1
  Distinct Elements in arr2 are : No distinct elements.
  Union of arr1 and arr2 is {1,2,3,4,5} 

  Example 2:

  Input: n = 10,m = 7. arr1[] = {1,2,3,4,5,6,7,8,9,10} arr2[] = {2,3,4,4,5,11,12}
  Output: {1,2,3,4,5,6,7,8,9,10,11,12}
  Explanation:
  Common Elements in arr1 and arr2  are:  2,3,4,5
  Distinct Elements in arr1 are : 1,6,7,8,9,10
  Distinct Elements in arr2 are : 11,12
  Union of arr1 and arr2 is {1,2,3,4,5,6,7,8,9,10,11,12} 

*/

// Brute-force Solution
const findUnionSolution1 = (arr1, arr2) => {
  // Create a new Set to store unique elements from both arrays
  const unionSet = new Set();

  // Create an empty array to store the final union of elements
  const unionArr = [];

  // Iterate over the first array and add each element to the Set
  for (let index = 0; index < arr1.length; index++) {
    unionSet.add(arr1[index]);
  }

  // Iterate over the second array and add each element to the Set
  // Since Set only stores unique elements, duplicates will be automatically handled
  for (let index = 0; index < arr2.length; index++) {
    unionSet.add(arr2[index]);
  }

  // Iterate over the Set and push each element to the unionArr
  // This converts the Set back to an array
  for (const num of unionSet) {
    unionArr.push(num);
  }

  // Return the array containing the union of both input arrays
  return unionArr;
};

// Optimal Solution
const findUnionSolution2 = (arr1, arr2) => {
  // Get the lengths of the two input arrays
  const n = arr1.length;
  const m = arr2.length;

  // Initialize pointers for both arrays
  let i = 0;
  let j = 0;

  // Initialize an empty array to store the union of the two arrays
  const unionArr = [];

  // Traverse both arrays simultaneously
  while (i < n && j < m) {
    // If the current element of arr1 is smaller than the current element of arr2
    if (arr1[i] < arr2[j]) {
      // If unionArr is empty or the last element in unionArr is not equal to arr1[i], add arr1[i] to unionArr
      if (unionArr.length === 0 || arr1[i] !== unionArr.at(-1)) {
        unionArr.push(arr1[i]);
      }
      // Move the pointer of arr1 forward
      i = i + 1;
    } else {
      // If unionArr is empty or the last element in unionArr is not equal to arr2[j], add arr2[j] to unionArr
      if (unionArr.length === 0 || arr2[j] !== unionArr.at(-1)) {
        unionArr.push(arr2[j]);
      }
      // Move the pointer of arr2 forward
      j = j + 1;
    }
  }

  // If there are remaining elements in arr1, add them to unionArr
  while (i < n) {
    // Only add the element if it is not a duplicate of the last element in unionArr
    if (arr1[i] !== unionArr.at(-1)) {
      unionArr.push(arr1[i]);
    }
    i = i + 1;
  }

  // If there are remaining elements in arr2, add them to unionArr
  while (j < m) {
    // Only add the element if it is not a duplicate of the last element in unionArr
    if (arr2[j] !== unionArr.at(-1)) {
      unionArr.push(arr2[j]);
    }
    j = j + 1;
  }

  // Return the array containing the union of both input arrays
  return unionArr;
};
// Example 1 Inputs
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 3, 4, 4, 5];

// Example 2 Inputs
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr4 = [2, 3, 4, 4, 5, 11, 12];

console.log("\n ------------- Solution 1: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log("Union of the two sorted arrays: ", findUnionSolution1(arr1, arr2));
console.log("\n ------------- Example 2: ------------- \n");
console.log("Union of the two sorted arrays: ", findUnionSolution1(arr3, arr4));

// Time Complexity : O( (m+n)log(m+n) ). Inserting an element in a set takes logN time, where N is no of elements in the set. At max set can store m+n elements {when there are no common elements and elements in arr,arr2 are distinct}.
// So Inserting m+n th element takes log(m+n) time. Upon approximation across inserting all elements in worst, it would take O((m+n)log(m+n) time.

// Using HashSet also takes the same time, On average insertion in unordered_set takes O(1) time but sorting the union vector takes O((m+n)log(m+n))  time. Because at max union vector can have m+n elements.

// Space Complexity : O(m+n) {If Space of Union ArrayList is considered}
// O(1) {If Space of union ArrayList is not considered}

console.log("\n ------------- Solution 2: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log("Union of the two sorted arrays: ", findUnionSolution2(arr1, arr2));
console.log("\n ------------- Example 2: ------------- \n");
console.log("Union of the two sorted arrays: ", findUnionSolution2(arr3, arr4));

// Time Complexity: O(m+n), Because at max i runs for n times and j runs for m times. When there are no common elements in arr1 and arr2 and all elements in arr1, arr2 are distinct.

// Space Complexity : O(m+n) {If Space of Union ArrayList is considered}
// O(1) {If Space of union ArrayList is not considered}
