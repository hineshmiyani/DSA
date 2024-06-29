/**
 * @article  : https://takeuforward.org/data-structure/rotate-array-by-k-elements/
 * @question : https://leetcode.com/problems/rotate-array/
 */

/*
  ✅ Problem Statement: 

  Given an array of integers, rotating array of elements by k elements either left or right.

  Example 1:
  Input: N = 7, array[] = {1,2,3,4,5,6,7} , k=2 , right
  Output: 6 7 1 2 3 4 5
  Explanation: array is rotated to right by 2 position .

  Example 2:             
  Input: N = 6, array[] = {3,7,8,9,10,11} , k=3 , left 
  Output: 9 10 11 3 7 8
  Explanation: Array is rotated to right by 3 position.

*/

// Brute-force Solution
/**
 * Rotates an array of integers either to the left or right by a specified number of positions.
 *
 * @param {number[]} arr - The array of integers to be rotated.
 * @param {number} shiftPlace - The number of positions to shift the array.
 * @param {string} side - The direction in which to rotate the array ('left' or 'right').
 * @returns {number[]} - The rotated array.
 */
const rotateArraySolution1 = (arr, shiftPlace, side) => {
  // Calculate the effective shift place by taking the modulo of shiftPlace with the length of the array.
  shiftPlace = shiftPlace % arr.length; // 2 % 7 => 2; 8 % 7 => 1; 17 % 7 => 3

  // If the array has only one element or the shift place is 0, return the array as it is.
  if (arr.length <= 1 || shiftPlace === 0) return arr;

  if (side === "left") {
    // Create a temporary array by slicing the elements from the start up to shiftPlace.
    const tempArr = arr.slice(0, shiftPlace);

    // Shift the elements to the left by overwriting values in the original array.
    for (let index = shiftPlace; index < arr.length; index++) {
      arr[index - shiftPlace] = arr[index];
    }

    // Replace the last shiftPlace elements with the elements from the temporary array.
    arr.splice(arr.length - shiftPlace, shiftPlace, ...tempArr);
  } else if (side === "right") {
    // Create a temporary array by slicing the elements from the end backwards up to shiftPlace.
    const tempArr = arr.slice(-shiftPlace);

    // Shift the elements to the right by overwriting values in the original array.
    for (let index = arr.length - shiftPlace - 1; index >= 0; index--) {
      arr[index + shiftPlace] = arr[index];
    }

    // Replace the first shiftPlace elements with the elements from the temporary array.
    arr.splice(0, shiftPlace, ...tempArr);
  }

  // Return the rotated array.
  return arr;
};

// Brute-force Solution
/**
 * Rotates an array of integers to the left by a specified number of positions.
 *
 * @param {number[]} arr - The array of integers to be rotated.
 * @param {number} shiftPlace - The number of positions to shift the array.
 */
const rotatedToLeft = (arr, shiftPlace) => {
  // Create a temporary array to store the first 'shiftPlace' elements.
  const tempArr = [];

  // Copy the first 'shiftPlace' elements to the temporary array.
  for (let index = 0; index < shiftPlace; index++) {
    tempArr.push(arr[index]);
  }

  // Shift the remaining elements to the left by 'shiftPlace' positions.
  for (let index = shiftPlace; index < arr.length; index++) {
    arr[index - shiftPlace] = arr[index];
  }

  // Copy the elements from the temporary array to the end of the original array.
  for (let index = 0; index < tempArr.length; index++) {
    arr[shiftPlace + index] = tempArr[index];
  }
};

/**
 * Rotates an array of integers to the right by a specified number of positions.
 *
 * @param {number[]} arr - The array of integers to be rotated.
 * @param {number} shiftPlace - The number of positions to shift the array.
 */
const rotatedToRight = (arr, shiftPlace) => {
  // Create a temporary array to store the last 'shiftPlace' elements.
  const tempArr = [];

  // Copy the last 'shiftPlace' elements to the temporary array.
  for (let index = arr.length - shiftPlace; index < arr.length; index++) {
    tempArr.push(arr[index]);
  }

  // Shift the remaining elements to the right by 'shiftPlace' positions.
  for (let index = arr.length - shiftPlace - 1; index >= 0; index--) {
    arr[index + shiftPlace] = arr[index];
  }

  // Copy the elements from the temporary array to the beginning of the original array.
  for (let index = 0; index < tempArr.length; index++) {
    arr[index] = tempArr[index];
  }
};

