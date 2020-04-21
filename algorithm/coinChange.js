1.; /**
2.	* 使用硬币来凑成指定的金额
3.	*
4.	* 说明：给定不同面额的硬币 coins 和一个总金额 amount，
5.	* 编写一个函数来计算可以凑成总金额所需的最少的硬币个数，
6.	* 如果没有任何一种硬币组合能组成总金额，返回 -1，
7.	* 你可以认为每种硬币的数量是无限的。
8.	*
9.	* 示例：
10.	* coinChange([1, 2, 5], 11); // 3
11.	* coinChange([2, 4], 3); // -1
12.	*/
function coinChange(coins, amount) {
    let dp = new Array(amount+1).fill(Infinity)
    dp[0] = 0
    for (let coin of coins ) {
        for (let i = 1; i <= amount; i++) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1)
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
}

coinChange([1, 2, 5], 11)