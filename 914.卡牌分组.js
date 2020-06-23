/*
 * @lc app=leetcode.cn id=914 lang=javascript
 *
 * [914] 卡牌分组
 */

// @lc code=start
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  let max = 0

  const counts = deck.reduce((map, cur) => {
    let count = map.get(cur)
    if (count !== undefined) {
      map.set(cur, ++count)
      max = Math.max(max, count)
    }
    else map.set(cur, 1)
    return map
  }, new Map())

  const arr = []
  counts.forEach(v => arr.push(v))

  while (max >= 2) {
    if (arr.every(e => e % max === 0)) return true
    else max--
  }
  return false
}
// @lc code=end


