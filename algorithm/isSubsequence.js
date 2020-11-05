/**
 * 
 * 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。
 * 你可以认为 s 和 t 中仅包含英文小写字母。字符串 t 可能会很长（长度 ~= 500,000），而 s 是个短字符串（长度 <=100）。
 * 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。
 * 示例 1:
 * s = "abc", t = "ahbgdc"
 * 返回 true.
 * 示例 2:
 * s = "axc", t = "ahbgdc"
 * 返回 false.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let ti = 0;
  let si = 0;
  let sl = s.length;
  // 如果子串为空则直接返回true
  if (!sl) return true;
  while (ti < t.length) {
    // 当前位的原始串和子串内容相同则子串也向后查找
    // 若当前已是子串的最后一位则返回true
    // 否则原始串向后查找
    if (s[si] === t[ti] && sl === ++si) return true;
    ti++;
  }
  return false;
};