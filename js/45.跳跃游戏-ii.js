/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length === 1) return 0
  return (step = nums.reduce((res, cur, index, arr) => {
    let max = 0
    const nextIndex =
      index +
      arr
        .slice(index + 1, index + 1 + cur)
        .reduce((maxIndex, next, index, arr) => {
          if (index + next > max) {
            max = index + next
            return index
          } else {
            return maxIndex
          }
        }, 0)
    arr.splice(0, nextIndex + 1)
    return res + 1
  }, 0))
}
// @lc code=end
