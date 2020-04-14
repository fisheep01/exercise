/**
 * 给定一个整数数组（有正数有负数），找出总和最大的连续数列，并返回总和。
 * 输入： [-2,1,-3,4,-1,2,1,-5,4]
 * 输出： 6
 * 解释： 连续子数组 [4,-1,2,1] 的和最大，为 6。
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArray = function(nums) {
    let sum = -Infinity;
    let max = -Infinity;
    
    for (let i of nums) {
        if (sum < 0) sum = i;
        else sum += i;

        max = Math.max(sum, max);
    }

    return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))