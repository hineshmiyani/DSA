/**
 * QUICK NOTES — Best Time to Buy and Sell Stock
 *
 * Pattern:
 * One Pass / Greedy
 *
 * Core Idea:
 * Track the lowest stock price seen so far and calculate the
 * potential profit by selling at the current day's price.
 *
 * Key Trick:
 * Update the lowest buying price BEFORE calculating the profit.
 * This ensures we always use the cheapest price seen so far.
 *
 * Time / Space Complexity:
 * Time: O(n)
 * We traverse the prices array exactly once, processing each day's
 * price in constant time.
 *
 * Space: O(1)
 * We only use a fixed number of variables, regardless of input size.
 *
 * Why I struggled:
 * The important insight is that we don't need to check every
 * possible buy and sell combination. We only need to remember
 * the lowest price encountered so far.
 */

/**
 * Problem:
 * Given an array where prices[i] represents the stock price on day i,
 * find the maximum profit possible by buying on one day and selling
 * on a later day.
 *
 * Rules:
 * - Buy before selling.
 * - Only one transaction is allowed.
 * - If no profit is possible, return 0.
 *
 * Example:
 * prices = [7, 1, 5, 3, 6, 4]
 *
 * Output:
 * 5
 *
 * --------------------------------
 * Approach: Greedy (One Pass)
 *
 * Step 1:
 * Initialize the lowest buying price with the maximum safe integer
 * and maximum profit with 0.
 *
 * Step 2:
 * Traverse the prices array and update the lowest buying price
 * whenever we encounter a cheaper stock price.
 *
 * Step 3:
 * Calculate the potential profit by selling at the current price
 * and buying at the lowest price seen so far.
 *
 * Step 4:
 * Update the maximum profit if the current profit is greater.
 *
 * --------------------------------
 * Why this works:
 * - The lowest buying price represents the cheapest opportunity
 *   encountered before or on the current day.
 * - Every day's price is considered as a potential selling price.
 * - Therefore, we can find the maximum possible profit in one pass.
 *
 * Simple Intuition:
 * Keep remembering the cheapest buying price and check how much
 * profit you can make by selling at today's price.
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let maxProfit = 0;
    let lowestBuyPrice = Number.MAX_SAFE_INTEGER;

    for (let currentDay = 0; currentDay < prices.length; currentDay++) {

        // Keep track of the cheapest buying price seen so far.
        lowestBuyPrice = Math.min(lowestBuyPrice, prices[currentDay]);

        const currentProfit = prices[currentDay] - lowestBuyPrice;

        maxProfit = Math.max(currentProfit, maxProfit);
    }

    return maxProfit;
};