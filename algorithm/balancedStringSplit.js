/**
 * 在一个「平衡字符串」中，'L' 和 'R' 字符的数量是相同的。
 * 给出一个平衡字符串 s，请你将它分割成尽可能多的平衡字符串。
 * 返回可以通过分割得到的平衡字符串的最大数量。
 */

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let count = 0;
  let result = 0;
  for (let item of s) {
    // 把R和L看做可以互相抵消的数字，抵消为0时就得到了一个平衡字符串
    count += item === 'R' ? 1 : -1;
    if (!count) result++;
  }

  return result;
};