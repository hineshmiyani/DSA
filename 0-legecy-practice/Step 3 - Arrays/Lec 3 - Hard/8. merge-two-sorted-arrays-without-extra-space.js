/**
 * @article  : https://takeuforward.org/data-structure/merge-two-sorted-arrays-without-extra-space/
 * @question : https://www.geeksforgeeks.org/problems/merge-two-sorted-arrays-1587115620/1
 * @question : https://leetcode.com/problems/merge-sorted-array/
 */

/*
  ✅ Problem Statement: 

  Given two sorted arrays arr1[] and arr2[] of sizes n and m in non-decreasing order. Merge them in sorted order. Modify arr1 so that it contains the first N elements and modify arr2 so that it contains the last M elements.

  Example 1:
  Input: n = 4, arr1[] = [1 4 8 10], m = 5, arr2[] = [2 3 9]
  Output: arr1[] = [1 2 3 4], arr2[] = [8 9 10]
  Explanation: After merging the two non-decreasing arrays, we get, 1,2,3,4,8,9,10.

  Example2:
  Input: n = 4, arr1[] = [1 3 5 7], m = 5, arr2[] = [0 2 6 8 9]
  Output: arr1[] = [0 1 2 3], arr2[] = [5 6 7 8 9]
  Explanation: After merging the two non-decreasing arrays, we get, 0 1 2 3 5 6 7 8 9.

*/

// Brute-force Solution
const mergeArraysSolution1 = (arrA, arrB) => {
  // Initialize an empty array to hold the merged result
  const mergedArray = [];

  // Get the lengths of the input arrays
  const n = arrA.length;
  const m = arrB.length;

  // Initialize pointers for both arrays
  let left = 0;
  let right = 0;

  // Loop until we reach the end of either array
  while (left < n && right < m) {
    // Compare elements from both arrays and push the smaller one to the merged array
    if (arrA[left] <= arrB[right]) {
      mergedArray.push(arrA[left]);
      left = left + 1; // Move the pointer of arrA forward
    } else if (arrA[left] > arrB[right]) {
      mergedArray.push(arrB[right]);
      right = right + 1; // Move the pointer of arrB forward
    }
  }

  // If there are remaining elements in arrA, add them to the merged array
  while (left < n) {
    mergedArray.push(arrA[left]);
    left = left + 1;
  }

  // If there are remaining elements in arrB, add them to the merged array
  while (right < m) {
    mergedArray.push(arrB[right]);
    right = right + 1;
  }

  // Copy the merged array back into arrA and arrB
  for (let index = 0; index < mergedArray.length; index++) {
    if (index < n) {
      arrA[index] = mergedArray[index]; // Fill arrA with the first part of mergedArray
    } else {
      arrB[index - n] = mergedArray[index]; // Fill arrB with the remaining part of mergedArray
    }
  }

  // Return the modified arrays as an object
  return {
    arrA,
    arrB,
  };
};

// Optimal Solution - 1
// Function to merge two arrays by swapping elements and then sorting them
const mergeArraysSolution2 = (arrA, arrB) => {
  // Get the lengths of both arrays
  const n = arrA.length;
  const m = arrB.length;

  // Initialize pointers: 'left' starts from the end of arrA, 'right' starts from the beginning of arrB
  let left = n - 1;
  let right = 0;

  // Loop to swap elements between arrA and arrB if needed
  while (left >= 0 && right < m) {
    // If the current element in arrA is greater than the current element in arrB
    if (arrA[left] > arrB[right]) {
      // Swap the elements
      [arrA[left], arrB[right]] = [arrB[right], arrA[left]];
      // Move the 'left' pointer to the left and the 'right' pointer to the right
      left = left - 1;
      right = right + 1;
    } else {
      // If no more swaps are needed, break out of the loop
      break;
    }
  }

  // Sort both arrays in ascending order
  arrA.sort((a, b) => a - b);
  arrB.sort((a, b) => a - b);

  // Return an object containing the sorted arrays
  return {
    arrA,
    arrB,
  };
};

