/**
 * QUICK NOTES — Longest Consecutive Sequence
 *
 * Pattern:
 * Sorting + Greedy / Sequence Tracking
 *
 * Core Idea:
 * Sort the numbers first so consecutive values appear next to each other.
 * Then scan the sorted array and keep track of the current consecutive
 * streak and the longest streak found so far.
 *
 * Key Trick:
 * Skip duplicate numbers because duplicates should not increase the
 * consecutive sequence length.
 *
 * Example:
 * nums = [100, 4, 200, 1, 3, 2]
 *
 * After sorting:
 * [1, 2, 3, 4, 100, 200]
 *
 * Longest consecutive sequence:
 * [1, 2, 3, 4] → length = 4
 *
 * Time Complexity:
 * O(n log n)
 *
 * Sorting takes O(n log n), and the single scan afterward takes O(n).
 * Therefore, the overall complexity is O(n log n).
 *
 * Space Complexity:
 * O(log n) to O(n), depending on the JavaScript sorting implementation.
 * The algorithm itself uses O(1) extra space apart from the sorting
 * implementation.
 */

/**
 * Problem:
 * Given an unsorted array of integers, return the length of the longest
 * consecutive elements sequence.
 *
 * A consecutive sequence means every number is exactly 1 greater than
 * the previous number.
 *
 * Example:
 * nums = [100, 4, 200, 1, 3, 2]
 *
 * Sorted:
 * [1, 2, 3, 4, 100, 200]
 *
 * Longest consecutive sequence:
 * [1, 2, 3, 4]
 *
 * Answer:
 * 4
 *
 * ------------------------------------------------------------
 *
 * Approach: Sorting + Sequence Tracking
 * -------------------------------------
 *
 * Step 1: Sort the array.
 *   - Sorting places consecutive numbers next to each other.
 *   - Example: [100, 4, 200, 1, 3, 2]
 *     becomes [1, 2, 3, 4, 100, 200].
 *
 * Step 2: Track the current consecutive streak.
 *   - If the next number is exactly currentNumber + 1,
 *     increase the current streak.
 *
 * Step 3: Ignore duplicates.
 *   - A duplicate number does not extend the sequence.
 *   - Example: [1, 2, 2, 3] should still have a streak of 3.
 *
 * Step 4: Reset when the sequence breaks.
 *   - If the next number is not consecutive, start a new streak
 *     from the current number.
 *
 * Step 5: Keep the longest streak found.
 *   - Compare currentStreak with longestStreak after each iteration.
 *
 * ------------------------------------------------------------
 *
 * Why this works:
 * - Sorting puts potential consecutive numbers next to each other.
 * - Every consecutive pair increases currentStreak by 1.
 * - Duplicate values are ignored so they do not incorrectly increase
 *   the sequence length.
 * - When a gap appears, the current streak starts over.
 * - longestStreak always stores the best sequence found so far.
 *
 * Simple Intuition:
 * Sort the numbers, walk from left to right, and count how long the
 * current consecutive run continues.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;

    const sortedNumbers = nums.sort((a, b) => a - b);

    let longestStreak = 1;
    let currentStreak = 1;

    for (let index = 0; index < sortedNumbers.length - 1; index++) {
        const currentNumber = sortedNumbers[index];
        const nextNumber = sortedNumbers[index + 1];

        // Ignore duplicates because they do not extend the sequence.
        if (currentNumber === nextNumber) {
            continue;
        }

        // If the next number is exactly 1 greater, extend the current streak.
        if (currentNumber + 1 === nextNumber) {
            currentStreak++;
        } else {
            // A gap breaks the consecutive sequence, so start a new streak.
            currentStreak = 1;
        }

        // Keep track of the longest consecutive streak found so far.
        longestStreak = Math.max(longestStreak, currentStreak);
    }

    return longestStreak;
};