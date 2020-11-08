/**
 * 给定由 N 个小写字母字符串组成的数组 A，其中每个字符串长度相等。
 * 你需要选出一组要删掉的列 D，对 A 执行删除操作，使 A 中剩余的每一列都是 非降序 排列的，然后请你返回 D.length 的最小可能值。
 * 删除 操作的定义是：选出一组要删掉的列，删去 A 中对应列中的所有字符，形式上，第 n 列为 [A[0][n], A[1][n], ..., A[A.length-1][n]]）。（可以参见 删除操作范例）
 */

var minDeletionSize = function (A) {
  let count = 0
  // 兼容空数组的情况
  const strLength = A[0] ? A[0].length : 0
  for (let i = 0; i < strLength; i++) {
    for (let n = 1; n < A.length; n++) {
      // 判断是否非降序
      if (A[n - 1][i] > A[n][i]) {
        count++;
        break;
      }
    }
  }
  return count
};