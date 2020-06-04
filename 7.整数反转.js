/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const temp = +(Math.abs(x) + '').split('').reverse().join('')
  if (temp > 2 ** 31) return 0
  return x < 0 ? -1 * temp : temp
}
// @lc code=end
