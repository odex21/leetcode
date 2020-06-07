/*
 * @lc app=leetcode.cn id=946 lang=javascript
 *
 * [946] 验证栈序列
 */

// @lc code=start
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  const arr = []
  let pushEl = pushed.shift(), popEl = popped.shift()
  const getLast = arr => arr[arr.length - 1]
  while (pushEl !== undefined || popEl !== undefined) {
    if (getLast(arr) === popEl) {
      arr.pop()
      popEl = popped.shift()
      if (popped.length === 0) {
        return true
      }

    } else {
      if (pushEl === undefined) {
        return false
      }

      arr.push(pushEl)
      pushEl = pushed.shift()
    }
  }
  return true
}
// @lc code=end
