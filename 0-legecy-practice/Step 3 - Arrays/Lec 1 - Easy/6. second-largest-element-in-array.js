/**
 * @article  : https://takeuforward.org/data-structure/find-second-smallest-and-second-largest-element-in-an-array/
 * @question : https://www.geeksforgeeks.org/problems/second-largest3735/1
 */

/*
  ✅ Problem Statement: 

  Given an array, find the second smallest and second largest element in the array. Print ‘-1’ in the event that either of them doesn’t exist.

  Example 1:
  Input: [1,2,4,7,7,5]
  Output: Second Smallest : 2, Second Largest : 5
  Explanation: The elements are as follows 1,2,3,5,7,7 and hence second largest of these is 5 and second smallest is 2
  
  Example 2:
  Input: [1]
  Output: Second Smallest : -1, Second Largest : -1
  Explanation: Since there is only one element in the array, it is the largest and smallest element present in the array. There is no second largest or second smallest element present.

*/

// Brute-force Solution
const solution1 = (arr) => {
  if (!(arr.length >= 2)) {
    return -1;
  }

  const sortedArray = [...arr].sort((a, b) => a - b);

  let secondLargestElement = sortedArray.at(-2);
  const largestElement = sortedArray.at(-1);

  for (let index = sortedArray.length - 2; index >= 0; index--) {
    if (secondLargestElement === largestElement) {
      secondLargestElement = sortedArray[index];
    } else {
      break;
    }
  }

  return secondLargestElement;
};

// Optimal Solution
const solution2 = (arr) => {
  if (!(arr.length >= 2)) {
    return -1;
  }

  let largestElement = -1;
  let secondLargestElement = -1;

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > largestElement) {
      secondLargestElement = largestElement;
      largestElement = arr[index];
    } else if (
      arr[index] !== largestElement &&
      arr[index] > secondLargestElement
    ) {
      secondLargestElement = arr[index];
    }
  }

  return secondLargestElement;
};

console.log("\n ------------- Solution 1: ------------- \n");

console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The Second Largest element in the [1, 2, 4, 7, 7, 5] is: ",
  solution1([1, 2, 4, 7, 7, 5])
);

console.log("\n ------------- Example 2: ------------- \n");
console.log("The Second Largest element in the [1] is: ", solution1([1]));

console.log("\n ------------- Solution 2: ------------- \n");

console.log(
  "The Second Largest element in the [1, 2, 4, 7, 7, 5] is: ",
  solution2([1, 2, 4, 7, 7, 5])
);

console.log("\n ------------- Example 2: ------------- \n");
console.log("The Second Largest element in the [1] is: ", solution2([1]));
