/**
 * 将数据扁平话并去除其中重复数据，最终得到一个升序且不重复的数据
 * 你可以认为数组的所有的元素都是一个数值
 * 数组层级可能是无限的
 * 举例
 * 输入： [[1, 2, 3],[3, 4, 5, 5],[6, 7, 8, 9, [11, 12, [12, 13, [14]]]]]
 * 输出： [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14]
 */

var arr = [
  [1, 2, 3],
  [3, 4, 5, 5],
  [6, 7, 8, 9, [11, 12, [12, 13, [14]]]]
]

/**
 * @param array
 * @returns array
 */
function depthSort (arr) {
  return [...new Set(arr.flat(Infinity))].sort((a, b) => a > b)
}

const result = depthSort(arr)
console.log(result)