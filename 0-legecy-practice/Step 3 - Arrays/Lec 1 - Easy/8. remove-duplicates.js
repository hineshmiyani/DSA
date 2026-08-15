/**
 * @article  : https://takeuforward.org/data-structure/remove-duplicates-in-place-from-sorted-array/
 * @question : https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
 */

/*
  ✅ Problem Statement: 

  Given an integer array sorted in non-decreasing order, remove the duplicates in place such that each unique element appears only once. The relative order of the elements should be kept the same.

  Example 1:
  Input: arr[1,1,2,2,2,3,3]
  Output: arr[1,2,3,_,_,_,_]
  Explanation: Total number of unique elements are 3, i.e[1,2,3] and Therefore return 3 after assigning [1,2,3] in the beginning of the array.
  
  Example 2:
  Input: arr[1,1,1,2,2,3,3,3,3,4,4]
  Output: arr[1,2,3,4,_,_,_,_,_,_,_]
  Explanation: Total number of unique elements are 4, i.e[1,2,3,4] and Therefore return 4 after assigning [1,2,3,4] in the beginning of the array.

*/

// Brute-force Solution
const removeDuplicatesSolution1 = (arr) => {
  const uniqueElementsSet = new Set(arr);

  const uniqueElementsArr = [...uniqueElementsSet];

  for (let index = 0; index < uniqueElementsArr.length; index++) {
    arr[index] = uniqueElementsArr[index];
  }

  return arr.slice(0, uniqueElementsArr.length);
};

// Optimal Solution
const removeDuplicatesSolution2 = (arr) => {
  // Initialize a pointer `k` to track the position of the last unique element
  let k = 0;

  // Iterate through the array starting from the second element
  for (let index = 1; index < arr.length; index++) {
    // If the current element is different from the last unique element
    if (arr[k] !== arr[index]) {
      // Move the pointer `k` to the next position and update the array at that position with the current element
      arr[k + 1] = arr[index];
      // Increment the pointer `k`
      k++;
    }
  }

  // Return the array sliced up to the position of the last unique element + 1
  return arr.slice(0, k + 1);
};

console.log("\n ------------- Solution 1: ------------- \n");

console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The result of removing duplicates from [1, 1, 2, 2, 2, 3, 3] is: ",
  removeDuplicatesSolution1([1, 1, 2, 2, 2, 3, 3])
);

console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The result of removing duplicates from [1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4] is: ",
  removeDuplicatesSolution1([1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4])
);

console.log("\n ------------- Solution 2: ------------- \n");

console.log(
  "The result of removing duplicates from [1, 1, 2, 2, 2, 3, 3] is: ",
  removeDuplicatesSolution2([1, 1, 2, 2, 2, 3, 3])
);

console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The result of removing duplicates from [1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4] is: ",
  removeDuplicatesSolution2([1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4])
);
