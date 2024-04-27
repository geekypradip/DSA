// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
var maxProfit = function (prices) {
  let min = prices[0];
  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else {
      max = Math.max(max, prices[i] - min);
    }
  }
  return max;
};

// var maxProfit = function (prices) {
//   let leftSmall = [prices[0]],
//     rightBig = [prices[prices.length - 1]];
//   for (let i = 1; i < prices.length; i++) {
//     leftSmall.push(Math.min(prices[i], leftSmall[leftSmall.length - 1]));
//   }
//   for (let i = prices.length - 2; i >= 0; i--) {
//     rightBig.push(Math.max(prices[i], rightBig[rightBig.length - 1]));
//   }

//   rightBig.reverse();
//   let max = 0;
//   for (let i = 0; i < rightBig.length; i++) {
//     prices[i] = Math.abs(Math.max(rightBig[i], leftSmall[i]) - prices[i]);
//     if (prices[i] > max) max = prices[i];
//   }

//   return max;
// };
let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); // console.log(prices); // 5
prices = [7, 6, 4, 3, 1];
console.log(maxProfit(prices)); // console.log(prices); // 0
//explaination:
// In the first example, buying at 1 and selling at 6 will give you the maximum profit of 5.
// In the second example, the price is decreasing every day. So, you cannot make any profit.
// Time Complexity: O(n)
// Space Complexity: O(1)
// The time complexity is O(n) because we are iterating through the array only once.
// The space complexity is O(1) because we are using only a constant amount of space.