const rotateArraySolution2 = (arr, shiftPlace, side) => {
  // Calculate the effective shift place by taking the modulo of shiftPlace with the length of the array.
  shiftPlace = shiftPlace % arr.length; // 2 % 7 => 2; 8 % 7 => 1; 17 % 7 => 3

  // If the array has only one element or the shift place is 0, return the array as it is.
  if (arr.length <= 1 || shiftPlace === 0) return arr;

  if (side === "left") {
    rotatedToLeft(arr, shiftPlace);
  } else if (side === "right") {
    rotatedToRight(arr, shiftPlace);
  }

  // Return the rotated array.
  return arr;
};

// Optimal Solution
/**
 * Reverses a portion of an array in place.
 *
 * @param {number[]} arr - The array to be reversed.
 * @param {number} l - The starting index of the portion to be reversed.
 * @param {number} r - The ending index of the portion to be reversed.
 * @returns {number[]} - The array with the specified portion reversed.
 */
const reverseArr = (arr, l, r) => {
  // Continue swapping elements until the left index is no longer less than the right index.
  while (l < r) {
    // Swap the elements at indices l and r.
    [arr[l], arr[r]] = [arr[r], arr[l]];
    // Move the left index to the right.
    l = l + 1;
    // Move the right index to the left.
    r = r - 1;
  }

  // Return the modified array.
  return arr;
};

/**
 * Rotates an array of integers either to the left or right by a specified number of positions using the reversal algorithm.
 *
 * @param {number[]} arr - The array of integers to be rotated.
 * @param {number} shiftPlace - The number of positions to shift the array.
 * @param {string} side - The direction in which to rotate the array ('left' or 'right').
 * @returns {number[]} - The rotated array.
 */
const rotateArraySolution3 = (arr, shiftPlace, side) => {
  // Calculate the effective shift place by taking the modulo of shiftPlace with the length of the array.
  shiftPlace = shiftPlace % arr.length; // 2 % 7 => 2; 8 % 7 => 1; 17 % 7 => 3

  // If the array has only one element or the shift place is 0, return the array as it is.
  if (arr.length <= 1 || shiftPlace === 0) return arr;

  // Reverse the entire array.
  reverseArr(arr, 0, arr.length - 1); // EXAMPLE:2 [11,10,9,8,7,3]

  // Check if the rotation is to the left
  if (side === "left") {
    // Reverse the first part of the array from the start to the element before the shift place
    reverseArr(arr, 0, arr.length - shiftPlace - 1); // EXAMPLE:2 [9,10,11,8,7,3]
    // Reverse the second part of the array from the shift place to the end
    reverseArr(arr, arr.length - shiftPlace, arr.length - 1); // EXAMPLE:2 [9,10,11,3,7,8]
  } else if (side === "right") {
    // Reverse the first part of the array from the start to the shift place
    reverseArr(arr, 0, shiftPlace - 1);
    // Reverse the second part of the array from the shift place to the end
    reverseArr(arr, shiftPlace, arr.length - 1);
  }

  // Return the rotated array.
  return arr;
};

console.log("\n ------------- Solution 1: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "Array rotated by 2 elements right: ",
  rotateArraySolution1([1, 2, 3, 4, 5, 6, 7], 2, "right")
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "Array rotated by 3 elements left: ",
  rotateArraySolution1([3, 7, 8, 9, 10, 11], 3, "left")
);

// Time Complexity: O(n)
// Space Complexity: O(k) since k array element needs to be stored in temp array

console.log("\n ------------- Solution 2: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "Array rotated by 2 elements right:  ",
  rotateArraySolution2([1, 2, 3, 4, 5, 6, 7], 2, "right")
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "Array rotated by 3 elements left: ",
  rotateArraySolution2([3, 7, 8, 9, 10, 11], 3, "left")
);

// Time Complexity: O(n)
// Space Complexity: O(k) since k array element needs to be stored in temp array

console.log("\n ------------- Solution 3: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "Array rotated by 2 elements right:  ",
  rotateArraySolution3([1, 2, 3, 4, 5, 6, 7], 2, "right")
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "Array rotated by 3 elements left: ",
  rotateArraySolution3([3, 7, 8, 9, 10, 11], 3, "left")
);

// Time Complexity - O(N) where N is the number of elements in an array
// Space Complexity - O(1) since no extra space is required
