/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

    let p1 = 0;
    let p2 = p1 + 1;

    let maxProfit = 0;

    while (p2 < prices.length) {

        if (prices[p2] > prices[p1]) {
            profit = prices[p2] - prices[p1];
            maxProfit = Math.max(profit, maxProfit);
        } else {
            p1 = p2;
        }

        p2 = p2 + 1;
    }

    return maxProfit;
};