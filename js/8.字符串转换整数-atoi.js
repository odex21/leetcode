//@ts-check

/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start

const MAX = 2 ** 31 - 1
const ValidNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  /**
   * @type {1 | -1 | undefined}
   */
  let flag
  /**
   * @type {number}
   */
  let res
  for (let i = 0; i < s.length; i++) {
    const cur = s[i]
    if (cur === ' ') {
      if (flag || res != null) {
        break
      }
      continue
    } else if (cur === '+') {
      if (flag || res != null) break
      flag = 1
      continue
    } else if (cur === '-') {
      if (flag || res != null) {
        break
      }
      flag = -1
      continue
    } else if (ValidNum.includes(cur)) {
      if (typeof res === 'undefined') {
        res = +cur
      } else {
        res = res * 10 + +cur
        if (res > MAX) {
          res = MAX
          if (flag === -1) {
            res += 1
          }
          break
        }
      }
    } else {
      break
    }
  }

  if (typeof res === 'undefined') {
    return 0
  } else {
    if (flag === -1) {
      res *= -1
    }
  }
  // console.log('MAX', MAX)

  return res
}
// @lc code=end

module.exports = {
  myAtoi,
}
