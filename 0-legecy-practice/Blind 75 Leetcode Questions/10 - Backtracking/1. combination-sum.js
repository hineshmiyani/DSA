/**
 * @article  : https://algo.monster/liteproblems/39
 * @article  : https://takeuforward.org/data-structure/combination-sum-1/
 * @question : https://leetcode.com/problems/combination-sum
 * @question : https://neetcode.io/problems/combination-target-sum
 */

/*
  ✅ Problem Statement: 

  Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.
  
  The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.
  
  The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

  Example 1:
  Input: candidates = [2,3,6,7], target = 7
  Output: [[2,2,3],[7]]
  Explanation:
  2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
  7 is a candidate, and 7 = 7.
  These are the only two combinations.
  
  Example 2:
  Input: candidates = [2,3,5], target = 8
  Output: [[2,2,2,2],[2,3,3],[3,5]]
  
  Example 3:
  Input: candidates = [2], target = 1
  Output: []

*/

// # Optimal Solution

/*

  # Step-by-step approach:

  The `combinationSum` function aims to find all unique combinations of numbers from the `candidates` array that sum up to the `target` value. 
  
  This is a classic backtracking problem where we explore all possible combinations and backtrack when the current combination exceeds the target or when we have considered all candidates.

  Approach:

  1. Initialize an empty array `result` to store the final combinations.

  2. Initialize an empty array `currentCombination` to store the current combination being explored.

  3. Call the helper function `findCombinations` starting from index 0.

  4. In the `findCombinations` function:
     - If the index is out of bounds (i.e., greater than or equal to the length of `candidates`), return.
     - If the `target` is 0, it means the current combination sums up to the target. Push a copy of `currentCombination` to `result` and return.
     - If the current candidate at `index` is less than or equal to the `target`, include it in the `currentCombination` and recursively call `findCombinations` with the same index (allowing the same candidate to be reused) and the updated target (subtracting the current candidate's value).
     - After exploring the inclusion of the current candidate, backtrack by removing the last added candidate from `currentCombination`.
     - Finally, call `findCombinations` with the next index to explore combinations without the current candidate.

  5. The `combinationSum` function returns the `result` array containing all unique combinations that sum up to the target.

*/

/**
 * Finds all unique combinations in `candidates` where the candidate numbers sum to `target`.
 * Each number in `candidates` may be used an unlimited number of times in the combination.
 *
 * @param {number[]} candidates - The array of candidate numbers.
 * @param {number} target - The target sum for the combinations.
 * @returns {number[][]} - A list of all unique combinations that sum to the target.
 */
const combinationSum = (candidates, target) => {
  const result = []; // Array to store the final list of combinations
  const currentCombination = []; // Array to store the current combination being explored

  // Start the backtracking process from the first index
  findCombinations(0, candidates, target, currentCombination, result);

  return result; // Return the list of all valid combinations
};

/**
 * Helper function to find all combinations that sum to the target using backtracking.
 *
 * @param {number} index - The current index in the `candidates` array.
 * @param {number[]} candidates - The array of candidate numbers.
 * @param {number} target - The remaining target sum to be achieved.
 * @param {number[]} currentCombination - The current combination being built.
 * @param {number[][]} result - The array to store all valid combinations.
 */
const findCombinations = (
  index,
  candidates,
  target,
  currentCombination,
  result
) => {
  // Base case: If the index is out of bounds, return
  if (index >= candidates.length) {
    return;
  }

  // Base case: If the target is achieved, add the current combination to the result
  if (target === 0) {
    result.push([...currentCombination]); // Use spread operator to create a copy of the current combination
    return;
  }

  // If the current candidate can be part of the combination (i.e., it is less than or equal to the target)
  if (candidates[index] <= target) {
    currentCombination.push(candidates[index]); // Add the candidate to the current combination

    // Recursively call to continue building the combination with the same index
    findCombinations(
      index,
      candidates,
      target - candidates[index],
      currentCombination,
      result
    );

    currentCombination.pop(); // Backtrack by removing the last added candidate
  }

  // Move to the next candidate and continue the search
  findCombinations(index + 1, candidates, target, currentCombination, result);
};

// Example 1 Input
const candidates1 = [2, 3, 6, 7];
const target1 = 7;

// Example 2 Input
const candidates2 = [2, 3, 5];
const target2 = 8;

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("Combinations are : ", combinationSum(candidates1, target1));
console.log("\n -------------Example 2: ------------- \n");
console.log("Combinations are : ", combinationSum(candidates2, target2));

// # Time Complexity: O(2^t)
// The time complexity of the combination sum problem is O(2^t), where `t` is the target value.
// This is because, in the worst case, each candidate can be chosen multiple times to reach the target, leading to an exponential number of combinations to explore.
// Additionally, the backtracking process involves exploring all possible combinations of candidates.

// # Space Complexity: O(t)
// The space complexity is O(t), where `t` is the target value.
// This is due to the recursion stack depth, which can go up to the target value in the worst case.
// Additionally, the space required to store the current combination being explored is proportional to the target value.
