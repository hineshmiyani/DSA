/**
 * QUICK NOTES — Contains Duplicate
 *
 * Pattern:
 * Hashing / Set
 *
 * Core Idea:
 * Use a Set to keep track of numbers that have already appeared.
 *
 * While traversing the array:
 * - If the current number already exists in the Set, we found a duplicate.
 * - Otherwise, add the number to the Set and continue.
 *
 * Key Trick:
 * A Set only stores unique values, so checking `has()` tells us
 * whether the current number has appeared before.
 *
 * Time Complexity:
 * O(n)
 * - We traverse the array only once.
 * - Set `has()` and `add()` are O(1) on average.
 *
 * Space Complexity:
 * O(n)
 * - In the worst case, all numbers are unique and are stored in the Set.
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
 * The number `1` appears twice.
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
 * Every number appears exactly once.
 *
 * ------------------------------------------------------------
 *
 * APPROACH:
 * HashSet / Set
 *
 * Step 1:
 * Create an empty Set called `seenNumbers`.
 *
 * It will store all numbers that we have already encountered.
 *
 * Step 2:
 * Traverse every number in the array.
 *
 * Step 3:
 * For each number, check whether it already exists in the Set.
 *
 * If it exists:
 *     We have encountered this number before, so a duplicate exists.
 *     Immediately return `true`.
 *
 * If it does not exist:
 *     Add the number to the Set and continue searching.
 *
 * Step 4:
 * If we finish traversing the entire array without finding a duplicate,
 * return `false`.
 *
 * ------------------------------------------------------------
 *
 * WHY THIS WORKS:
 *
 * The Set keeps track of every number we have already seen.
 *
 * Example:
 *
 * nums = [1, 2, 3, 1]
 *
 * Start:
 * Set = {}
 *
 * Read 1:
 * 1 is not present -> add 1
 * Set = {1}
 *
 * Read 2:
 * 2 is not present -> add 2
 * Set = {1, 2}
 *
 * Read 3:
 * 3 is not present -> add 3
 * Set = {1, 2, 3}
 *
 * Read 1:
 * 1 is already present -> duplicate found
 *
 * Therefore, return `true`.
 *
 * ------------------------------------------------------------
 *
 * SIMPLE INTUITION:
 *
 * Keep a record of everything you've already seen.
 *
 * See the same number again -> duplicate found.
 *
 * ------------------------------------------------------------
 *
 * INTERVIEW TIP:
 *
 * A brute-force solution would compare every pair of numbers,
 * resulting in O(n²) time.
 *
 * Sorting the array first would take O(n log n).
 *
 * Using a Set allows us to solve the problem in O(n) time
 * with O(n) additional space.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    // Store all numbers that have already appeared in the array.
    const seenNumbers = new Set();

    // Traverse every number in the array.
    for (const num of nums) {

        // If the current number already exists in the Set,
        // we have encountered the same number before.
        if (seenNumbers.has(num)) {

            // A duplicate exists, so we can immediately return true.
            return true;

        } else {

            // The number has not appeared before,
            // so add it to the Set for future duplicate checks.
            seenNumbers.add(num);
        }
    }

    // We checked every number without finding a duplicate,
    // so all elements are unique.
    return false;
};