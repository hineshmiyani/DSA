/**
 * QUICK NOTES — 3Sum
 *
 * Pattern:
 * Sorting + Two Pointers
 *
 * Core Idea:
 * Sort the array first. Fix one number and use two pointers to find
 * the other two numbers whose sum makes the total equal to 0.
 *
 * Key Trick:
 * After sorting, if the current sum is too small, move the left pointer
 * forward. If the sum is too large, move the right pointer backward.
 * Skip duplicate values to avoid duplicate triplets.
 *
 * Time / Space Complexity:
 * Time: O(n²)
 * - Sorting takes O(n log n).
 * - For each firstIndex, the two pointers scan the remaining portion
 *   of the array in O(n).
 * - Since this two-pointer scan runs for O(n) possible firstIndex values,
 *   the total is O(n²).
 *
 * Space: O(1) extra space
 * - Apart from the output array, the solution only uses a few pointer
 *   and temporary variables.
 * - The sorting implementation may use additional internal memory
 *   depending on the JavaScript engine.
 *
 * Why I struggled:
 * The tricky parts are understanding why sorting enables the two-pointer
 * movement and remembering to skip duplicates at both the first index
 * and the left/right pointers.
 */

/**
 * Problem:
 * Given an integer array, find all unique triplets [a, b, c] such that
 * a + b + c = 0.
 *
 * Rules:
 * - Each triplet must contain three different indices.
 * - The same triplet should not appear more than once.
 * - The order of triplets does not matter.
 *
 * Example:
 * nums = [-1, 0, 1, 2, -1, -4]
 *
 * After sorting:
 * [-4, -1, -1, 0, 1, 2]
 *
 * Valid triplets:
 * [-1, -1, 2]
 * [-1, 0, 1]
 *
 * Output:
 * [[-1, -1, 2], [-1, 0, 1]]
 *
 * --------------------------------------------------
 *
 * Approach: Sorting + Two Pointers
 *
 * Step 1:
 * - Sort the array.
 * - Sorting allows us to determine which pointer to move based on
 *   whether the current sum is smaller or larger than 0.
 *
 * Step 2:
 * - Fix nums[firstIndex] as the first number of the triplet.
 * - Use leftPointer = firstIndex + 1 and rightPointer = arrayLength - 1
 *   to search for the remaining two numbers.
 *
 * Step 3:
 * - If tripletSum < 0, move leftPointer forward because we need a larger
 *   value to increase the sum.
 * - If tripletSum > 0, move rightPointer backward because we need a smaller
 *   value to decrease the sum.
 *
 * Step 4:
 * - When tripletSum === 0, store the triplet.
 * - Move both pointers and skip duplicate values so the same triplet
 *   is not added again.
 *
 * --------------------------------------------------
 *
 * Why this works:
 * - Sorting makes the array ordered, allowing predictable pointer movement.
 * - Fixing one number reduces the problem to finding a two-number sum.
 * - The two-pointer technique checks the remaining numbers in linear time
 *   for each fixed firstIndex.
 * - Skipping duplicates guarantees that only unique triplets are returned.
 *
 * Simple Intuition:
 * Fix one number, then use two pointers to find two numbers that complete
 * the sum to zero while skipping duplicates.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

    const result = [];

    nums.sort((a, b) => a - b);

    const arrayLength = nums.length;

    for (let firstIndex = 0; firstIndex < arrayLength; firstIndex++) {

        // Skip duplicate first values to avoid duplicate triplets.
        if (firstIndex !== 0 && nums[firstIndex] === nums[firstIndex - 1]) {
            continue;
        }

        let leftPointer = firstIndex + 1;
        let rightPointer = arrayLength - 1;

        /**
         * Since the array is sorted:
         *
         * - Moving leftPointer forward increases the sum.
         * - Moving rightPointer backward decreases the sum.
         *
         * This lets us find the required pair in O(n) time for
         * each fixed firstIndex.
         */
        while (leftPointer < rightPointer) {

            const tripletSum =
                nums[firstIndex] +
                nums[leftPointer] +
                nums[rightPointer];

            if (tripletSum < 0) {

                // The sum is too small, so increase the left value.
                leftPointer = leftPointer + 1;

            } else if (tripletSum > 0) {

                // The sum is too large, so decrease the right value.
                rightPointer = rightPointer - 1;

            } else {

                // Found a valid triplet whose sum is exactly 0.
                result.push([
                    nums[firstIndex],
                    nums[leftPointer],
                    nums[rightPointer]
                ]);

                leftPointer = leftPointer + 1;
                rightPointer = rightPointer - 1;

                // Skip duplicate left values to avoid duplicate triplets.
                while (
                    leftPointer < rightPointer &&
                    nums[leftPointer] === nums[leftPointer - 1]
                ) {
                    leftPointer = leftPointer + 1;
                }

                // Skip duplicate right values to avoid duplicate triplets.
                while (
                    rightPointer > leftPointer &&
                    nums[rightPointer] === nums[rightPointer + 1]
                ) {
                    rightPointer = rightPointer - 1;
                }
            }
        }
    }

    // Return all unique triplets whose sum is 0.
    return result;
};