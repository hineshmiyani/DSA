/**
 * QUICK NOTES — Two Sum II - Input Array Is Sorted
 *
 * Pattern:
 * Two Pointers
 *
 * Core Idea:
 * Since the array is sorted, use one pointer at each end.
 * Move the left pointer when the sum is too small and the right pointer
 * when the sum is too large.
 *
 * Key Trick:
 * The sorted order tells us exactly which pointer to move after
 * comparing the current sum with the target.
 *
 * Time / Space Complexity:
 * Time: O(n)
 * We move the left and right indices toward each other, and each index
 * moves at most n times.
 *
 * Space: O(1)
 * We only use a few variables for the two indices and current sum.
 *
 * Why I struggled:
 * The important part is understanding why we can safely discard one side
 * after comparing the current sum with the target. The sorted order makes
 * those pointer movements possible.
 */

/**
 * Problem:
 * Given a sorted array of numbers, find two numbers whose sum equals
 * the target and return their 1-based indices.
 *
 * Rules:
 * - The array is sorted in non-decreasing order.
 * - There is exactly one valid pair.
 * - The returned indices must be 1-based.
 *
 * Example:
 * numbers = [2, 7, 11, 15], target = 9
 *
 * Output:
 * [1, 2]
 *
 * --------------------------------------------------
 *
 * Approach: Two Pointers
 *
 * Step 1:
 * - Start one index at the beginning of the array.
 * - Start the other index at the end.
 *
 * Step 2:
 * - Calculate the sum of the two numbers.
 *
 * Step 3:
 * - If the sum is smaller than the target, move the left index forward.
 *   Because the array is sorted, moving right gives us a larger number.
 * - If the sum is larger than the target, move the right index backward.
 *   This gives us a smaller number.
 *
 * Step 4:
 * - When the sum equals the target, return both indices after converting
 *   them from 0-based to 1-based.
 *
 * --------------------------------------------------
 *
 * Why this works:
 * - The array is sorted, so moving left forward increases the sum.
 * - Moving right backward decreases the sum.
 * - Therefore, every pointer movement eliminates impossible pairs.
 *
 * Simple Intuition:
 * Start from both ends and use the sorted order to move toward the
 * correct pair.
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {

    let leftIndex = 0;
    let rightIndex = numbers.length - 1;

    while (leftIndex < rightIndex) {

        const currentSum = numbers[leftIndex] + numbers[rightIndex];

        if (currentSum < target) {
            // The sum is too small, so move left to get a larger number.
            leftIndex++;
        } else if (currentSum > target) {
            // The sum is too large, so move right to get a smaller number.
            rightIndex--;
        } else {
            // Convert 0-based indices to the required 1-based indices.
            return [leftIndex + 1, rightIndex + 1];
        }
    }

    // No valid pair found.
    return [-1, -1];
};