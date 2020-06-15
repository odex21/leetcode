/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

  const find = (nums) => {
    if (nums.length === 1) {
      const res = nums[0]
      return [res, res, res, res]
    }

    const m = Math.floor(nums.length / 2)
    const [leftLSum, leftMSum, leftRSum, leftISum] = find(nums.slice(0, m))
    const [rightLSum, rightMSum, rightRSum, rightISum] = find(nums.slice(m, nums.length))

    // 左边的左边，左边全部+右边的右边
    const lSum = Math.max(leftLSum, leftISum + rightLSum)
    const rSum = Math.max(rightRSum, rightISum + leftRSum)
    const mSum = Math.max(rightMSum, leftMSum, leftRSum + rightLSum)
    const iSum = leftISum + rightISum

    return [lSum, mSum, rSum, iSum]
  }

  return Math.max(...find(nums))
}
// @lc code=end


