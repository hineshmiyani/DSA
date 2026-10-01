/**
 * QUICK NOTES — Best Time to Buy and Sell Stock
 *
 * Pattern:
 * Two Pointers / Sliding Window
 *
 * Core Idea:
 * Keep track of the lowest price seen so far as the buying price.
 * For each day, calculate the profit we would get by selling on that day.
 *
 * Key Trick:
 * If today's price is lower than the current buying price, move the
 * buying pointer to today because this gives us a better opportunity
 * to maximize future profit.
 *
 * Time / Space Complexity:
 * Time: O(n)
 * We traverse the prices array once, processing each price exactly once.
 *
 * Space: O(1)
 * We only use a few variables regardless of the input size.
 *
 * Why I struggled:
 * The key is understanding why we only move the buying pointer when
 * we find a lower price. A lower buying price can only improve the
 * profit for future selling days.
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
 * Approach: Two Pointers
 *
 * Step 1:
 * Start the buy pointer at the first day and the sell pointer at
 * the second day.
 *
 * Step 2:
 * If the selling price is higher than the buying price, calculate
 * the current profit and update the maximum profit.
 *
 * Step 3:
 * If the selling price is lower than the buying price, move the
 * buy pointer to the current sell day because we found a cheaper
 * day to buy.
 *
 * Step 4:
 * Move the sell pointer forward until every possible selling day
 * has been considered.
 *
 * --------------------------------
 * Why this works:
 * - The buy pointer always represents the lowest useful buying price
 *   seen so far.
 * - Every later price is considered as a possible selling price.
 * - Therefore, every valid buy → sell combination is represented
 *   by the current pointers.
 *
 * Simple Intuition:
 * Buy at the cheapest price seen so far and check how much profit
 * you can make by selling at every later price.
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let buyDay = 0;
    let sellDay = 1;

    let maxProfit = 0;

    while (sellDay < prices.length) {

        // A higher selling price means we can potentially make a profit.
        if (prices[buyDay] < prices[sellDay]) {

            const currentProfit = prices[sellDay] - prices[buyDay];

            maxProfit = Math.max(currentProfit, maxProfit);

        } else {

            /**
             * We found a cheaper buying price.
             * Moving the buy pointer here gives us a better starting
             * point for calculating profit on future selling days.
             */
            buyDay = sellDay;
        }

        sellDay++;
    }

    return maxProfit;
};