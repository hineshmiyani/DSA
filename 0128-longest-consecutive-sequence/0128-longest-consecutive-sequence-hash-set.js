/**
 * QUICK NOTES — Longest Consecutive Sequence
 *
 * Pattern:
 * Hash Set + Sequence Expansion
 *
 * Core Idea:
 * Store every number in a Set for O(1) average-time lookups.
 * A number can only be the beginning of a consecutive sequence if
 * its previous number does not exist in the Set.
 *
 * Key Trick:
 * Only start counting when:
 *
 *     !numberSet.has(currentNumber - 1)
 *
 * This ensures that every consecutive sequence is processed only once,
 * starting from its smallest number.
 *
 * Example:
 * nums = [100, 4, 200, 1, 3, 2]
 *
 * Set:
 * {100, 4, 200, 1, 3, 2}
 *
 * Sequence starts:
 * 1 → 2 → 3 → 4
 *
 * Length:
 * 4
 *
 * Time Complexity:
 * O(n)
 *
 * Creating the Set takes O(n), and each number is processed as part of
 * a consecutive sequence. Although the nested while loop exists, every
 * number is visited only a constant number of times across the algorithm.
 *
 * Space Complexity:
 * O(n)
 *
 * The Set stores all n numbers.
 */

/**
 * Problem:
 * Given an unsorted array of integers, return the length of the longest
 * consecutive elements sequence.
 *
 * A consecutive sequence contains numbers where each number is exactly
 * 1 greater than the previous number.
 *
 * Example:
 * nums = [100, 4, 200, 1, 3, 2]
 *
 * Longest consecutive sequence:
 * [1, 2, 3, 4]
 *
 * Answer:
 * 4
 *
 * ------------------------------------------------------------
 *
 * Approach: Hash Set + Sequence Expansion
 * ----------------------------------------
 *
 * Step 1: Store all numbers in a Set.
 *   - Set provides O(1) average-time lookup.
 *   - This allows us to quickly check whether a number exists.
 *
 * Step 2: Check whether the current number is a sequence start.
 *   - A number is the start of a sequence if currentNumber - 1
 *     does not exist in the Set.
 *   - If the previous number exists, the current number belongs to
 *     an already existing sequence, so we skip it.
 *
 * Step 3: Expand the sequence.
 *   - Starting from the smallest number, check whether the next number
 *     exists in the Set.
 *   - Continue increasing the number while consecutive values exist.
 *
 * Step 4: Track the sequence length.
 *   - currentStreak stores the length of the sequence currently being
 *     explored.
 *   - longestStreak stores the longest sequence found so far.
 *
 * ------------------------------------------------------------
 *
 * Why this works:
 * - Every number is stored in the Set for fast lookup.
 * - We only begin a sequence from its smallest number.
 * - This prevents repeatedly scanning the same sequence.
 * - The while loop expands each sequence from its starting point.
 * - longestStreak keeps the maximum length found.
 *
 * Simple Intuition:
 * Put everything in a Set, find where each sequence starts, and keep
 * moving forward while consecutive numbers exist.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length === 0) return 0;

    const numberSet = new Set(nums);

    let longestStreak = 1;

    for (let currentNumber of numberSet) {
        // Only start counting when currentNumber is the beginning of a sequence.
        if (!numberSet.has(currentNumber - 1)) {
            let currentStreak = 1;

            // Keep expanding while the next consecutive number exists.
            while (numberSet.has(currentNumber + 1)) {
                currentStreak++;
                currentNumber++;
            }

            // Store the longest consecutive streak found so far.
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
};
