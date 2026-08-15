/**
 * @question : https://www.geeksforgeeks.org/batch/dsa-javascript-self-paced-april/track/dsasp-js-basic-list/problem/maximum-index-1587115620
 */

const maxIndexDiffSolution1 = (arr, n) => {
  // your code here
  let indexDiff = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        if (j - i > indexDiff) {
          indexDiff = j - i;
        }
      }
    }
  }

  return indexDiff;
};

// Time Complexity: O(n^2)
// Space Complexity: O(1)

/* 

  To solve this problem with O(n) time complexity, you can use the following approach:
  
  1. Pre-compute Minimums from the Left: Create an array lMin where lMin[i] stores the minimum value in the array a from index 0 to i. This helps in quickly finding the smallest number up to any index i.
  
  2. Pre-compute Maximums from the Right: Create another array rMax where rMax[i] stores the maximum value in the array a from index i to n-1. This helps in quickly finding the largest number from any index i to the end of the array.
  
  3. Two-pointer Technique to Find Maximum j - i: Initialize two pointers, i and j, to the start of lMin and rMax respectively. The idea is to find the maximum distance j - i such that lMin[i] < rMax[j]. If lMin[i] < rMax[j], move j to the right to potentially increase the difference j - i. If lMin[i] >= rMax[j], move i to the right to find a smaller l Min[i].
  
  4. Calculate the Maximum Difference: Keep track of the maximum difference j - i found during the traversal using the two pointers.

*/

const maxIndexDiffSolution2 = (arr, n) => {
  if (n === 1) {
    return 0;
  }

  // Create arrays LMin and RMax
  let lMin = new Array(n);
  let rMax = new Array(n);

  // lMin Array
  lMin[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    lMin[i] = Math.min(lMin[i - 1], arr[i]);
  }

  // rMin Array
  rMax[n - 1] = arr[n - 1];
  for (let j = n - 2; j >= 0; j--) {
    rMax[j] = Math.max(rMax[j + 1], arr[j]);
  }

  // Traverse arrays to find maximum j - i

  let i = 0;
  let j = 0;
  let maxDiff = -1;

  while (j < n && i < n) {
    if (lMin[i] <= rMax[j]) {
      maxDiff = Math.max(maxDiff, j - i);
      j++;
    } else {
      i++;
    }
  }

  return maxDiff;
};

// Time Complexity: O(3n) => O(n)
// Space Complexity: O(1)

const n = 9;
const arr = [34, 8, 10, 3, 2, 80, 30, 33, 1];

const output1 = maxIndexDiffSolution1(arr, n);
console.log("Largest element index: ", output1);

const output2 = maxIndexDiffSolution2(arr, n);
console.log("Largest element index: ", output2);
