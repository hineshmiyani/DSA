/**
 * @article  : https://takeuforward.org/arrays/product-of-array-except-itself/
 * @article  : https://www.designgurus.io/viewer/document/grokking-the-coding-interview/651ba46a5eb5b32e7288e97f
 * @question : https://leetcode.com/problems/product-of-array-except-self/
 */

/*
  ✅ Problem Statement: 

  Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
  The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
  You must write an algorithm that runs in O(n) time and without using the division operation.

  Example 1:
  Input: nums = [1,2,3,4]
  Output: [24,12,8,6]

  Example 2:
  Input: nums = [-1,1,0,-3,3]
  Output: [0,0,9,0,0]

*/

// Brute-force Solution
/**
 * Function to calculate the product of all elements in the array except the current element.
 * This implementation uses a nested loop to achieve the result.
 */
const productExceptSelfSolution1 = (arr) => {
  // Initialize an empty array to store the result
  const result = [];

  // Iterate over each element in the input array
  for (let i = 0; i < arr.length; i++) {
    // Initialize the product as 1 for each element
    let product = 1;

    // Iterate over the array again to calculate the product of all elements except the current one
    for (let j = 0; j < arr.length; j++) {
      // Skip the current element
      if (i !== j) {
        // Multiply the product by the current element
        product = product * arr[j];
      }
    }

    // Handle the case where the product might be -0, which should be converted to 0
    product = product === -0 ? 0 : product;

    // Push the calculated product to the result array
    result.push(product);
  }

  // Return the result array containing the products
  return result;
};

/**
 * Computes the product of all elements in the array except the element at the current index.
 * This implementation uses prefix and suffix arrays to achieve the result in O(n) time complexity.
 */
const productExceptSelfSolution2 = (arr) => {
  // Initialize prefix and suffix arrays with 1s
  const prefix = new Array(arr.length).fill(1);
  const suffix = new Array(arr.length).fill(1);

  // Initialize the result array with 1s
  const result = new Array(arr.length).fill(1);

  // Calculate prefix products
  for (let index = 1; index < arr.length; index++) {
    // Each element in prefix array is the product of all previous elements in the input array
    prefix[index] = prefix[index - 1] * arr[index - 1];
  }

  // Calculate suffix products
  for (let index = arr.length - 2; index >= 0; index--) {
    // Each element in suffix array is the product of all subsequent elements in the input array
    suffix[index] = suffix[index + 1] * arr[index + 1];
  }

  // Calculate the result by multiplying prefix and suffix products
  for (let index = 0; index < arr.length; index++) {
    // Each element in the result array is the product of the corresponding elements in prefix and suffix arrays
    result[index] =
      prefix[index] * suffix[index] !== -0 ? prefix[index] * suffix[index] : 0;
  }

  return result;
};

/**
 * Approach:
 * ----------
 * We break the problem into TWO passes:
 *
 * 1) Prefix pass:
 *    For each index i, store the product of all elements
 *    to the LEFT of i.
 *
 * 2) Suffix pass:
 *    Traverse from the right and multiply each index
 *    with the product of all elements to the RIGHT of i.
 *
 * Final result:
 * productExceptSelf[i] = (product of elements to the left of i)
 *                      * (product of elements to the right of i)
 *
 * This avoids division and keeps the solution optimal.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1) extra space (output array excluded)
 */
const productExceptSelfSolution3 = (nums) => {
  // Step 1: Create result array initialized with 1
  // This array will store the final answer
  // Initializing with 1 allows safe multiplication later
  const productArray = Array(nums.length).fill(1);

  /**
   * PREFIX PASS
   * -----------
   * productArray[i] will contain the product of all elements
   * to the LEFT of index i.
   *
   * Example:
   * nums = [1, 2, 3, 4]
   *
   * After prefix pass:
   * productArray = [1, 1, 2, 6]
   *
   * Explanation:
   * index 0 -> no left elements -> 1
   * index 1 -> 1
   * index 2 -> 1 * 2 = 2
   * index 3 -> 1 * 2 * 3 = 6
   */
  for (let i = 1; i < nums.length; i++) {
    productArray[i] = productArray[i - 1] * nums[i - 1];
  }

  /**
   * SUFFIX PASS
   * -----------
   * We now multiply each index with the product of all elements
   * to the RIGHT of that index.
   *
   * Instead of using another array (which would increase space),
   * we use a single variable `suffix` to keep track of the
   * running product from the right.
   */
  let suffix = 1;

  /**
   * Traverse from right to left
   *
   * Example continuation:
   * nums = [1, 2, 3, 4]
   * productArray (from prefix) = [1, 1, 2, 6]
   *
   * Iteration steps:
   *
   * i = 2:
   *   suffix = 1 * 4 = 4
   *   productArray[2] = 2 * 4 = 8
   *
   * i = 1:
   *   suffix = 4 * 3 = 12
   *   productArray[1] = 1 * 12 = 12
   *
   * i = 0:
   *   suffix = 12 * 2 = 24
   *   productArray[0] = 1 * 24 = 24
   *
   * Final output:
   * [24, 12, 8, 6]
   */
  for (let i = nums.length - 2; i >= 0; i--) {
    suffix = suffix * nums[i + 1];
    productArray[i] = productArray[i] * suffix;
  }

  // Step 3: Return the final result
  return productArray;
};

// Example 1 Input
const arr1 = [1, 2, 3, 4];

// Example 2 Input
const arr2 = [-1, 1, 0, -3, 3];

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "Product of array except self is : ",
  productExceptSelfSolution1(arr1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "Product of array except self is : ",
  productExceptSelfSolution1(arr2)
);

// Time Complexity: O(n^2)
// Space Complexity: O(1)

console.log("\n\n ------------- Solution 2: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "Product of array except self is : ",
  productExceptSelfSolution2(arr1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "Product of array except self is : ",
  productExceptSelfSolution2(arr2)
);

// Time Complexity: O(n)
// Space Complexity: O(n) + O(n)

console.log("\n\n ------------- Solution 3: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "Product of array except self is : ",
  productExceptSelfSolution3(arr1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "Product of array except self is : ",
  productExceptSelfSolution3(arr2)
);

// Time Complexity: O(n)
// Space Complexity: O(1) // The output array does not count as extra space for space complexity analysis.
