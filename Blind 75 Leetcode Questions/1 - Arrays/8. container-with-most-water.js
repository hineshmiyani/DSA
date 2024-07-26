/**
 * @article  : https://studyalgorithms.com/array/container-with-maximum-water/
 * @article  : https://www.designgurus.io/viewer/document/grokking-the-coding-interview/651ce083d89b9a519940a9cd
 * @question : https://leetcode.com/problems/container-with-most-water/
 */

/*
  ✅ Problem Statement: 

  You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
  Find two lines that together with the x-axis form a container, such that the container contains the most water.
  Return the maximum amount of water a container can store.
  Notice that you may not slant the container.

  Example 1:
  Input: height = [1,8,6,2,5,4,8,3,7]
  Output: 49
  Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

  Example 2:
  Input: height = [1,1]
  Output: 1

*/

// Brute-force Solution
/**
 * Calculates the maximum area of water that can be contained between two lines.
 * This function uses a brute-force approach to check all possible pairs of lines.
 */
const maxAreaSolution1 = (height) => {
  // Initialize the maximum contained water area to the smallest possible safe integer value
  let maxContainedWaterArea = Number.MIN_SAFE_INTEGER;

  // Iterate through each line
  for (let i = 0; i < height.length; i++) {
    // Iterate through each subsequent line to form pairs
    for (let j = i + 1; j < height.length; j++) {
      // Calculate the area of water contained between the two lines
      // Area is determined by the width (distance between lines) and the height (shorter line)
      const containedWaterArea = (j - i) * Math.min(height[i], height[j]);

      // Update the maximum contained water area if the current area is larger
      maxContainedWaterArea = Math.max(
        containedWaterArea,
        maxContainedWaterArea
      );
    }
  }

  // Return the maximum contained water area found
  return maxContainedWaterArea;
};

// Optimal Solution
/**
 * Function to calculate the maximum area of water that can be contained
 * between two lines from the given array of heights.
 */
const maxAreaSolution2 = (height) => {
  // Initialize the maximum contained water area to the smallest safe integer value
  let maxContainedWaterArea = Number.MIN_SAFE_INTEGER;

  // Initialize two pointers, one at the beginning and one at the end of the array
  let left = 0;
  let right = height.length - 1;

  // Loop until the two pointers meet
  while (left < right) {
    // Calculate the area of water contained between the two lines
    // Area is determined by the width (distance between pointers) and the height (minimum of the two heights)
    const containedWaterArea =
      (right - left) * Math.min(height[left], height[right]);

    // Update the maximum contained water area if the current area is larger
    maxContainedWaterArea = Math.max(maxContainedWaterArea, containedWaterArea);

    // Move the pointer pointing to the shorter line inward to potentially find a larger area
    if (height[left] < height[right]) {
      left = left + 1;
    } else {
      right = right - 1;
    }
  }

  // Return the maximum contained water area found
  return maxContainedWaterArea;
};

// Example 1 Input
const height1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];

// Example 2 Input
const height2 = [1, 1];

console.log("\n ------------- Solution 1: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The unique triplets are: ", maxAreaSolution1(height1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The unique triplets are: ", maxAreaSolution1(height2));

// Time Complexity: (O(n^2)) due to the nested loops iterating through all pairs of lines.
// Space Complexity: (O(1)) as only a constant amount of extra space is used.

console.log("\n ------------- Solution 2: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log("The unique triplets are: ", maxAreaSolution2(height1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("The unique triplets are: ", maxAreaSolution2(height2));

// Time Complexity: (O(n)), where (n) is the length of the height array. This is because each element is processed at most once.
// Reason: The function uses a two-pointer approach to traverse the array from both ends towards the center. Each iteration of the while loop moves one of the pointers inward. Since each pointer can only move from one end of the array to the other, the total number of iterations is proportional to the length of the array.

// Space Complexity: (O(1)), which means the space required does not grow with the input size.
// Reason: The function uses a constant amount of extra space regardless of the input size. The variables maxContainedWaterArea, left, and right use a fixed amount of space.
