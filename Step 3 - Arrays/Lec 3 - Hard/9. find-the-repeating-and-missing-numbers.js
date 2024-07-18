/**
 * @article  : https://takeuforward.org/data-structure/find-the-repeating-and-missing-numbers/
 * @question : https://www.geeksforgeeks.org/problems/find-missing-and-repeating2512/1
 * @question : https://leetcode.com/problems/set-mismatch/description/
 */

/*
  ✅ Problem Statement: 

  You are given a read-only array of N integers with values also in the range [1, N] both inclusive. Each integer appears exactly once except A which appears twice and B which is missing. The task is to find the repeating and missing numbers A and B where A repeats twice and B is missing.

  Example 1:
  Input Format: array[] = {3,1,2,5,3}
  Result: {3,4}
  Explanation: A = 3 , B = 4 Since 3 is appearing twice and 4 is missing

  Example 2:
  Input Format: array[] = {3,1,2,5,4,6,7,5}
  Result: {5,8}
  Explanation: A = 5 , B = 8 Since 5 is appearing twice and 8 is missing

*/

// Brute-force Solution
const findMissingRepeatingNumbersSolution1 = (arr) => {
  // Initialize variables to store the repeating and missing numbers
  let repeatingNum = -1;
  let missingNum = -1;

  // Loop through numbers from 1 to the length of the array
  for (let i = 1; i <= arr.length; i++) {
    // Initialize a counter to count occurrences of the current number
    let count = 0;

    // Loop through the array to count occurrences of the current number
    for (let j = 0; j < arr.length; j++) {
      // If the current number in the array matches the number we're counting
      if (i === arr[j]) {
        // Increment the counter
        count = count + 1;
      }
    }

    // If the counter is 2, it means the number is repeating
    if (count === 2) {
      repeatingNum = i;
    }

    // If the counter is 0, it means the number is missing
    if (count === 0) {
      missingNum = i;
    }

    // If both repeating and missing numbers are found, exit the loop early
    if (repeatingNum !== -1 && missingNum !== -1) {
      break;
    }
  }

  // Return an object containing the repeating and missing numbers
  return { repeatingNum, missingNum };
};

// Better Solution
const findMissingRepeatingNumbersSolution2 = (arr) => {
  // Get the length of the array
  const numsLength = arr.length;

  // Create a set to keep track of the numbers we have seen
  const numsSet = new Set();
  // Initialize variables to store the repeating and missing numbers
  let repeatingNum = -1;
  let missingNum = -1;

  // First loop: Identify the repeating number
  for (let index = 0; index < numsLength; index++) {
    // If the number is not in the set, add it
    if (!numsSet.has(arr[index])) {
      numsSet.add(arr[index]);
    } else {
      // If the number is already in the set, it is the repeating number
      repeatingNum = arr[index];
    }
  }

  // Second loop: Identify the missing number
  for (let index = 1; index <= numsLength; index++) {
    // If the number from 1 to numsLength is not in the set, it is the missing number
    if (!numsSet.has(index)) {
      missingNum = index;
      break; // Exit the loop once the missing number is found
    }
  }

  // Return an object containing the repeating and missing numbers
  return { repeatingNum, missingNum };
};

// Optimal Solution - 1
const findMissingRepeatingNumbersSolution3 = (arr) => {
  // Get the length of the array
  const n = arr.length;

  // Calculate the sum of the first 'n' natural numbers
  // Formula: n * (n + 1) / 2
  const expectedSum = (n * (n + 1)) / 2;

  // Calculate the sum of the squares of the first 'n' natural numbers
  // Formula: n * (n + 1) * (2 * n + 1) / 6
  const expectedSumOfSquares = (n * (n + 1) * (2 * n + 1)) / 6;

  // Initialize variables to store the sum and sum of squares of the array elements
  let actualSum = 0;
  let actualSumOfSquares = 0;

  // Iterate through the array to calculate the sum and sum of squares of its elements
  for (const num of arr) {
    actualSum = actualSum + num; // Add the current number to the sum
    actualSumOfSquares = actualSumOfSquares + num * num; // Add the square of the current number to the sum of squares
  }

  // Calculate the difference between the sum of the array elements and the sum of the first 'n' natural numbers
  // This gives us the difference between the repeating number (x) and the missing number (y)
  const sumDifference = actualSum - expectedSum; // x - y

  // Calculate the difference between the sum of squares of the array elements and the sum of squares of the first 'n' natural numbers
  // This gives us the difference between the square of the repeating number (x^2) and the square of the missing number (y^2)
  const squareSumDifference = actualSumOfSquares - expectedSumOfSquares; // x^2 - y^2 => (x - y)(x + y)

  // Calculate the sum of the repeating number (x) and the missing number (y)
  // By dividing squareSumDifference by sumDifference, we get (x + y)
  const sumOfRepeatingAndMissing = squareSumDifference / sumDifference; // x + y = squareSumDifference / sumDifference

  // Calculate the repeating number (x)
  // By solving the equations x - y = sumDifference and x + y = sumOfRepeatingAndMissing, we get x = (sumOfRepeatingAndMissing + sumDifference) / 2
  let repeatingNum = (sumOfRepeatingAndMissing + sumDifference) / 2;

  // Calculate the missing number (y)
  // By substituting the value of repeatingNum into the equation x - y = sumDifference, we get y = repeatingNum - sumDifference
  let missingNum = repeatingNum - sumDifference;

  // Return an object containing the repeating number and the missing number
  return { repeatingNum, missingNum };
};

