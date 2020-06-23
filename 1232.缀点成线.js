/*
 * @lc app=leetcode.cn id=1232 lang=javascript
 *
 * [1232] 缀点成线
 */

// @lc code=start
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  const [x1, y1] = coordinates[0]
  const [x2, y2] = coordinates[1]

  if (x1 === x2) {
    return coordinates.slice(2).every(([x, y]) => x === x1)
  }

  if (y1 === y2) {
    return coordinates.slice(2).every(([x, y]) => y === y1)
  }

  return coordinates.slice(2).every(([x, y]) => {
    return (y - y2) / (y1 - y2) === (x - x2) / (x1 - x2)
  })
}
// @lc code=end
