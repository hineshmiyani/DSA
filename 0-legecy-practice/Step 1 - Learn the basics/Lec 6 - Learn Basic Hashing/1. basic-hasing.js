/**
 * @article : https://takeuforward.org/hashing/hashing-maps-time-complexity-collisions-division-rule-of-hashing-strivers-a2z-dsa-course/
 */

/*
  ✅ Problem Statement 1: 

  Given an array of integers: [1, 2, 1, 3, 2] and we are given some queries: [1, 3, 4, 2, 10]. 
  
  For each query, we need to find out how many times the number appears in the array. 
  
  For example, if the query is 1 our answer would be 2, and if the query is 4 the answer will be 0. 

*/

const findFrequencyUsingObject = (arr, queries) => {
  const frequencyObj = {};

  // queries.forEach((query) => {
  //   frequencyObj[query] = 0;
  // });

  arr.forEach((ele) => {
    frequencyObj[ele] = (frequencyObj?.[ele] || 0) + 1;
  });

  return frequencyObj;
};

const findFrequencyUsingMap = (arr, queries) => {
  const frequencyMap = new Map();

  // queries.forEach((query) => {
  //   frequencyMap.set(query, 0);
  // });

  arr.forEach((ele) => {
    frequencyMap.set(ele, (frequencyMap.get(ele) || 0) + 1);
  });

  return frequencyMap;
};

console.log("\n ------------- Solution 1: ------------- \n");
console.log(
  "Frequency of [1, 3, 4, 2, 10] in [1, 2, 1, 3, 2] arr : \n",
  findFrequencyUsingObject([1, 2, 1, 3, 2], [1, 3, 4, 2, 10])
);

console.log("\n ------------- Solution 2: ------------- \n");
console.log(
  "Frequency of [1, 3, 4, 2, 10] in [1, 2, 1, 3, 2] arr : \n",
  findFrequencyUsingMap([1, 2, 1, 3, 2], [1, 3, 4, 2, 10])
);

/* 

Time Complexity Analysis for findFrequencyUsingObject:

1. Counting the frequencies:
  - This loop runs for each element in arr, hence ( O(n) ), where ( n ) is the length of the array.
  - Accessing and updating frequencyObj takes ( O(1) ) time for each element due to the average constant-time complexity of object property access in JavaScript.

2. Total Time Complexity:
  - The total time complexity is ( O(n) ).

*/

/* 

Time Complexity Analysis for findFrequencyUsingMap:

1. Counting the frequencies:
  - This loop runs for each element in arr, hence ( O(n) ).
  - Accessing and updating frequencyMap takes ( O(1) ) time for each element due to the average constant-time complexity of Map operations in JavaScript.

2. Total Time Complexity:
  - The total time complexity is ( O(n) ).

*/

/* 
  Output:
  1 : 2,
  3 : 1,
  4 : 0,
  2 : 2,
  10 : 0 
*/
