/**
 * 给你一个整数数组 arr 。请你将数组中的元素按照其二进制表示中数字 1 的数目升序排序。
 * 如果存在多个数字二进制中 1 的数目相同，则必须将它们按照数值大小升序排列。
 * 请你返回排序后的数组。
 */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  // 获取二进制中1的数目
  function binary(n) {
    let count = 0;
    while (n > 0) {
      // 当前数值进行2求余，若是1则说明当前位二进制是1，count加一
      count += n % 2; // count += n & 1; 大佬的位运算符解法
      // 当前数除2后继续进行求余
      n = parseInt(n / 2); // n >>= 1; 大佬的位运算符解法
    }
    return count;
  }
  return arr.sort((a, b) => {
    // 优先使用二进制1数目排序若相等则按本身大小排序
    return binary(a) - binary(b) || a - b;
  })
};