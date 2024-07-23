/**
 * @article  : https://takeuforward.org/data-structure/stock-buy-and-sell/
 * @question : https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */

/*
  ✅ Problem Statement: 

  You are given an array of prices where prices[i] is the price of a given stock on an ith day.
  You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. 
  If you cannot achieve any profit, return 0.

  Example 1:
  Input: prices = [7,1,5,3,6,4]
  Output: 5
  Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.

  Note : That buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

  Example 2:
  Input: prices = [7,6,4,3,1]
  Output: 0
  Explanation: In this case, no transactions are done and the max profit = 0.

*/

// Brute-force Solution
const maxProfitSolution1 = (arr) => {
  // Initialize the maximum profit to 0
  let maxProfit = 0;

  // Iterate over each day as the potential buy day
  for (let i = 0; i < arr.length; i++) {
    // Iterate over each subsequent day as the potential sell day
    for (let j = i + 1; j < arr.length; j++) {
      // Calculate the profit by subtracting the buy day price from the sell day price
      const profit = arr[j] - arr[i];
      // Update the maximum profit if the current profit is greater than the previously recorded maximum profit
      maxProfit = Math.max(maxProfit, profit);
    }
  }

  // Return the maximum profit found
  return maxProfit;
};

// Optimal Solution
const maxProfitSolution2 = (arr) => {
  // Initialize the maximum profit to 0, as no transactions have been made yet.
  let maxProfit = 0;

  // Initialize the minimum price to the price on the first day.
  let minimumPrice = arr[0];

  // Iterate over the array starting from the second day (index 1).
  for (let index = 1; index < arr.length; index++) {
    // Calculate the profit if the stock was bought at the minimum price and sold on the current day.
    const profit = arr[index] - minimumPrice;

    // Update the maximum profit if the current profit is greater than the previously recorded maximum profit.
    maxProfit = Math.max(maxProfit, profit);

    // Update the minimum price if the current day's price is lower than the previously recorded minimum price.
    minimumPrice = Math.min(minimumPrice, arr[index]);
  }

  // Return the maximum profit found. If no profit is possible, maxProfit will be 0.
  return maxProfit;
};

// Example 1 Input
const arr1 = [7, 1, 5, 3, 6, 4];

// Example 2 Input
const arr2 = [7, 6, 4, 3, 1];

console.log("\n\n ------------- Solution 1: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("Max profit is: ", maxProfitSolution1(arr1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("Max profit is: ", maxProfitSolution1(arr2));

// Time complexity: O(n^2)
// Space Complexity: O(1)

console.log("\n\n ------------- Solution 2: -------------");
console.log("\n ------------- Example 1: ------------- \n");
console.log("Max profit is: ", maxProfitSolution2(arr1));
console.log("\n ------------- Example 2: ------------- \n");
console.log("Max profit is: ", maxProfitSolution2(arr2));

// Time complexity: O(n)
// Space Complexity: O(1)
