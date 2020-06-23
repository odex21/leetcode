/*
 * @lc app=leetcode.cn id=1282 lang=javascript
 *
 * [1282] 用户分组
 */

// @lc code=start
/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  let userId = 0

  const getLast = arr => arr[arr.length - 1]

  const group = groupSizes.reduce((map, cur) => {
    let countArr = map.get(cur)

    if (countArr !== undefined) {
      const lastGroup = getLast(countArr)
      if (lastGroup.length === cur) {
        countArr.push([userId++])
      } else {
        lastGroup.push(userId++)
      }
      map.set(cur, countArr)
    } else {
      map.set(cur, [[userId++]])
    }
    return map
  }, new Map())

  const res = []
  group.forEach(el => el.forEach(arr => res.push(arr)))
  return res
}
// @lc code=end


