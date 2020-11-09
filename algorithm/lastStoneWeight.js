/**
 * 有一堆石头，每块石头的重量都是正整数。
 * 每一回合，从中选出两块 最重的 石头，然后将它们一起粉碎。假设石头的重量分别为 x 和 y，且 x <= y。那么粉碎的可能结果如下：
 * 如果 x == y，那么两块石头都会被完全粉碎；
 * 如果 x != y，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 y-x。
 * 最后，最多只会剩下一块石头。返回此石头的重量。如果没有石头剩下，就返回 0。
 */

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  const stonesLength = stones.length;
  // 如果没有石头则直接返回0
  if (!stonesLength) return 0;
  // 如果只有一块石头则直接返回那块石头的重量
  if (stonesLength === 1) return stones[0];
  for (let i = 0; i < stonesLength; i++) {
    // 先进行升序排列
    const sortStones = stones.sort((a, b) => a - b);
    // 取最后两块石头（即最重的石头）求差值
    const diff = sortStones[stonesLength - 1] - sortStones[stonesLength - 2];
    // 将最后一位设为差值
    stones[stonesLength - 1] = diff;
    // 将倒数第二位补零
    stones[stonesLength - 2] = 0;
  }
  return stones[stonesLength - 1];
};