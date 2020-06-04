/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */




// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const char = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  const exChar = {
    I: ['V', 'X'],
    X: ['L', 'C'],
    C: ['D', 'M']
  }


  const temp = s.split('')
  let skip = false
  return temp.reduce((res, cur, index, arr) => {
    if (skip) {
      skip = false
      return res
    }
    const value = char[cur]
    if (exChar[cur] && exChar[cur].includes(arr[index + 1])) {
      res += -value + char[arr[index + 1]]
      skip = true
    } else {
      res += value
    }
    return res
  }, 0)
}
// @lc code=end

