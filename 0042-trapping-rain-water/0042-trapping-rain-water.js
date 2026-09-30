/**
 * QUICK NOTES — Trapping Rain Water
 *
 * Pattern:
 * Two Pointers
 *
 * Core Idea:
 * Use two pointers from both ends while tracking the highest wall
 * encountered from the left and right.
 *
 * Key Trick:
 * Always process the side with the smaller current height.
 * That side's maximum boundary is already determined by the opposite
 * pointer because the opposite side has an equal or taller current wall.
 *
 * Time / Space Complexity:
 * Time: O(n)
 * - Each pointer moves toward the center and every index is processed
 *   at most once.
 *
 * Space: O(1)
 * - Only a few variables are used; no extra array is required.
 *
 * Why I struggled:
 * The tricky part is understanding why we can safely process the shorter
 * side without knowing the complete maximum boundary on the other side.
 */

/**
 * Problem:
 * Given an array where height[index] represents the height of a bar,
 * calculate how much rainwater can be trapped between the bars.
 *
 * Rules:
 * - Water can only be trapped between taller boundaries.
 * - The shorter boundary determines how much water can be trapped.
 * - We need to calculate the total trapped water.
 *
 * Example:
 * height = [4, 2, 0, 3, 2, 5]
 *
 * Output:
 * 9
 *
 * --------------------
 * Approach: Two Pointers
 * --------------------
 *
 * Step 1: Start two pointers
 * - leftPointer starts at the beginning.
 * - rightPointer starts at the end.
 *
 * Step 2: Track the highest wall from each side
 * - maxLeftHeight stores the tallest wall encountered from the left.
 * - maxRightHeight stores the tallest wall encountered from the right.
 *
 * Step 3: Process the shorter side
 * - If the left wall is shorter, process the left side.
 * - Otherwise, process the right side.
 *
 * Step 4: Calculate trapped water
 * - If the current wall is lower than the maximum wall on that side,
 *   the difference represents trapped water.
 * - Otherwise, update that side's maximum height.
 *
 * --------------------
 * Why this works:
 * - The shorter current boundary determines which side can be processed.
 * - When the left height is smaller, the right side has a wall at least
 *   as tall as the left wall, so the left side's trapped water is limited
 *   by maxLeftHeight.
 * - The same reasoning applies symmetrically to the right side.
 *
 * Simple Intuition:
 * Always process the shorter wall because the shorter side determines
 * how much water can be trapped there.
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {

    let totalWaterTrapped = 0;

    let maxLeftHeight = 0;
    let maxRightHeight = 0;

    let leftPointer = 0;
    let rightPointer = height.length - 1;

    while (leftPointer < rightPointer) {

        if (height[leftPointer] < height[rightPointer]) {

            /**
             * The left side is shorter, so its trapped water is determined
             * by the tallest wall encountered from the left.
             */
            if (maxLeftHeight > height[leftPointer]) {
                totalWaterTrapped += maxLeftHeight - height[leftPointer];
            } else {
                maxLeftHeight = height[leftPointer];
            }

            leftPointer++;

        } else {

            /**
             * The right side is shorter or equal, so its trapped water
             * is determined by the tallest wall encountered from the right.
             */
            if (maxRightHeight > height[rightPointer]) {
                totalWaterTrapped += maxRightHeight - height[rightPointer];
            } else {
                maxRightHeight = height[rightPointer];
            }

            rightPointer--;
        }
    }

    return totalWaterTrapped;
};