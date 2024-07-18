/**
 * @article  : https://takeuforward.org/data-structure/4-sum-find-quads-that-add-up-to-a-target-value/
 * @question : https://leetcode.com/problems/4sum/
 */

/*
  ✅ Problem Statement: 

  Given an array of N integers, your task is to find unique quads that add up to give a target value. In short, you need to return an array of all the unique quadruplets [arr[a], arr[b], arr[c], arr[d]] such that their sum is equal to a given target.

  Note:
  0 <= a, b, c, d < n
  a, b, c, and d are distinct.
  arr[a] + arr[b] + arr[c] + arr[d] == target

  Example 1:
  Input Format: arr[] = [1,0,-1,0,-2,2], target = 0
  Result: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
  Explanation: We have to find unique quadruplets from the array such that the sum of those elements is equal to the target sum given that is 0. The result obtained is such that the sum of the quadruplets yields 0.

  Example 2:
  Input Format: arr[] = [4,3,3,4,4,2,1,2,1,1], target = 9
  Result: [[1,1,3,4],[1,2,2,4],[1,2,3,3]]
  Explanation: The sum of all the quadruplets is equal to the target i.e. 9.

*/

// Brute-force Solution
const fourSumSolution1 = (arr, expectedSum) => {
  // Initialize an empty array to store the unique quadruplets
  const quadsArr = [];
  // Initialize a set to store unique quadruplets as strings to avoid duplicates
  const quadsSet = new Set();

  // Iterate through the array with the first pointer `i`
  for (let i = 0; i < arr.length; i++) {
    // Iterate through the array with the second pointer `j`, starting from `i + 1`
    for (let j = i + 1; j < arr.length; j++) {
      // Iterate through the array with the third pointer `k`, starting from `j + 1`
      for (let k = j + 1; k < arr.length; k++) {
        // Iterate through the array with the fourth pointer `l`, starting from `k + 1`
        for (let l = k + 1; l < arr.length; l++) {
          // Calculate the sum of the four elements
          const sum = arr[i] + arr[j] + arr[k] + arr[l];

          // Check if the sum matches the expected sum
          if (sum === expectedSum) {
            // Create a quadruplet array with the four elements
            const quad = [arr[i], arr[j], arr[k], arr[l]];

            // Sort the quadruplet to ensure uniqueness
            quad.sort((a, b) => a - b);

            // Convert the quadruplet to a string and add it to the set to avoid duplicates
            quadsSet.add(JSON.stringify(quad));
          }
        }
      }
    }
  }

  // Convert each unique quadruplet string back to an array and add it to the result array
  for (const iterator of quadsSet) {
    quadsArr.push(JSON.parse(iterator));
  }

  // Return the array of unique quadruplets
  return quadsArr;
};

// Better Solution
const fourSumSolution2 = (arr, expectedSum) => {
  // Initialize an empty array to store the unique quadruplets
  const quadsArr = [];
  // Initialize a set to store unique quadruplets as strings to avoid duplicates
  const quadsSet = new Set();

  // Iterate through the array with the first pointer `i`
  for (let i = 0; i < arr.length; i++) {
    // Iterate through the array with the second pointer `j`, starting from `i + 1`
    for (let j = i + 1; j < arr.length; j++) {
      // Initialize a set to store the elements seen so far for the current pair (arr[i], arr[j])
      const hashSet = new Set();

      // Iterate through the array with the third pointer `k`, starting from `j + 1`
      for (let k = j + 1; k < arr.length; k++) {
        // Calculate the fourth element needed to reach the expected sum
        const fourthElement = expectedSum - (arr[i] + arr[j] + arr[k]);

        // Check if the fourth element is already in the hashSet
        if (hashSet.has(fourthElement)) {
          // If it is, create a quadruplet array with the four elements
          const quad = [arr[i], arr[j], arr[k], fourthElement];

          // Sort the quadruplet to ensure uniqueness
          quad.sort((a, b) => a - b);

          // Convert the quadruplet to a string and add it to the set to avoid duplicates
          quadsSet.add(JSON.stringify(quad));
        }

        // Add the current element to the hashSet
        hashSet.add(arr[k]);
      }
    }
  }

  // Convert each unique quadruplet string back to an array and add it to the result array
  for (const iterator of quadsSet) {
    quadsArr.push(JSON.parse(iterator));
  }

  // Return the array of unique quadruplets
  return quadsArr;
};

