/**
 * QUICK NOTES — Trapping Rain Water
 *
 * Pattern:
 * Prefix & Suffix Maximum
 *
 * Core Idea:
 * For every index, the amount of water that can be trapped depends on
 * the tallest bar on the left and the tallest bar on the right.
 *
 * Key Trick:
 * Water trapped at an index:
 *     min(leftMax[index], rightMax[index]) - height[index]
 *
 * We precompute the maximum height from the left and right for every index.
 *
 * Time / Space Complexity:
 * Time: O(n)
 * - We traverse the array three times:
 *   once to build leftMax, once to build rightMax,
 *   and once to calculate the trapped water.
 *
 * Space: O(n)
 * - leftMax and rightMax each store one value for every index.
 *
 * Why I struggled:
 * The key is understanding that the water level is limited by the
 * shorter of the tallest left and right boundaries.
 */

/**
 * Problem:
 * Given an array where height[index] represents the height of a bar,
 * calculate how much rainwater can be trapped between the bars.
 *
 * Rules:
 * - Water can only be trapped when there are boundaries on both sides.
 * - The water level is determined by the shorter boundary.
 * - The current bar's height must be subtracted from the water level.
 *
 * Example:
 * height = [4, 2, 0, 3, 2, 5]
 *
 * Output:
 * 9
 *
 * --------------------
 * Approach: Prefix & Suffix Maximum
 * --------------------
 *
 * Step 1: Build leftMax
 * - leftMax[index] stores the tallest bar from index 0 through index.
 *
 * Step 2: Build rightMax
 * - rightMax[index] stores the tallest bar from index through the end.
 *
 * Step 3: Calculate water trapped at each index
 * - The water level is the smaller of leftMax[index] and rightMax[index].
 * - Subtract height[index] to get the amount of trapped water.
 *
 * Step 4: Add the trapped water
 * - Add the water trapped at each index to the total.
 *
 * --------------------
 * Why this works:
 * - leftMax gives us the tallest possible boundary on the left.
 * - rightMax gives us the tallest possible boundary on the right.
 * - The shorter boundary determines how high water can rise.
 * - Subtracting the current bar gives the actual water trapped.
 *
 * Simple Intuition:
 * Find the tallest wall on both sides of each position;
 * the shorter wall determines how much water can sit there.
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {

    if (height.length === 0) return 0;

    let totalWaterTrapped = 0;

    const leftMax = new Array(height.length);
    const rightMax = new Array(height.length);

    leftMax[0] = height[0];

    /**
     * Build the prefix maximum.
     *
     * At every index, leftMax[index] represents the tallest bar
     * encountered from the beginning of the array up to this index.
     */
    for (let index = 1; index < height.length; index++) {
        leftMax[index] = Math.max(
            leftMax[index - 1],
            height[index]
        );
    }

    const lastIndex = height.length - 1;

    rightMax[lastIndex] = height[lastIndex];

    /**
     * Build the suffix maximum.
     *
     * At every index, rightMax[index] represents the tallest bar
     * encountered from this index through the end of the array.
     */
    for (let index = lastIndex - 1; index >= 0; index--) {
        rightMax[index] = Math.max(
            rightMax[index + 1],
            height[index]
        );
    }

    /**
     * The water level at each index is determined by the shorter
     * of the tallest left and right boundaries.
     *
     *     water = min(leftMax, rightMax) - height[index]
     *
     * Since the current height is included in both arrays,
     * the formula naturally produces 0 at boundary or peak positions.
     */
    for (let index = 0; index < height.length; index++) {

        const waterTrappedAtIndex =
            Math.min(leftMax[index], rightMax[index]) - height[index];

        totalWaterTrapped += waterTrappedAtIndex;
    }

    return totalWaterTrapped;
};