/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const dot = '.'
  const star = '*'

  if (p.indexOf(dot) < 0 && p.indexOf(star) < 0) {
    return s === p
  }

  let j = 0
  let lastChar = ''
  for (let i = 0;i < p.length;i++) {
    const cur = p.charAt(i)
    if (cur === dot) {
      lastChar = s.charAt(j)
      j++
    } else if (cur === star) {
      const lastPatternChar = p.charAt(i - 1)
      while (s.charAt(j) === lastPatternChar || lastPatternChar === dot) {
        if (j > s.length - 1) {
          break
        }
        j++
      }
    } else {
      if (j === s.length) {
        if (p.charAt(i) === s.charAt(j - 1) && p.charAt(i - 1) === star) return true
        else if (p.charAt(i + 1) === star) {
          // j--
          continue
        } else {

          return false
        }
      }
      if (p.charAt(i) !== s.charAt(j)) {
        if (p.charAt(i + 1) !== star)
          return false
      } else {
        j++
      }
    }

  }
  console.log(j, s.length)
  return j === s.length
}
// @lc code=end

console.log('aaa', isMatch('a', 'ab*'))


