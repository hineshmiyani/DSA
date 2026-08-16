/**
 * QUICK NOTES — Contains Duplicate
 *
 * Pattern:
 * Hashing / Set
 *
 * Core Idea:
 * Create a Set from the array.
 *
 * A Set only stores unique values, so if the array contains duplicates,
 * the size of the Set will be smaller than the original array length.
 *
 * Key Trick:
 * Compare:
 *
 *     new Set(nums).size
 *          vs
 *     nums.length
 *
 * If the Set size is smaller, duplicate values were removed.
 *
 * Time Complexity:
 * O(n)
 * - Creating the Set requires traversing all elements.
 *
 * Space Complexity:
 * O(n)
 * - In the worst case, all elements are unique and stored in the Set.
 *
 * ------------------------------------------------------------
 *
 * PROBLEM:
 *
 * Given an integer array `nums`, return `true` if any value appears
 * at least twice in the array.
 *
 * Return `false` if every element appears only once.
 *
 * Example 1:
 *
 * Input:
 * nums = [1, 2, 3, 1]
 *
 * Output:
 * true
 *
 * Explanation:
 * The original array has 4 elements, but the Set contains only
 * 3 unique elements because `1` appears twice.
 *
 * Example 2:
 *
 * Input:
 * nums = [1, 2, 3, 4]
 *
 * Output:
 * false
 *
 * Explanation:
 * The array contains 4 unique elements, so the Set also has 4 elements.
 *
 * ------------------------------------------------------------
 *
 * APPROACH:
 * Set Size Comparison
 *
 * Step 1:
 * Convert the entire array into a Set.
 *
 * A Set automatically removes duplicate values.
 *
 * Step 2:
 * Compare the size of the Set with the original array length.
 *
 * If:
 *
 *     Set size < Array length
 *
 * Then at least one duplicate existed.
 *
 * If:
 *
 *     Set size === Array length
 *
 * Then every element was unique.
 *
 * Step 3:
 * Return the result of this comparison directly.
 *
 * ------------------------------------------------------------
 *
 * WHY THIS WORKS:
 *
 * The original array contains every element, including duplicates.
 *
 * The Set contains only unique elements.
 *
 * Therefore:
 *
 * If duplicates exist:
 *
 *     nums.length > new Set(nums).size
 *
 * If no duplicates exist:
 *
 *     nums.length === new Set(nums).size
 *
 * Example:
 *
 * nums = [1, 2, 3, 1]
 *
 * nums.length = 4
 *
 * new Set(nums) = {1, 2, 3}
 *
 * new Set(nums).size = 3
 *
 * 3 < 4 -> true
 *
 * Therefore, a duplicate exists.
 *
 * ------------------------------------------------------------
 *
 * SIMPLE INTUITION:
 *
 * Remove duplicates using a Set.
 *
 * If the size becomes smaller, duplicates existed.
 *
 * ------------------------------------------------------------
 *
 * INTERVIEW TIP:
 *
 * This is a very concise alternative to manually maintaining a Set
 * while traversing the array.
 *
 * Manual approach:
 *
 *     for each number:
 *         if already seen -> duplicate
 *         otherwise add it
 *
 * Set-size approach:
 *
 *     unique count < original count -> duplicate exists
 *
 * Both approaches have:
 *
 * Time: O(n)
 * Space: O(n)
 *
 * The Set-size solution is shorter, while the manual approach can be
 * easier to explain when discussing the algorithm step-by-step.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    // Convert the array into a Set.
    // A Set automatically keeps only unique values.
    const uniqueNumbers = new Set(nums);

    // If the number of unique values is smaller than the original
    // array length, at least one duplicate must have been removed.
    return uniqueNumbers.size < nums.length;
};