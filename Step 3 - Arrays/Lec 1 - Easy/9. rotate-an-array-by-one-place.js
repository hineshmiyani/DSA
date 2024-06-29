/**
 * @article  : https://takeuforward.org/data-structure/left-rotate-the-array-by-one/
 * @question : https://leetcode.com/problems/rotate-array/
 */

/*
  ✅ Problem Statement: 

  Given an array of N integers, left rotate the array by one place.

  Example 1:
  Input: N = 5, array[] = {1,2,3,4,5}
  Output: 2,3,4,5,1
  Explanation: Since all the elements in array will be shifted toward left by one so ‘2’ will now become the first index and and ‘1’ which was present at first index will be shifted at last.
  
  Example 2:
  Input: N = 1, array[] = {3}
  Output: 3
  Explanation: Here only element is present and so the element at first index will be shifted to last index which is also by the way the first index.

*/

// Optimal Solution
const rotateArray = (arr, shiftPlace) => {
  const firstEle = arr.at(0);

  for (let index = 0; index < arr.length - 1; index++) {
    arr[index] = arr[index + shiftPlace];
  }

  arr[arr.length - 1] = firstEle;

  return arr;
};

console.log("\n ------------- Example 1: ------------- \n");
console.log("Array rotated by one place: ", rotateArray([1, 2, 3, 4, 5], 1));

console.log("\n ------------- Example 2: ------------- \n");
console.log("Array rotated by one place: ", rotateArray([3], 1));

// Time Complexity: O(N)
// Space Complexity: O(1)