// Optimal Solution
const fourSumSolution3 = (arr, expectedSum) => {
  const quads = []; // Initialize an array to store the unique quadruplets
  const n = arr.length; // Get the length of the input array

  // Sort the array in ascending order to facilitate the two-pointer approach
  arr.sort((a, b) => a - b);

  // Iterate through the array with the first pointer `i`
  for (let i = 0; i < n; i++) {
    // Skip duplicate elements to avoid duplicate quadruplets
    if (i !== 0 && arr[i] === arr[i - 1]) {
      continue;
    }

    // Iterate through the array with the second pointer `j`
    for (let j = i + 1; j < n; j++) {
      // Skip duplicate elements to avoid duplicate quadruplets
      if (j !== i + 1 && arr[j] === arr[j - 1]) {
        continue;
      }

      // Initialize two pointers `k` and `l`
      let k = j + 1;
      let l = n - 1;

      // Use the two-pointer approach to find the remaining two elements
      while (k < l) {
        const sum = arr[i] + arr[j] + arr[k] + arr[l]; // Calculate the sum of the four elements

        if (sum === expectedSum) {
          // If the sum matches the expected sum, add the quadruplet to the result array
          const quad = [arr[i], arr[j], arr[k], arr[l]];
          quads.push(quad);

          // Move the pointers to the next unique elements
          k = k + 1;
          l = l - 1;

          // Skip duplicate elements to avoid duplicate quadruplets
          while (k < l && arr[k] === arr[k - 1]) {
            k = k + 1;
          }

          while (k < l && arr[l] === arr[l + 1]) {
            l = l - 1;
          }
        } else if (sum < expectedSum) {
          // If the sum is less than the expected sum, move the `k` pointer to the right
          k = k + 1;
        } else {
          // If the sum is greater than the expected sum, move the `l` pointer to the left
          l = l - 1;
        }
      }
    }
  }

  return quads; // Return the array of unique quadruplets
};

// Example 1 Input
const arr1 = [1, 0, -1, 0, -2, 2];
const target1 = 0;

// Example 2 Input
const arr2 = [4, 3, 3, 4, 4, 2, 1, 2, 1, 1];
const target2 = 9;

console.log("\n ------------- Solution 1: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The unique quadruplets are: ", fourSumSolution1(arr1, target1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The unique quadruplets are: ", fourSumSolution1(arr2, target2));

// Time Complexity: O(N^4), where N = size of the array.
// Reason: Here, we are mainly using 4 nested loops. But we not considering the time complexity of sorting as we are just sorting 4 elements every time.

// Space Complexity: O(2 * no. of the quadruplets (q)) as we are using a set data structure and a list to store the quads.

console.log("\n ------------- Solution 2: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The unique quadruplets are: ", fourSumSolution2(arr1, target1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The unique quadruplets are: ", fourSumSolution2(arr2, target2));

// Time Complexity: ( O(n^3) )
// The outermost loop runs n times.
// The second loop runs approximately n times for each iteration of the outermost loop.
// The innermost loop runs approximately n times for each iteration of the second loop.
// Within the innermost loop, operations like checking the hashSet and adding elements to it are O(1) on average.
// Thus, the overall time complexity is: [ O(n^3) ]

// Space Complexity: O(2 * no. of the quadruplets)+O(N)
// Reason: we are using a set data structure and a list to store the quads. This results in the first term. And the second space is taken by the set data structure we are using to store the array elements. At most, the set can contain approximately all the array elements and so the space complexity is O(N).

console.log("\n ------------- Solution 3: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The unique quadruplets are: ", fourSumSolution3(arr1, target1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The unique quadruplets are: ", fourSumSolution3(arr2, target2));

// Time Complexity: O(N3), where N = size of the array.
// Reason: Each of the pointers i and j, is running for approximately N times. And both the pointers k and l combined can run for approximately N times including the operation of skipping duplicates. So the total time complexity will be O(N3).

// Space Complexity: O(no. of quadruplets), This space is only used to store the answer. We are not using any extra space to solve this problem. So, from that perspective, space complexity can be written as O(1).
