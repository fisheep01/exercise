/**
 * 
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）
 */

var maxProfit = function (prices) {
  let income = 0;
  for (let i = 0; i < prices.length; i++) {
    const difference = prices[i + 1] - prices[i]
    if (difference > 0) income += difference
  }
  return income;
};

// 这个方法有个小的问题，类似[1,2,3,4,5]，看似好像一天重复交易了多次违背的题干要求，实际可以视为反悔卖出的操作，当然如果需要求最小或最多交易次数则需要重新考虑