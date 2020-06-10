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
  const clearStar = (s) => s.split('')
    .reduce((res, cur) => {
      if (res.length > 0 && cur === '*' && res[res.length - 1] === cur) {
        return res
      }
      return res + cur
    }, '')

  p = clearStar(p)


  const match = (s, p) => {

    if (!p.length) {
      return !s.length
    }
    if (!s.length) {
      for (let i = 0;i < p.length;i++) {
        if (p[i] !== '*') {
          return false
        }
      }
      return true
    }
    if (p[0] === '?') {
      return match(s.slice(1), p.slice(1))
    }
    if (p[0] === '*') {

      let p1 = p.slice(1)

      hasSharp = false

      for (let i = 0;i <= s.length && hasSharp;i++) {
        const temp = match(s.slice(i), p1)
        if (temp) {
          return true
        }
      }
      hasSharp = true
      return false
    }
    return s[0] === p[0] && match(s.slice(1), p.slice(1))
  }
  return match(s, p)
}
// @lc code=end


// console.log('ls', isMatch("acdcb", "a*c?b"))
// console.log('ls', isMatch("ac", "*"))

