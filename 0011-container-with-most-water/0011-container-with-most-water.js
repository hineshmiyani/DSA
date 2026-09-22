/**
 * QUICK NOTES — Container With Most Water
 *
 * Pattern:
 * Two Pointers
 *
 * Core Idea:
 * Start with the widest possible container using the leftmost and rightmost
 * heights. Calculate the area, then move the pointer at the shorter height
 * because moving the taller height cannot produce a better area.
 *
 * Key Trick:
 * Always move the pointer pointing to the shorter line.
 *
 * Time / Space Complexity:
 * Time: O(n)
 * - Each pointer moves toward the other at most n times, so the array is
 *   traversed only once.
 *
 * Space: O(1)
 * - Only a constant number of variables are used; no extra data structure
 *   grows with the input size.
 *
 * Why I struggled:
 * The important part is understanding why we move the shorter pointer.
 * Moving the taller pointer would decrease the width while the shorter
 * height still limits the container, so the area cannot improve.
 */

/**
 * Problem:
 * Given an array of heights where each value represents a vertical line,
 * find the two lines that together with the x-axis form a container
 * containing the most water.
 *
 * Rules:
 * - Choose two different indices.
 * - The width is the distance between the two indices.
 * - The height of the container is limited by the shorter line.
 * - Return the maximum possible area.
 *
 * Example:
 * height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
 *
 * The maximum area is formed by heights 8 and 7:
 * width = 8 - 1 = 7
 * height = min(8, 7) = 7
 * area = 7 × 7 = 49
 *
 * Output:
 * 49
 *
 * ————————————————————
 * Approach: Two Pointers
 * ————————————————————
 *
 * Step 1:
 * - Place one pointer at the beginning and one at the end.
 * - This gives us the maximum possible width.
 *
 * Step 2:
 * - Calculate the current container area using:
 *   width × minimum(leftHeight, rightHeight)
 *
 * Step 3:
 * - Move the pointer at the shorter height.
 * - The shorter height limits the current container, so keeping it while
 *   reducing the width cannot produce a larger area.
 *
 * Step 4:
 * - Continue until both pointers meet.
 * - Keep track of the largest area found.
 *
 * ————————————————————
 * Why this works:
 *
 * - The area is limited by the shorter of the two heights.
 * - Moving the taller pointer only decreases the width while the limiting
 *   height remains unchanged or may become smaller.
 * - Therefore, the only pointer worth moving is the one at the shorter height.
 * - Every possible useful boundary is considered efficiently.
 *
 * Simple Intuition:
 * Start with the widest container and keep replacing the shorter wall,
 * because the shorter wall is the bottleneck.
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {

    let maxWaterArea = 0;

    let leftPointer = 0;
    let rightPointer = height.length - 1;

    while (leftPointer < rightPointer) {

        /**
         * The container width is the distance between the two pointers.
         * The container height is limited by the shorter of the two lines.
         */
        const containerWidth = rightPointer - leftPointer;
        const containerHeight = Math.min(
            height[leftPointer],
            height[rightPointer]
        );

        const currentWaterArea = containerWidth * containerHeight;

        maxWaterArea = Math.max(maxWaterArea, currentWaterArea);

        // Move the shorter line because it is the limiting factor.
        if (height[leftPointer] <= height[rightPointer]) {
            leftPointer++;
        } else {
            rightPointer--;
        }
    }

    return maxWaterArea;
};