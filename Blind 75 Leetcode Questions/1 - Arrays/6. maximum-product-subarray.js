/**
 * @article  : https://takeuforward.org/data-structure/maximum-product-subarray-in-an-array/
 * @question : https://leetcode.com/problems/maximum-product-subarray/
 */

/*
  ✅ Problem Statement: 

  Given an array that contains both negative and positive integers, find the maximum product subarray.

  Example 1:
  Input: Nums = [1,2,3,4,5,0]
  Output: 120
  Explanation: In the given array, we can see 1×2×3×4×5 gives maximum product value.

  Example 2:
  Input: Nums = [1,2,-3,0,-4,-5]
  Output: 20
  Explanation: In the given array, we can see (-4)×(-5) gives maximum product value.

*/

// Brute-force Solution
// Function to find the maximum product subarray
const maxProductSubArraySolution1 = (arr) => {
  // Initialize maxProduct to the smallest possible safe integer value
  // This ensures that any product found will be larger than this initial value
  let maxProduct = Number.MIN_SAFE_INTEGER;

  // Outer loop to set the starting point of the subarray
  for (let i = 0; i < arr.length; i++) {
    // Initialize product to 1 for each new starting point
    let product = 1;

    // Inner loop to extend the subarray from the starting point
    for (let j = i; j < arr.length; j++) {
      // Multiply the current element to the product
      product = product * arr[j];
      // Update maxProduct if the current product is greater than the current maxProduct
      maxProduct = Math.max(maxProduct, product);
    }
  }

  // Return the maximum product found
  return maxProduct;
};

// Optimal Solution
const maxProductSubArraySolution2 = (arr) => {
  // Initialize maxProduct to the smallest possible safe integer value
  // This will store the maximum product found so far
  let maxProduct = Number.MIN_SAFE_INTEGER;

  // Initialize prefixProduct and suffixProduct to 1
  // These will store the product of elements from the start and end of the array respectively
  let prefixProduct = 1;
  let suffixProduct = 1;

  // Loop through the array
  for (let i = 0; i < arr.length; i++) {
    // If prefixProduct is zero, reset it to 1
    // This is because multiplying by zero will nullify the product
    if (prefixProduct === 0) {
      prefixProduct = 1;
    }

    // If suffixProduct is zero, reset it to 1
    // This is because multiplying by zero will nullify the product
    if (suffixProduct === 0) {
      suffixProduct = 1;
    }

    // Multiply prefixProduct by the current element
    prefixProduct = prefixProduct * arr[i];
    // Multiply suffixProduct by the element from the end of the array
    suffixProduct = suffixProduct * arr[arr.length - i - 1];

    // Update maxProduct with the maximum value among maxProduct, prefixProduct, and suffixProduct
    maxProduct = Math.max(maxProduct, prefixProduct, suffixProduct);
  }

  // Return the maximum product found
  return maxProduct;
};
// Example 1 Input
const arr1 = [1, 2, 3, 4, 5, 0];

// Example 2 Input
const arr2 = [1, 2, -3, 0, -4, -5];

console.log("\n ------------- Solution 1: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The maximum product subarray: ",
  maxProductSubArraySolution1(arr1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The maximum product subarray: ",
  maxProductSubArraySolution1(arr2)
);

// Time Complexity: O(N2)
// Reason: We are using two nested loops

// Space Complexity: O(1)
// Reason: No extra data structures are used for computation

console.log("\n ------------- Solution 2: ------------- \n");
console.log("\n ------------- Example 1: ------------- \n");
console.log(
  "The maximum product subarray: ",
  maxProductSubArraySolution2(arr1)
);
console.log("\n ------------- Example 2: ------------- \n");
console.log(
  "The maximum product subarray: ",
  maxProductSubArraySolution2(arr2)
);

// Time Complexity: O(N), N = size of the given array.
// Reason: We are using a single loop that runs for N times.

// Space Complexity: O(1) as No extra data structures are used for computation.
