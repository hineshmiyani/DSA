/**
 * @article  : https://takeuforward.org/arrays/find-the-missing-number-in-an-array/
 * @question : https://leetcode.com/problems/missing-number/
 */

/*
  ✅ Problem Statement: 

  Given an integer N and an array of size N-1 containing N-1 numbers between 1 to N. Find the number(between 1 to N), that is not present in the given array.

  Example 1:
  Input Format: N = 5, array[] = {1,2,4,5}
  Result: 3
  Explanation: In the given array, number 3 is missing. So, 3 is the answer.

  Example 2:
  Input Format: N = 3, array[] = {1,3}
  Result: 2
  Explanation: In the given array, number 2 is missing. So, 2 is the answer.

*/

// Brute-force Solution
const findMissingNumberSolution1 = (arr, n) => {
  // Loop through each number from 1 to N
  for (let i = 1; i <= n; i++) {
    let isNumberExist = false; // Flag to check if the current number exists in the array

    // Loop through the array to check if the current number exists
    for (let j = 0; j < arr.length; j++) {
      if (i === arr[j]) {
        // If the current number is found in the array
        isNumberExist = true; // Set the flag to true
        break; // Exit the inner loop as we found the number
      }
    }

    // If the current number does not exist in the array, it is the missing number
    if (!isNumberExist) {
      return i; // Return the missing number
    }
  }

  // If no number is missing (which theoretically shouldn't happen), return -1
  return -1;
};

// Better Solution
const findMissingNumberSolution2 = (arr, n) => {
  // Initialize an empty object to act as a hash map
  const hashObj = {};

  // Populate the hash map with elements from the array
  for (let index = 0; index < arr.length; index++) {
    // Set the value of the current array element as a key in the hash map
    // The value is set to 1, but it could be any value since we are only interested in the keys
    hashObj[arr[index]] = 1;
  }

  // Iterate through numbers from 1 to N
  for (let index = 1; index <= n; index++) {
    // Check if the current number is not a key in the hash map
    if (!(index in hashObj)) {
      // If the current number is not found in the hash map, it is the missing number
      return index;
    }
  }

  // If no number is missing (which theoretically shouldn't happen), return -1
  return -1;
};

// Optimal Solution - 1
const findMissingNumberSolution3 = (arr, n) => {
  // Calculate the expected sum of the first N natural numbers using the formula: N * (N + 1) / 2
  // This formula gives the sum of an arithmetic series where the first term is 1 and the last term is N
  const expectedSum = (n * (n + 1)) / 2;

  // Calculate the sum of all elements in the given array using the reduce method
  // The reduce method iterates through the array and accumulates the sum of its elements
  const sumOfArrElements = arr.reduce(
    (acc, currentElement) => acc + currentElement,
    0 // Initial value of the accumulator is set to 0
  );

  // The missing number is the difference between the expected sum and the sum of the array elements
  // Since one number is missing from the array, the expected sum will be greater than the sum of the array elements
  return expectedSum - sumOfArrElements;
};

// Optimal Solution - 2
const findMissingNumberSolution4 = (arr, n) => {
  // Initialize the variable 'result' to 0. This will be used to store the result.
  let result = 0;

  // Iterate from 0 to n.
  // This loop will help us find the missing number using the XOR operation.
  for (let i = 0; i <= n; i++) {
    // XOR the current value of 'result' with the current element in 'arr' and the current index 'i'.
    // The XOR operation has a property where a number XORed with itself is 0 and a number XORed with 0 is the number itself.
    // By XORing all indices and all elements in 'arr', the missing number will be the only number that doesn't get canceled out.
    result = result ^ arr[i] ^ i;
  }

  // Return the result, which is the missing number.
  return result;
};

// Example 1 Inputs
const arr1 = [1, 2, 4, 5];
const n1 = 5;

// Example 2 Inputs
const arr2 = [1, 3];
const n2 = 3;

console.log("\n ------------- Solution 1: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The missing number in the array is: ",
  findMissingNumberSolution1(arr1, n1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The missing number in the array is: ",
  findMissingNumberSolution1(arr2, n2)
);

// Time Complexity: O(N2), where N = size of the array+1.
// Reason: In the worst case i.e. if the missing number is N itself, the outer loop will run for N times, and for every single number the inner loop will also run for approximately N times. So, the total time complexity will be O(N2).

// Space Complexity: O(1)  as we are not using any extra space.

console.log("\n ------------- Solution 2: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The missing number in the array is: ",
  findMissingNumberSolution2(arr1, n1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The missing number in the array is: ",
  findMissingNumberSolution2(arr2, n2)
);

// Time Complexity: O(N + N) = O(2N) = O(N)
// O(N): The function iterates through the array once to populate the hash map, which takes O(N) time.
// O(N): The function then iterates through numbers from 1 to N to check for the missing number, which also takes O(N) time.
// Therefore, the total time complexity is O(N + N) = O(2N) = O(N).

// Space Complexity: O(N)
// O(N): The hash map (hashObj) stores up to N-1 elements from the array, which requires O(N) space.
// Therefore, the space complexity is O(N).

console.log("\n ------------- Solution 3: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The missing number in the array is: ",
  findMissingNumberSolution3(arr1, n1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The missing number in the array is: ",
  findMissingNumberSolution3(arr2, n2)
);

// Time Complexity: O(N), where N = size of array+1.
// Reason: Here, we need only 1 loop to get the sum of the array elements. The loop runs for approx. N times. So, the time complexity is O(N).

// Space Complexity: O(1) as we are not using any extra space.

console.log("\n ------------- Solution 4: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The missing number in the array is: ",
  findMissingNumberSolution4(arr1, n1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The missing number in the array is: ",
  findMissingNumberSolution4(arr2, n2)
);

// Time Complexity: O(N), where N = size of array+1.
// Reason: Here, we need only 1 loop to calculate the XOR. The loop runs for approx. N times. So, the time complexity is O(N).

// Space Complexity: O(1) as we are not using any extra space.
