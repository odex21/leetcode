//@ts-check
/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
  if (numRows === 1) return s
  let rowIndex = 0
  let res = Array.from({ length: numRows }, () => '')
  let goingDown = false
  for (let c of s) {
    res[rowIndex] += c
    //判断调头
    if (rowIndex === 0 || rowIndex == numRows - 1) {
      goingDown = !goingDown
    }
    rowIndex += goingDown ? 1 : -1
  }
  return res.join('')

  if (s.length <= 1) return s
  const rr = Math.max(numRows - 1, 1)
  const angleLen = numRows > 1 ? numRows * 2 - 2 : 1
  const len =
    Math.floor(s.length / angleLen) * rr +
    Math.max((s.length % angleLen) - numRows + 1, 1)
  let index = 0
  const v = Array.from({ length: numRows }, () => '')
  let end = false

  for (let col = 0; col < len; col++) {
    for (let row = 0; row < numRows; row++) {
      const r = row % rr
      const c = col % rr
      const sum = r + c

      if (!sum || sum === rr || (r && !c)) {
        v[row] += s[index++]
      }

      if (index >= s.length) {
        end = true
        break
      }
    }
    if (end) break
  }

  return v.join('')
}
// @lc code=end

module.exports = {
  convert,
}
