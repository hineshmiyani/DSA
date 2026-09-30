/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let maxProfit = 0;
    let minPrice = Infinity;

    for (let i = 0; i < prices.length; i++) {

            minPrice = Math.min(minPrice, prices[i]);

            const profit = prices[i] - minPrice;

            maxProfit = Math.max(profit, maxProfit);
    }

    return maxProfit;
};