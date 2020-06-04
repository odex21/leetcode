/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  if (!s) return 0
  let temp = 0, last = 0
  const map = new Map()
  const res = s.split('').reduce((res, cur, index) => {
    const pos = map.get(cur)
    if (pos === undefined) {
      res++
    } else {
      if (res > temp) temp = res
      last = Math.max(last, pos)
      res = index - last
    }
    map.set(cur, index)
    return res
  }, 0)
  return Math.max(res, temp)
}
// @lc code=end
