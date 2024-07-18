/**
 * @article  : https://takeuforward.org/data-structure/3-sum-find-triplets-that-add-up-to-a-zero/
 * @question : https://leetcode.com/problems/3sum/
 */

/*
  ✅ Problem Statement: 

  Given an array of N integers, your task is to find unique triplets that add up to give a sum of zero. In short, you need to return an array of all the unique triplets [arr[a], arr[b], arr[c]] such that i!=j, j!=k, k!=i, and their sum is equal to zero.

  Example 1:
  Input: nums = [-1,0,1,2,-1,-4]
  Output: [[-1,-1,2],[-1,0,1]]
  Explanation: Out of all possible unique triplets possible, [-1,-1,2] and [-1,0,1] satisfy the condition of summing up to zero with i!=j!=k

  Example 2:
  Input: nums=[-1,0,1,0]
  Output: Output: [[-1,0,1]]
  Explanation: Out of all possible unique triplets possible, [-1,0,1] and [-1,1,0] satisfy the condition of summing up to zero with i!=j!=k

*/

// Brute-force Solution
const threeSumSolution1 = (arr, expectedSum) => {
  // Initialize an array to store the unique triplets.
  const tripletsArr = [];
  // Use a Set to ensure the uniqueness of the triplets.
  const tripletsSet = new Set();

  // Iterate through the array with three nested loops to check all possible triplets.
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        // Calculate the sum of the current triplet.
        const sum = arr[i] + arr[j] + arr[k];

        // If the sum matches the expected sum, process the triplet.
        if (sum === expectedSum) {
          // Create a triplet array.
          const triplet = [arr[i], arr[j], arr[k]];

          // Sort the triplet to ensure a consistent order.
          triplet.sort((a, b) => a - b);

          // Convert the triplet to a JSON string and add it to the Set to ensure uniqueness.
          tripletsSet.add(JSON.stringify(triplet));
        }
      }
    }
  }

  // Convert the unique triplets from the Set back to arrays and add them to the result array.
  for (const iterator of tripletsSet) {
    tripletsArr.push(JSON.parse(iterator));
  }

  // Return the array of unique triplets.
  return tripletsArr;
};

// Better Solution
const threeSumSolution2 = (arr, expectedSum) => {
  // Initialize an array to store the unique triplets.
  const tripletsArr = [];
  // Use a Set to ensure the uniqueness of the triplets.
  const tripletsSet = new Set();

  // Iterate through the array with two nested loops to check all possible pairs.
  for (let i = 0; i < arr.length; i++) {
    // Use a Set to store the elements we have seen so far in the current iteration.
    const hashSet = new Set();

    for (let j = i + 1; j < arr.length; j++) {
      // Calculate the third element needed to complete the triplet.
      const thirdElement = expectedSum - (arr[i] + arr[j]);

      // If the third element is already in the hashSet, we found a valid triplet.
      if (hashSet.has(thirdElement)) {
        // Create a triplet array.
        const triplet = [arr[i], arr[j], thirdElement];

        // Sort the triplet to ensure a consistent order.
        triplet.sort((a, b) => a - b);

        // Convert the triplet to a JSON string and add it to the Set to ensure uniqueness.
        tripletsSet.add(JSON.stringify(triplet));
      }

      // Add the current element to the hashSet.
      hashSet.add(arr[j]);
    }
  }

  // Convert the unique triplets from the Set back to arrays and add them to the result array.
  for (const iterator of tripletsSet) {
    tripletsArr.push(JSON.parse(iterator));
  }

  // Return the array of unique triplets.
  return tripletsArr;
};

// Optimal Solution
const threeSumSolution3 = (arr, expectedSum) => {
  // Initialize an array to store the unique triplets.
  const tripletsArr = [];

  // Sort the array to facilitate the two-pointer approach.
  arr.sort((a, b) => a - b);

  // Iterate through the array, considering each element as a potential first element of a triplet.
  for (let i = 0; i < arr.length; i++) {
    // Skip duplicate elements to avoid duplicate triplets.
    if (i !== 0 && arr[i] === arr[i - 1]) continue;

    // Initialize two pointers: one starting just after the current element and one at the end of the array.
    let j = i + 1;
    let k = arr.length - 1;

    // Use the two-pointer technique to find pairs that, together with arr[i], sum up to the expected sum.
    while (j < k) {
      const sum = arr[i] + arr[j] + arr[k];

      // If the sum is less than the expected sum, move the left pointer to the right to increase the sum.
      if (sum < expectedSum) {
        j = j + 1;
        // If the sum is greater than the expected sum, move the right pointer to the left to decrease the sum.
      } else if (sum > expectedSum) {
        k = k - 1;
        // If the sum matches the expected sum, we found a valid triplet.
      } else {
        const triplet = [arr[i], arr[j], arr[k]];
        tripletsArr.push(triplet);

        // Move both pointers inward to look for new pairs.
        j = j + 1;
        k = k - 1;

        // Skip duplicate elements to avoid duplicate triplets.
        while (j < k && arr[j] === arr[j - 1]) {
          j = j + 1;
        }

        while (j < k && arr[k] === arr[k - 1]) {
          k = k - 1;
        }
      }
    }
  }

  // Return the array of unique triplets.
  return tripletsArr;
};

// Example 1 Input
const arr1 = [-1, 0, 1, 2, -1, -4];
const target1 = 0;

// Example 2 Input
const arr2 = [-1, 0, 1, 0];
const target2 = 0;

console.log("\n ------------- Solution 1: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The unique triplets are: ", threeSumSolution1(arr1, target1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The unique triplets are: ", threeSumSolution1(arr2, target2));

// Time Complexity: O(N^3)
// The code uses three nested loops to iterate through all possible triplets in the array.
// Each loop runs O(N) times, where N is the length of the array.
// Therefore, the overall time complexity is O(N^3).

// Space Complexity: O(T)
// The space complexity is determined by the space used to store the unique triplets.
// The tripletsSet can store up to O(N^3) unique triplets in the worst case, but since we are only storing unique triplets, the space complexity is better represented as O(T), where T is the number of unique triplets.
// Additionally, the tripletsArr array stores the unique triplets, contributing to the space complexity.
// Thus, the overall space complexity is O(T).

console.log("\n ------------- Solution 2: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The unique triplets are: ", threeSumSolution2(arr1, target1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The unique triplets are: ", threeSumSolution2(arr2, target2));

// Time Complexity: O(N^2)
// The outer loop runs N times, where N is the length of the array.
// The inner loop runs approximately N times for each iteration of the outer loop.
// The operations inside the inner loop (checking the hashSet and adding elements to it) are O(1) on average.
// Thus, the overall time complexity is: [ O(N^2) ]

// Space Complexity: O(N + T)
// The tripletsSet can store up to O(N^3) unique triplets in the worst case, but since we are only storing unique triplets, the space complexity is better represented as O(T), where T is the number of unique triplets.
// The hashSet used in each iteration of the outer loop can store up to N elements.
// Thus, the overall space complexity is: [ O(N + T) ]

console.log("\n ------------- Solution 3: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The unique triplets are: ", threeSumSolution3(arr1, target1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The unique triplets are: ", threeSumSolution3(arr2, target2));

// Time Complexity: O(N * logN) + O(N2), where N = size of the array.
// Reason: The pointer i, is running for approximately N times. And both the pointers j and k combined can run for approximately N times including the operation of skipping duplicates. So the total time complexity will be O(N2).

// Space Complexity: O(no. of quadruplets), This space is only used to store the answer. We are not using any extra space to solve this problem. So, from that perspective, space complexity can be written as O(1).
