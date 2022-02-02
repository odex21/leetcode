/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {


  const nArr = nums1.concat(nums2).sort((a, b) => a - b)
  const m = nArr.length / 2
  if (nArr.length % 2 === 0) {
    return (nArr[m - 1] + nArr[m]) / 2
  }
  else {
    return nArr[Math.floor(m)]
  }
}
// @lc code=end



