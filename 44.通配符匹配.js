/*
 * @lc app=leetcode.cn id=44 lang=javascript
 *
 * [44] 通配符匹配
 */

const clearStar = (s) => s.split('')
  .reduce((res, cur) => {
    if (res.length > 0 && cur === '*' && res[res.length - 1] === cur) {
      return res
    }
    return res + cur
  }, '')

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let i = 0, j = 0
  let iStar = -1, jStar = -1

  while (i < s.length) {
    if (j < p.length && (s.charAt(i) === p.charAt(j) || p.charAt(j) === '?')) {
      i++
      j++
    } else if (j < p.length && p.charAt(j) === '*') {
      iStar = i
      jStar = j++
    } else if (iStar >= 0) {
      i = ++iStar
      j = jStar + 1
    } else
      return false
  }

  while (j < p.length && p.charAt(j) === '*') j++
  return j === p.length
}
// @lc code=end

