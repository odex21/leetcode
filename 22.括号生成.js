/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start

const cache = new Map()

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  var res = []
  function gen(str, left, right) {
    if (left === n && right === n) {
      res.push(str)
      return
    }
    if (left < n) {
      gen(str + "(", left + 1, right)
    }
    if (right < left) {
      gen(str + ")", left, right + 1)
    }
  }
  gen("", 0, 0)
  return res
}
// @lc code=end

console.time('test')
const test = generateParenthesis(15)
console.timeEnd('test')
console.log('cache size', cache.size)






