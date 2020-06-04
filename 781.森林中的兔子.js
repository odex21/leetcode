/*
 * @lc app=leetcode.cn id=781 lang=javascript
 *
 * [781] 森林中的兔子
 */

// @lc code=start
/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function (answers) {
  const colors = new Map()
  answers.forEach((cur, index) => {
    const total = colors.get(cur)
    colors.set(cur, total ? total + 1 : 1)
  })
  let res = 0

  const getLeast = (num) => (num ? num + 1 : 1)

  colors.forEach((value, key) => {
    const rate = value > key + 1 ? value / (key + 1) : 1
    res += rate > 1 ? Math.floor(rate) * (key + 1) + ((rate * 10 % 10) ? getLeast(key) : 0) : getLeast(key)
  })
  return res
}
// @lc code=end

// const test = numRabbits([0, 0, 1, 1, 1])
// console.log('res', test)

