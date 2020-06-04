/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false
  if (x < 10) return true
  const temp = x + ''
  let i = 0
  const last = temp.length - 1
  while (i < last) {
    if (temp.charAt(i) === temp.charAt(last - i)) {
      i++
    } else {
      return false
    }
  }
  return true
}
// @lc code=end