// Optimal Solution - 2
const findMissingRepeatingNumbersSolution4 = (arr) => {
  // Initialize xorResult to 0. This will be used to store the XOR of all elements in the array and the numbers from 1 to n.
  let xorResult = 0;

  // XOR all elements of the array and the numbers from 1 to n.
  for (let i = 0; i < arr.length; i++) {
    xorResult = xorResult ^ arr[i]; // XOR with the current element of the array
    xorResult = xorResult ^ (i + 1); // XOR with the current index + 1 (which represents the numbers from 1 to n)
  }

  // Initialize rightmostSetBit to 0. This will be used to find the rightmost set bit in xorResult.
  let rightmostSetBit = 0;

  // Find the rightmost set bit in xorResult.
  while (1) {
    if ((xorResult & (1 << rightmostSetBit)) !== 0) {
      // Check if the bit at position rightmostSetBit is set
      break; // If it is set, break the loop
    }
    rightmostSetBit = rightmostSetBit + 1; // Otherwise, move to the next bit
  }

  // Initialize xorGroup0 and xorGroup1 to 0. These will be used to store the XOR of elements that have the rightmostSetBit bit set and not set, respectively.
  let xorGroup0 = 0;
  let xorGroup1 = 0;

  // Divide the elements of the array into two groups based on the rightmostSetBit bit and XOR the elements in each group.
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] & (1 << rightmostSetBit)) !== 0) {
      // If the rightmostSetBit bit is set
      xorGroup1 = xorGroup1 ^ arr[i]; // XOR with xorGroup1
    } else {
      // If the rightmostSetBit bit is not set
      xorGroup0 = xorGroup0 ^ arr[i]; // XOR with xorGroup0
    }
  }

  // Divide the numbers from 1 to n into two groups based on the rightmostSetBit bit and XOR the numbers in each group.
  for (let i = 1; i <= arr.length; i++) {
    if ((i & (1 << rightmostSetBit)) !== 0) {
      // If the rightmostSetBit bit is set
      xorGroup1 = xorGroup1 ^ i; // XOR with xorGroup1
    } else {
      // If the rightmostSetBit bit is not set
      xorGroup0 = xorGroup0 ^ i; // XOR with xorGroup0
    }
  }

  // Initialize repeatCount to 0. This will be used to count the occurrences of xorGroup0 in the array.
  let repeatCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (xorGroup0 === arr[i]) {
      // If xorGroup0 is found in the array
      repeatCount = repeatCount + 1; // Increment the count
    }
  }

  // If xorGroup0 is found twice in the array, it is the repeating number and xorGroup1 is the missing number.
  if (repeatCount === 2) {
    return {
      repeatingNum: xorGroup0,
      missingNum: xorGroup1,
    };
  }

  // Otherwise, xorGroup1 is the repeating number and xorGroup0 is the missing number.
  return {
    repeatingNum: xorGroup1,
    missingNum: xorGroup0,
  };
};

// Example 1 Input
const arr1 = [3, 1, 2, 5, 3];

// Example 2 Input
const arr2 = [3, 1, 2, 5, 4, 6, 7, 5];

console.log("\n ------------- Solution 1: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The repeating and missing numbers are: ",
  findMissingRepeatingNumbersSolution1(arr1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The repeating and missing numbers are: ",
  findMissingRepeatingNumbersSolution1(arr2)
);

// Time Complexity: O(N^2), where N = size of the given array.
// Reason: Here, we are using nested loops to count occurrences of every element between 1 to N.

// Space Complexity: O(1) as we are not using any extra space.

console.log("\n ------------- Solution 2: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The repeating and missing numbers are: ",
  findMissingRepeatingNumbersSolution2(arr1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The repeating and missing numbers are: ",
  findMissingRepeatingNumbersSolution2(arr2)
);

// Time Complexity: O(2N), where N = the size of the given array.
// Reason: We are using two loops each running for N times. So, the time complexity will be O(2N).

// Space Complexity: O(N) as we are using a set to solve this problem.

console.log("\n ------------- Solution 3: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The repeating and missing numbers are: ",
  findMissingRepeatingNumbersSolution3(arr1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The repeating and missing numbers are: ",
  findMissingRepeatingNumbersSolution3(arr2)
);

// Time Complexity: O(N), where N = the size of the given array.
// Reason: We are using only one loop running for N times. So, the time complexity will be O(N).

// Space Complexity: O(1) as we are not using any extra space to solve this problem.

console.log("\n ------------- Solution 4: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The repeating and missing numbers are: ",
  findMissingRepeatingNumbersSolution4(arr1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The repeating and missing numbers are: ",
  findMissingRepeatingNumbersSolution4(arr2)
);

// Time Complexity: O(N), where N = the size of the given array.
// Reason: We are just using some loops running for N times. So, the time complexity will be approximately O(N).

// Space Complexity: O(1) as we are not using any extra space to solve this problem.
