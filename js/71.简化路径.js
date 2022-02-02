/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  return '/' + path.split('/')
    .filter(el => el !== '' && el !== '.')
    .reduce((res, cur) => {
      if (cur === '..') res.pop()
      else res.push(cur)
      return res
    }, [])
    .join('/')
}
// @lc code=end