// Optimal Solution - 2

// Function to swap elements between two arrays if the element in the first array is greater than the element in the second array
const swapIfGreater = (arrA, arrB, index1, index2) => {
  // Check if the element in arrA at index1 is greater than the element in arrB at index2
  if (arrA[index1] > arrB[index2]) {
    // Swap the elements
    [arrA[index1], arrB[index2]] = [arrB[index2], arrA[index1]];
  }
};

// Function to merge two sorted arrays using the gap method
const mergeArraysSolution3 = (arrA, arrB) => {
  const n = arrA.length; // Length of the first array
  const m = arrB.length; // Length of the second array

  // Initial gap size, calculated as the ceiling of half the total length of both arrays
  let gap = Math.ceil((n + m) / 2);

  // Loop until the gap size reduces to zero
  while (gap > 0) {
    let left = 0; // Initialize the left pointer
    let right = left + gap; // Initialize the right pointer

    // Loop until the right pointer reaches the end of the combined length of both arrays
    while (right < n + m) {
      // Case 1: left pointer is in arrA and right pointer is in arrB
      if (left < n && right >= n) {
        swapIfGreater(arrA, arrB, left, right - n);
      }
      // Case 2: both pointers are in arrB
      else if (left >= n) {
        swapIfGreater(arrB, arrB, left - n, right - n);
      }
      // Case 3: both pointers are in arrA
      else {
        swapIfGreater(arrA, arrA, left, right);
      }

      // Move both pointers one step forward
      left = left + 1;
      right = right + 1;
    }

    // If the gap size is 1, break the loop as the arrays are now merged
    if (gap === 1) break;

    // Reduce the gap size by half for the next iteration
    gap = Math.ceil(gap / 2);
  }

  // Return the merged arrays
  return {
    arrA,
    arrB,
  };
};

// Example 1 Input
const arr1 = [1, 4, 8, 10];
const arr2 = [2, 3, 9];

// Example 2 Input
const arr3 = [1, 3, 5, 7];
const arr4 = [0, 2, 6, 8, 9];

console.log("\n ------------- Solution 1: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The merged arrays are: ",
  mergeArraysSolution1([...arr1], [...arr2])
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The merged arrays are: ",
  mergeArraysSolution1([...arr3], [...arr4])
);

// Time Complexity: O(n+m) + O(n+m), where n and m are the sizes of the given arrays.
// Reason: O(n+m) is for copying the elements from arr1[] and arr2[] to arr3[]. And another O(n+m) is for filling back the two given arrays from arr3[].

// Space Complexity: O(n+m) as we use an extra array of size n+m.

console.log("\n ------------- Solution 2: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The merged arrays are: ",
  mergeArraysSolution2([...arr1], [...arr2])
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The merged arrays are: ",
  mergeArraysSolution2([...arr3], [...arr4])
);

// Time Complexity: O(min(n, m)) + O(n*log(n)) + O(m*log(m)), where n and m are the sizes of the given arrays.
// Reason: O(min(n, m)) is for swapping the array elements. And O(n*log(n)) and O(m*log(m)) are for sorting the two arrays.

// Space Complexity: O(1) as we are not using any extra space.

console.log("\n ------------- Solution 3: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The merged arrays are: ",
  mergeArraysSolution3([...arr1], [...arr2])
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The merged arrays are: ",
  mergeArraysSolution3([...arr3], [...arr4])
);

// Time Complexity: O((n+m)*log(n+m)), where n and m are the sizes of the given arrays.
// Reason: The gap is ranging from n+m to 1 and every time the gap gets divided by 2. So, the time complexity of the outer loop will be O(log(n+m)). Now, for each value of the gap, the inner loop can at most run for (n+m) times. So, the time complexity of the inner loop will be O(n+m). So, the overall time complexity will be O((n+m)*log(n+m)).

// Space Complexity: O(1) as we are not using any extra space.
