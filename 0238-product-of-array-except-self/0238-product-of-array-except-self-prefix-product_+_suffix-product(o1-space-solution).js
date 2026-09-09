/**
 * QUICK NOTES — Product of Array Except Self
 *
 * Pattern:
 * Prefix Product + Running Suffix Product (O1 Space Solution)
 *
 * Core Idea:
 * Use the result array to first store the product of all elements
 * to the left of each index.
 *
 * Then, traverse from right to left and maintain a running
 * suffix product. Multiply it with the existing prefix product
 * to get the final answer.
 *
 * Example:
 * nums = [1, 2, 3, 4]
 *
 * After Prefix Product:
 * result = [1, 1, 2, 6]
 *
 * After Suffix Product:
 * result = [24, 12, 8, 6]
 *
 * Key Trick:
 * We don't need a separate suffix array.
 * `suffixProduct` keeps track of the product of all elements
 * to the right of the current index.
 *
 * Time / Space Complexity:
 * Time: O(n)
 * Space: O(1) extra space
 *
 * Note:
 * The `result` array does not count as extra space because it is
 * required as the output array.
 */

/**
 * Problem:
 * Given an integer array nums, return an array where each element
 * is the product of every element in nums except nums[i].
 *
 * Rules:
 * - Do not use division.
 * - Each result[i] should contain the product of every element except nums[i].
 * - The solution should run in O(n) time.
 * - Use O(1) extra space.
 *
 * Example:
 * nums = [1, 2, 3, 4]
 *
 * Output:
 * [24, 12, 8, 6]
 *
 * ------------------------------------------------------------
 *
 * Approach: Prefix Product + Running Suffix Product
 * -------------------------------------------------
 *
 * Step 1: Build prefix products inside the result array.
 *   - result[i] stores the product of all elements before index i.
 *   - For [1, 2, 3, 4]:
 *       result = [1, 1, 2, 6]
 *
 * Step 2: Traverse from right to left.
 *   - Maintain a running `suffixProduct`.
 *   - `suffixProduct` represents the product of all elements
 *     after the current index.
 *
 * Step 3: Combine both sides.
 *   - result[i] already contains the prefix product.
 *   - Multiply it by suffixProduct.
 *   - This gives the product of every element except nums[i].
 *
 * Step 4: Update suffixProduct.
 *   - Include nums[i + 1] in suffixProduct before calculating result[i].
 *   - This ensures suffixProduct contains every element to the
 *     right of the current index.
 *
 * ------------------------------------------------------------
 *
 * Why this works:
 * - result[i] stores the product of everything to the left.
 * - suffixProduct stores the product of everything to the right.
 * - Multiplying them gives the product of everything except nums[i].
 * - We reuse the result array instead of creating separate
 *   prefix and suffix arrays.
 *
 * Simple Intuition:
 * Store the left product in result, then multiply it by the
 * running right product while traversing from right to left.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    // Store the product of all elements before each index.
    // Example: [1, 2, 3, 4] → [1, 1, 2, 6]
    const result = new Array(nums.length).fill(1);

    // Build the prefix products.
    for (let i = 1; i < nums.length; i++) {

        // result[i] contains the product of all elements
        // before the current index.
        result[i] = result[i - 1] * nums[i - 1];
    }

    // Stores the product of all elements to the right
    // of the current index.
    let suffixProduct = 1;

    // Traverse from right to left so we can maintain
    // the product of elements on the right.
    for (let i = nums.length - 2; i >= 0; i--) {

        // Include the element immediately to the right
        // in the running suffix product.
        suffixProduct = suffixProduct * nums[i + 1];

        // result[i] already contains the prefix product.
        // Multiply it by the suffix product to get
        // the product of every element except nums[i].
        result[i] = result[i] * suffixProduct;
    }

    // Return the final product for every index.
    return result;
};