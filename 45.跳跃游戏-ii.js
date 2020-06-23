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

  let now = 0
  let step = 0
  const last = nums.length - 1
  while (now < last) {
    step++

    if (nums[now] + now >= last) break

    const allowStep = nums[now]

    let next = 1
    let temp = now
    let max = 0

    while (next <= allowStep && next + now < last) {
      if (nums[next + now] + next > max) {
        max = nums[next + now] + next
        temp = next + now
      }
      next++
    }

    now = temp
  }

  return step
}
// @lc code=end


