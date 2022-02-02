/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const format = version => version.split('.').map(e => +e)
  const v1 = format(version1)
  const v2 = format(version2)

  let res = v1.reduce((res, cur, index, arr) => {
    const curV2 = v2[index]
    if (res !== 0) {
      arr.splice(1)
      return res
    }

    if (curV2 === undefined) {
      return arr.splice(index).some(e => e > 0) ? 1 : 0
    }

    if (cur === curV2) return res
    if (cur > curV2) return 1
    else return -1
  }, 0)

  if (res === 0 && v2.length > v1.length) {
    res = v2.slice(v1.length).some(e => e > 0) ? -1 : 0
  }

  return res
}
// @lc code=end


