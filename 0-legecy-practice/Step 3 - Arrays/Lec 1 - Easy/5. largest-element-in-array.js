/**
 * @article  : https://takeuforward.org/data-structure/find-the-largest-element-in-an-array/
 * @question : https://www.geeksforgeeks.org/problems/largest-element-in-array4009/0
 */

/*
  ✅ Problem Statement: 

  Given an array, we have to find the largest element in the array.

  Example 1:
  Input: arr[] = {2,5,1,3,0};
  Output: 5
  Explanation:5 is the largest element in the array. 
  
  Example2:
  Input: arr[] = {8,10,5,7,9};
  Output: 10
  Explanation: 10 is the largest element in the array. 

*/

const largestElementSolution1 = (arr) => {
  const sortedArray = [...arr].sort((a, b) => a - b);

  const largestElement = sortedArray.at(-1);

  return largestElement;
};

const largestElementSolution2 = (arr) => {
  let largestElement = -1;

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > largestElement) {
      largestElement = arr[index];
    }
  }

  return largestElement;
};

console.log("\n ------------- Solution 1: ------------- \n");

console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The Largest element in the [2, 5, 1, 3, 0] is: ",
  largestElementSolution1([2, 5, 1, 3, 0])
);

console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The Largest element in the [8, 10, 5, 7, 9] is: ",
  largestElementSolution1([8, 10, 5, 7, 9])
);

console.log("\n ------------- Solution 2: ------------- \n");

console.log(
  "The Largest element in the [2, 5, 1, 3, 0] is: ",
  largestElementSolution2([2, 5, 1, 3, 0])
);

console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The Largest element in the [8, 10, 5, 7, 9] is: ",
  largestElementSolution2([8, 10, 5, 7, 9])
);
