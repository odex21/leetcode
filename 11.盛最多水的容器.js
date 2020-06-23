/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0, right = height.length - 1
  let max = 0

  while (left < right) {
    if (height[left] < height[right]) {
      max = Math.max(height[left] * (right - left), max)
      left++
    } else {
      max = Math.max(height[right] * (right - left), max)
      right--
    }
  }

  return max
}
// @lc code=end

