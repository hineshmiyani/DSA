/**
 * @article  : https://takeuforward.org/data-structure/check-if-an-array-is-sorted/
 */

/*
  ✅ Problem Statement: 

  Given an array of size n, write a program to check if the given array is sorted in (ascending / Increasing / Non-decreasing) order or not. If the array is sorted then return True, Else return False.

  Example 1:
  Input: N = 5, array[] = {1,2,3,4,5}
  Output: True.
  Explanation: The given array is sorted i.e Every element in the array is smaller than or equals to its next values, So the answer is True.
  
  Example 2:
  Input: N = 5, array[] = {5,4,6,7,8}
  Output: False.
  Explanation: The given array is Not sorted i.e Every element in the array is not smaller than or equal to its next values, So the answer is False. 
  Here element 5 is not smaller than or equal to its future elements.

*/

const isArraySorted = (arr) => {
  for (let index = 1; index < arr.length; index++) {
    if (!(arr[index] >= arr[index - 1])) {
      return false;
    }
  }

  return true;
};

console.log("\n ------------- Example 1: ------------- \n");
console.log("Is [1, 2, 3, 4, 5] sorted? : ", isArraySorted([1, 2, 3, 4, 5]));

console.log("\n ------------- Example 2: ------------- \n");
console.log("Is [5, 4, 6, 7, 8] sorted? : ", isArraySorted([5, 4, 6, 7, 8]));
