/*
 * @lc app=leetcode.cn id=822 lang=javascript
 *
 * [822] 翻转卡片游戏
 */

// @lc code=start
/**
 * @param {number[]} fronts
 * @param {number[]} backs
 * @return {number}
 */
var flipgame = function (fronts, backs) {
  const same = fronts.reduce((res, cur, index) => {
    if (cur === backs[index]) res.push(cur)
    return res
  }, [])

  let min = 9999
  const findDiff = (cur) => {
    if (!same.includes(cur)) {
      if (cur < min) min = cur
    }
  }
  fronts.forEach(findDiff)
  backs.forEach(findDiff)
  return min % 9999
}
// @lc code=end



