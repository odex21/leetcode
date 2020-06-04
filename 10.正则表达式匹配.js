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
  const memo = Array.from(Array.from({ length: s.length + 1 }, (v) => Array.from({ length: p.length + 1 }, () => false)))
  memo[s.length][p.length] = true

  for (let i = s.length;i > -1;i--) {
    for (let j = p.length - 1;j > -1;j--) {

      let ans
      const isFirstMath = s.length > i && (s.charAt(i) === p.charAt(j) || p.charAt(j) === '.')

      if (p.length - j >= 2 && p.charAt(j + 1) === '*') {
        ans = memo[i][j + 2] || (isFirstMath && memo[i + 1][j])
      } else {
        ans = isFirstMath && memo[i + 1][j + 1]
      }

      // console.log('ans', i, j, ans)
      memo[i][j] = ans
    }
  }
  // return math(s, p, 0, 0)
  return memo[0][0]
}
// @lc code=end
