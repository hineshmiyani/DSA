/**
 * QUICK NOTES — Top K Frequent Elements
 *
 * Pattern:
 * HashMap + Sorting
 *
 * Core Idea:
 * Count how frequently each number appears using a HashMap.
 * Then sort the numbers by their frequency in descending order
 * and return the first `k` numbers.
 *
 * Key Trick:
 * Use `Map.entries()` to convert the frequency map into an array
 * of `[number, frequency]` pairs, then sort by frequency.
 *
 * Time Complexity:
 * O(n + m log m)
 * - n = number of elements in `nums`
 * - m = number of unique numbers
 * - Building the frequency map takes O(n).
 * - Sorting the unique numbers takes O(m log m).
 *
 * Space Complexity:
 * O(m)
 * - The frequency map stores `m` unique numbers.
 * - The sorted entries and result also use O(m) space.
 *
 * ------------------------------------------------------------
 *
 * PROBLEM:
 *
 * Given an integer array `nums` and an integer `k`, return the `k`
 * most frequent elements.
 *
 * The answer may be returned in any order.
 *
 * Example:
 *
 * Input:
 * nums = [1,1,1,2,2,3]
 * k = 2
 *
 * Output:
 * [1,2]
 *
 * Explanation:
 * 1 appears 3 times.
 * 2 appears 2 times.
 * 3 appears 1 time.
 *
 * Therefore, the 2 most frequent elements are [1, 2].
 *
 * ------------------------------------------------------------
 *
 * APPROACH:
 * HashMap + Sorting
 *
 * Step 1:
 * Create a HashMap called `numberFrequencyMap`.
 *
 * The key represents a number, and the value represents how many
 * times that number appears in the array.
 *
 * Example:
 *
 * nums = [1,1,1,2,2,3]
 *
 * numberFrequencyMap:
 * {
 *     1 -> 3,
 *     2 -> 2,
 *     3 -> 1
 * }
 *
 * Step 2:
 * Traverse the entire `nums` array.
 *
 * For every number:
 * - If it already exists in the map, increment its frequency.
 * - Otherwise, add it to the map with frequency 1.
 *
 * Step 3:
 * Convert the Map entries into an array.
 *
 * Example:
 *
 * [
 *     [1, 3],
 *     [2, 2],
 *     [3, 1]
 * ]
 *
 * Each entry has the form:
 *
 * [number, frequency]
 *
 * Step 4:
 * Sort the entries by frequency in descending order.
 *
 * Example:
 *
 * [
 *     [1, 3],
 *     [2, 2],
 *     [3, 1]
 * ]
 *
 * Step 5:
 * Take the first `k` entries and extract only their numbers.
 *
 * Step 6:
 * Return the resulting array.
 *
 * ------------------------------------------------------------
 *
 * WHY THIS WORKS:
 *
 * The frequency map tells us exactly how many times every unique
 * number appears.
 *
 * Once we sort the entries by frequency from highest to lowest,
 * the first `k` numbers are guaranteed to be the `k` most frequent.
 *
 * Example:
 *
 * nums = [1,1,1,2,2,3]
 *
 * Frequencies:
 *
 * 1 -> 3
 * 2 -> 2
 * 3 -> 1
 *
 * Sorted by frequency:
 *
 * 1 -> 3
 * 2 -> 2
 * 3 -> 1
 *
 * For k = 2:
 *
 * [1, 2]
 *
 * ------------------------------------------------------------
 *
 * SIMPLE INTUITION:
 *
 * Count how many times every number appears.
 *
 * Sort by frequency.
 *
 * Take the first `k`.
 *
 * ------------------------------------------------------------
 *
 * INTERVIEW TIP:
 *
 * This sorting approach is simple and easy to implement.
 *
 * Time:
 * O(n + m log m)
 *
 * However, there is a more optimal Bucket Sort approach that can solve
 * this problem in O(n) time.
 *
 * The Bucket Sort approach is worth knowing for interviews when
 * optimal time complexity is expected.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    // Store each unique number and the number of times it appears.
    const numberFrequencyMap = new Map();

    // Count the frequency of every number in the input array.
    for (const num of nums) {

        // If the number already exists, increase its frequency.
        if (numberFrequencyMap.has(num)) {
            numberFrequencyMap.set(
                num,
                numberFrequencyMap.get(num) + 1
            );

        // Otherwise, this is the first occurrence of the number.
        } else {
            numberFrequencyMap.set(num, 1);
        }
    }

    // Convert the frequency map into an array of [number, frequency] pairs
    // and sort them from highest frequency to lowest frequency.
    const sortedFrequencyEntries = Array
        .from(numberFrequencyMap.entries())
        .sort((a, b) => b[1] - a[1]);

    // Store the final k most frequent numbers.
    const topKNumbers = [];

    // Take the first k entries because they have the highest frequencies.
    for (let i = 0; i < k; i++) {

        // Each entry has the form [number, frequency].
        // We only need the number at index 0.
        topKNumbers.push(sortedFrequencyEntries[i][0]);
    }

    // Return the k most frequent numbers.
    return topKNumbers;
};