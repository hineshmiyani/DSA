/**
 * QUICK NOTES — Top K Frequent Elements
 *
 * Pattern:
 * HashMap + Bucket Sort
 *
 * Core Idea:
 * First, count the frequency of every number using a HashMap.
 *
 * Then, use each number's frequency as an index in a bucket array.
 * Numbers with the same frequency are stored in the same bucket.
 *
 * Finally, traverse the buckets from the highest frequency to the
 * lowest frequency and collect numbers until we have `k` elements.
 *
 * Key Trick:
 * Use the frequency itself as the bucket index.
 *
 * Time Complexity:
 * O(n)
 * - Building the frequency map takes O(n).
 * - Building the buckets takes O(n).
 * - Traversing the buckets takes O(n).
 *
 * Space Complexity:
 * O(n)
 * - The HashMap stores the unique numbers.
 * - The bucket array can contain up to n + 1 positions.
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
 * HashMap + Bucket Sort
 *
 * Step 1:
 * Create a HashMap to store each number and its frequency.
 *
 * Step 2:
 * Create a bucket array where the index represents frequency.
 *
 * Step 3:
 * Place every unique number into the bucket corresponding to
 * its frequency.
 *
 * Step 4:
 * Traverse the buckets from the highest frequency to the lowest.
 *
 * Step 5:
 * Add numbers to the result until we have `k` elements.
 *
 * ------------------------------------------------------------
 *
 * WHY THIS WORKS:
 *
 * The maximum frequency of any number is `nums.length`.
 *
 * Therefore, frequency can be used directly as a bucket index.
 *
 * By traversing the buckets from highest to lowest frequency,
 * we automatically encounter the most frequent numbers first.
 *
 * ------------------------------------------------------------
 *
 * SIMPLE INTUITION:
 *
 * Count every number.
 *
 * Put each number into a bucket based on its frequency.
 *
 * Start from the highest-frequency bucket and take `k` numbers.
 *
 * ------------------------------------------------------------
 *
 * INTERVIEW TIP:
 *
 * Sorting approach:
 * O(n + m log m)
 *
 * Bucket Sort approach:
 * O(n)
 *
 * Bucket Sort is optimal because we avoid sorting the unique numbers.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {

    // Store each unique number and its frequency.
    const numberFrequencyMap = new Map();

    // Use the frequency as the bucket index.
    // +1 allows every possible frequency from 0 to nums.length.
    const frequencyBuckets = new Array(nums.length + 1);

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

    // Place every unique number into the bucket corresponding
    // to its frequency.
    for (const [number, frequency] of numberFrequencyMap) {

        // If a bucket already exists for this frequency,
        // add the number to that bucket.
        if (frequencyBuckets[frequency]) {
            frequencyBuckets[frequency].push(number);

        // Otherwise, create a new bucket for this frequency.
        } else {
            frequencyBuckets[frequency] = [number];
        }
    }

    // Store the k most frequent numbers.
    const topKNumbers = [];

    // Start from the highest possible frequency and move downward.
    for (
        let frequency = frequencyBuckets.length - 1;
        frequency >= 0;
        frequency--
    ) {

        // Get all numbers that occur exactly `frequency` times.
        const numbersWithFrequency = frequencyBuckets[frequency];

        // Skip this frequency if no number has appeared this many times.
        if (numbersWithFrequency) {

            // Add all numbers from this frequency bucket to the result.
            topKNumbers.push(...numbersWithFrequency);

            // Once we have at least k numbers, we have found the answer.
            if (topKNumbers.length >= k) {
                return topKNumbers.slice(0, k);
            }
        }
    }
};