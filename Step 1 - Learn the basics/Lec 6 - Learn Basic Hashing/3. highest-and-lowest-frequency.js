/**
 * @article  : https://takeuforward.org/arrays/find-the-highest-lowest-frequency-element/
 * @question : https://leetcode.com/problems/frequency-of-the-most-frequent-element/
 */

/*
  ✅ Problem Statement: 

  Given an array of size N. Find the highest and lowest frequency element.

  Example 1:
  Input: array[] = {10,5,10,15,10,5};
  Output: 10 15
  Explanation: The frequency of 10 is 3, i.e. the highest and the frequency of 15 is 1 i.e. the lowest.

  Example 2:
  Input: array[] = {2,2,3,4,4,2};
  Output: 2 3
  Explanation: The frequency of 2 is 3, i.e. the highest and the frequency of 3 is 1 i.e. the lowest.

*/

const findHighestAndLowestFrequency = (array) => {
  const frequencyMap = new Map();

  array.forEach((ele) => {
    if (frequencyMap.has(ele)) {
      frequencyMap.set(ele, frequencyMap.get(ele) + 1);
    } else {
      frequencyMap.set(ele, 1);
    }
  });

  let highestFrequency = 0;
  let highestFrequencyEle = 0;

  let lowestFrequency = array.length;
  let lowestFrequencyEle = 0;

  frequencyMap.forEach((value, key) => {
    if (value > highestFrequency) {
      highestFrequency = value;
      highestFrequencyEle = key;
    }

    if (value < lowestFrequency) {
      lowestFrequency = value;
      lowestFrequencyEle = key;
    }
  });

  return {
    highestFrequencyEle,
    highestFrequency,
    lowestFrequencyEle,
    lowestFrequency,
  };
};

console.log("\n ------------- Solution 1: ------------- \n");

console.log(
  "Find the highest and lowest frequency element in [10, 5, 10, 15, 10, 5] : \n",
  findHighestAndLowestFrequency([10, 5, 10, 15, 10, 5])
);

console.log(
  "Find the highest and lowest frequency element in [2, 2, 3, 4, 4, 2] : \n",
  findHighestAndLowestFrequency([2, 2, 3, 4, 4, 2])
);
