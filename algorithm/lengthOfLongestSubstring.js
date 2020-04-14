/**
 * 给定一个字符串，返回其不重复的最长子串长度
 * 举例
 * 输入： abcabcbc
 * 输出： 3
 * 原因： 最长非重复子串为abc
 */


/**
 * @param {string}
 * @return {number}
 */

function lengthOfLongestSubstring(str) {
    let temp = '';
    let res = 0,
        num = 0;
    for (i of str) {
        let left = temp.indexOf(i);
        temp += i;
        if (left === -1) {
            // 由于在计算left后又拼接了一位，所以这边要多加1
            temp = temp.slice(left + 2);
            num = temp.length;
        } else {
            num++;
            res = Math.max(res, num);
        }
    }
    return temp.length
}