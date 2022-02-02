/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) return ''
  const check = (c, index) => strs.every((str) => str.charAt(index) === c)
  return strs[0].split('').reduce((res, cur, index, arr) => {
    if (check(cur, index)) {
      return res + cur
    } else {
      arr.splice(1)
      return res
    }
  }, '')
}
// @lc code=end



