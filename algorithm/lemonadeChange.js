/**
 * 在柠檬水摊上，每一杯柠檬水的售价为 5 美元。
 * 顾客排队购买你的产品，（按账单 bills 支付的顺序）一次购买一杯。
 * 每位顾客只买一杯柠檬水，然后向你付 5 美元、10 美元或 20 美元。你必须给每个顾客正确找零，也就是说净交易是每位顾客向你支付 5 美元。
 * 注意，一开始你手头没有任何零钱。
 * 如果你能给每位顾客正确找零，返回 true ，否则返回 false 。
 */

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  // 第一位是5块的数量，第二位是10块的数量
  // 从可读性来说单独定义变量更好，使用数组的方式单纯是为了效率更高
  let count = [0, 0];
  let result = true;

  for (let bill of bills) {
    // 付5块的情况
    if (bill === 5) {
      // 5块的数量加1
      count[0]++
      continue;
    }
    // 付10块的情况
    if (bill === 10) {
      // 这时需要找5块，如果不够则直接返回失败
      if (--count[0] < 0) {
        result = false
        break
      }
      // 10块的数量加1
      count[1]++
      continue;
    }

    // 付20块的情况
    if (bill === 20) {
      // 先找5块，如果不够则直接返回失败
      if (--count[0] < 0) {
        result = false
        break
      }
      // 再找10块
      if (count[1] <= 0) {
        // 如果没有10块可以用2张5块代替，如果不够则直接返回失败
        if ((count[0] -= 2) < 0) {
          result = false
          break
        }
      } else {
        count[1]--
      }
    }
  }

  return result
};