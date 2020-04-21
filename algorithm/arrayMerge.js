/**
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 num1 成为一个有序数组。
 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n ）来保存 nums2 中的元素。
 */

 /**
  * @param {number[]} nums1
  * @param {number[]} nums2
  * @return {number[]}
  */

function arrayMerge(num1, num2) {
    let l1 = num1.length - 1;
    let l2 = num2.length - 1;
    let l = l1 + l2 + 1;

    while (l2 >= 0) {
        if (l1 < 0) {
            num1[l--] = num2[l2--];
            continue;
        }
        num1[l--] = num2[l2] > num1[l1] ? num2[l2--] : num1[l1--];
    }

    return num1;
}

console.log(arrayMerge([1,3,5,77],[-2,60]))