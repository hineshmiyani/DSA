/**
 * @article  : https://takeuforward.org/data-structure/linear-search-in-c/
 * @question :  https://www.geeksforgeeks.org/problems/who-will-win-1587115621/1
 */

/*
  ✅ Problem Statement: 

  You are given an array of integers, your task is to move all the zeros in the array to the end of the array and move non-negative integers to the front by maintaining their order.

  Example 1:
  Input: arr[]= [1 2 3 4 5], num = 3
  Output: 2
  Explanation: 3 is present in the 2nd index
  
  Example 2:
  Input: arr[]= [5 4 3 2 1], num = 5
  Output: 0
  Explanation: 5 is present in the 0th index

*/

const linearSearch = (arr, num) => {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === num) {
      return index;
    }
  }

  return -1;
};

console.log("\n ------------- Example 1: ------------- \n");
console.log("Index of 3 is: ", linearSearch([1, 2, 3, 4, 5], 3));
console.log("\n ------------- Example 2: ------------- \n");
console.log("Index of 5 is: ", linearSearch([5, 4, 3, 2, 1], 5));
