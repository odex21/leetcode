/*
 * @lc app=leetcode.cn id=498 lang=javascript
 *
 * [498] 对角线遍历
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function (matrix) {
  if (matrix.length === 0) return []

  let flag = false
  const res = []
  let x = 0, y = 0

  while (x < matrix[0].length && y < matrix.length) {
    res.push(matrix[y][x])

    if (y === 0 && !flag && x + 1 < matrix[0].length) {
      x++
      flag = true
    } else if (y === matrix.length - 1 && flag) {
      x++
      flag = false
    } else if (x === 0 && flag) {
      y++
      flag = false
    } else if (x === matrix[0].length - 1 && !flag) {
      y++
      flag = true
    } else {
      y = flag ? y + 1 : y - 1
      x = flag ? x - 1 : x + 1
    }

  }
  return res
}
// @lc code=end
