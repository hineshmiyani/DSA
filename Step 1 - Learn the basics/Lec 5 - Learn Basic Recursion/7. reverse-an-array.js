/**
 * 👉 Article Link: https://takeuforward.org/data-structure/reverse-a-given-array/
 */

/*
  ✅ Problem Statement: 

  You are given an array. The task is to reverse the array and print it. 

  Example 1:
  Input: arr[] = {5,4,3,2,1}
  Output: {1,2,3,4,5}

  Example 2:
  Input: arr[] = {10,20,30,40}
  Output: {40,30,20,10}

  */

const reverseArraySolution1 = (array) => {
  if (array.length === 0) {
    return array;
  }

  const lastElement = array.pop();

  return [lastElement].concat(reverseArraySolution1(array));
};

// Time Complexity: O(n)
// Space Complexity: O(1)

const reverseArraySolution2 = (array, index = 0) => {
  if (index >= parseInt(array.length / 2)) {
    return;
  }

  // swap array item
  [array[index], array[array.length - index - 1]] = [
    array[array.length - index - 1],
    array[index],
  ];

  reverseArraySolution2(array, index + 1);
};

// Time Complexity: O(n)
// Space Complexity: O(1)

console.log("------------- Solution 1: ------------- ");
console.log(
  "Reverse array of [5,4,3,2,1]: ",
  reverseArraySolution1([5, 4, 3, 2, 1])
);
console.log(
  "Reverse array of [10,20,30,40]: ",
  reverseArraySolution1([10, 20, 30, 40])
);

console.log("------------- Solution 2: ------------- ");
let arr1 = [5, 4, 3, 2, 1];
let arr2 = [10, 20, 30, 40];

console.log(`Reverse array of [${arr1}]: `, reverseArraySolution2(arr1), arr1);

reverseArraySolution2(arr2);
console.log(`Reverse array of [${arr2}]: `, reverseArraySolution2(arr1), arr2);
