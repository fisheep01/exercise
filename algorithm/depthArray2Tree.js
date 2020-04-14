/** 
 * 平铺节点数组转嵌套树 
 * 说明：将一个包含深度信息的节点数组转换成一棵树，要求只能遍历一次该数组 
 * 输入值：TreeNode数组 TreeNode为包含title, depth(正整数，深度不限)字段的Object 
 * 输出值：组装好的嵌套树，子节点挂载在对应父节点的children字段上 

举   例 (title字段仅为便于理解，实际无固定规则) 
输入：[ 
 { title: '1', depth: 1 }, 
 { title: '1-1', depth: 2 }, 
 { title: '1-1-1', depth: 3 }, 
 { title: '1-1-2', depth: 3 }, 
 { title: '1-2', depth: 2 }, 
 { title: '2', depth: 1 }, 
 { title: '2-1', depth: 2 }, 
] 
输出：[ 
 { 
   "title": "1", 
   "depth": 1, 
   "children": [ 
     { 
       "title": "1-1", 
       "depth": 2, 
       "children": [ 
         { 
           "title": "1-1-1", 
           "depth": 3 
         }, 
         { 
           "title": "1-1-2", 
           "depth": 3 
         } 
       ] 
     }, 
     { 
       "title": "1-2", 
       "depth": 2 
     } 
   ] 
 }, 
 { 
    "title": "2", 
    "depth": 1, 
    "children": [ 
      { 
        "title": "2-1", 
        "depth": 2 
      } 
    ] 
  } 
] 
*/
function depthArray2Tree(depthArray) {
  let arr = []
  let deep = []
  let curData = []
  let curDeep = 0;


  for (let index = 0; index < depthArray.length; index++) {
    const element = depthArray[index];
    if (element.depth > curDeep) {
      if (element.depth > 1) {
        curData[element.depth - 1][deep[element.depth - 1]]['children'] = [element]
      } else {
        arr.push(element)
      }
      // 记录当前深度
      curDeep = element.depth
      // 对应层级索引初始化为0
      deep[element.depth] = 0

      if (element.depth > 1) {
        curData[element.depth] = curData[element.depth - 1][deep[element.depth - 1]]['children']
      } else {
        curData[element.depth] = arr
      }
    } else if (element.depth < curDeep) {
      // 记录当前深度
      curDeep = element.depth
      curData[element.depth].push(element)

      deep[element.depth]++
    } else {
      // 等于的情况
      // 记录当前深度
      curDeep = element.depth
      curData[element.depth].push(element)
      // 对应层级索引增加
      deep[element.depth]++
    }
  }

  return arr
}


let x = [{
    title: '1',
    depth: 1
  },
  {
    title: '1-1',
    depth: 2
  },
  {
    title: '1-1-1',
    depth: 3
  },
  {
    title: '1-1-2',
    depth: 3
  },
  {
    title: '1-2',
    depth: 2
  },
  {
    title: '2',
    depth: 1
  },
  {
    title: '2-1',
    depth: 2
  }
]

console.log(depthArray2Tree(x));