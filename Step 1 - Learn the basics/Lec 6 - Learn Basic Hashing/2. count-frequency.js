/**
 * @article  : https://takeuforward.org/hashing/hashing-maps-time-complexity-collisions-division-rule-of-hashing-strivers-a2z-dsa-course/
 * @question : https://www.geeksforgeeks.org/problems/frequency-of-array-elements-1587115620/0
 */

/*
  ✅ Problem Statement: 

  Given an array, we have found the number of occurrences of each element in the array.

  Example 1:
  Input: arr[] = {10,5,10,15,10,5};
  Output: 10  3
  	      5  2
          15  1
  Explanation: 10 occurs 3 times in the array
  	           5 occurs 2 times in the array
               15 occurs 1 time in the array

  Example2: 
  Input: arr[] = {2,2,3,4,4,2};
  Output: 2  3
  	      3  1
          4  2
  Explanation: 2 occurs 3 times in the array
  	           3 occurs 1 time in the array
               4 occurs 2 time in the array

*/

const frequencyCount = (array) => {
  const frequencyMap = new Map();

  array.forEach((ele) => {
    if (frequencyMap.has(ele)) {
      frequencyMap.set(ele, frequencyMap.get(ele) + 1);
    } else {
      frequencyMap.set(ele, 1);
    }
  });

  return frequencyMap;
};

console.log("\n ------------- Solution 1: ------------- \n");

console.log(
  "Frequency of each elements in [10, 5, 10, 15, 10, 5] : \n",
  frequencyCount([10, 5, 10, 15, 10, 5])
);

console.log(
  "Frequency of each elements in [2, 2, 3, 4, 4, 2] : \n",
  frequencyCount([2, 2, 3, 4, 4, 2])
);
