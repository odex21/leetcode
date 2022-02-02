/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  if (n === 2) {
    return 1
  } else if (n === 3) {
    return 2
  }

  const a = Math.floor(n / 3)
  const b = n % 3

  if (b === 0) return Math.pow(3, a)
  if (b === 1) return Math.pow(3, a - 1) * 4
  return Math.pow(3, a) * 2
}
// @lc code=end

