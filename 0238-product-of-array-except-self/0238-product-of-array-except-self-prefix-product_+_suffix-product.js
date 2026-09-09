/**
 * QUICK NOTES — Product of Array Except Self
 *
 * Pattern:
 * Prefix Product + Suffix Product
 *
 * Core Idea:
 * For every index, calculate:
 *     product of all elements to the left
 *     ×
 *     product of all elements to the right
 *
 * Example:
 * nums = [1, 2, 3, 4]
 *
 * Prefix Products:
 * [1, 1, 2, 6]
 *
 * Suffix Products:
 * [24, 12, 4, 1]
 *
 * Result:
 * [24, 12, 8, 6]
 *
 * Key Trick:
 * The product except self can be split into two independent parts:
 *
 *     left product × right product
 *
 * Time / Space Complexity:
 * Time: O(n)
 * Space: O(n)
 *
 * Note:
 * This solution uses O(n) extra space.
 * It can be optimized to O(1) extra space by using the output array
 * to store the prefix products and calculating suffix products on
 * the second pass.
 */

/**
 * Problem:
 * Given an integer array nums, return an array where each element
 * is the product of every element in nums except nums[i].
 *
 * Rules:
 * - Do not use division.
 * - Each result[i] should contain the product of all elements except nums[i].
 * - The solution should run in O(n) time.
 *
 * Example:
 * nums = [1, 2, 3, 4]
 *
 * Output:
 * [24, 12, 8, 6]
 *
 * ------------------------------------------------------------
 *
 * Approach: Prefix Product + Suffix Product
 * -----------------------------------------
 *
 * Step 1: Build the prefix product array.
 *   - prefixProduct[i] stores the product of all elements before index i.
 *   - For example:
 *       [1, 2, 3, 4]
 *       [1, 1, 2, 6]
 *
 * Step 2: Build the suffix product array.
 *   - suffixProduct[i] stores the product of all elements after index i.
 *   - For example:
 *       [1, 2, 3, 4]
 *       [24, 12, 4, 1]
 *
 * Step 3: Multiply the prefix and suffix products.
 *   - prefixProduct[i] × suffixProduct[i]
 *   - This gives the product of every element except nums[i].
 *
 * ------------------------------------------------------------
 *
 * Why this works:
 * - Everything before nums[i] is stored in prefixProduct[i].
 * - Everything after nums[i] is stored in suffixProduct[i].
 * - Multiplying them gives the product of every element except nums[i].
 *
 * Simple Intuition:
 * Product Except Self = Product on the left × Product on the right.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    // Stores the product of all elements before the current index.
    // Example: [1, 1, 2, 6]
    const prefixProduct = new Array(nums.length).fill(1);

    // Stores the product of all elements after the current index.
    // Example: [24, 12, 4, 1]
    const suffixProduct = new Array(nums.length).fill(1);

    // Build the prefix product array.
    for (let i = 1; i < nums.length; i++) {

        // Everything before nums[i] is the previous prefix product
        // multiplied by the element immediately before nums[i].
        prefixProduct[i] = prefixProduct[i - 1] * nums[i - 1];
    }

    // Build the suffix product array.
    for (let i = nums.length - 2; i >= 0; i--) {

        // Everything after nums[i] is the next suffix product
        // multiplied by the element immediately after nums[i].
        suffixProduct[i] = suffixProduct[i + 1] * nums[i + 1];
    }

    // Combine the products from both sides.
    for (let i = 0; i < nums.length; i++) {

        // Product except nums[i] =
        // product of elements before i × product of elements after i.
        prefixProduct[i] = prefixProduct[i] * suffixProduct[i];
    }

    // prefixProduct now contains the final answer.
    return prefixProduct;
};