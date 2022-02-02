/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 贪心，让子序列尽可能的长，就得让它增长的尽可能慢。
 * 所以遇到比子序列最后一个数大的，就插到队尾，不然插入队中
 */
var lengthOfLIS = function (nums) {
  const res = []
  nums.forEach((cur, i) => {
    // 第一个元素
    if (i === 0) {
      res.push(cur)
      return
    }

    if (cur > res[res.length - 1]) {
      res.push(cur)
    } else {
      let l = 0
      let r = res.length - 1
      // 如果找不到就是变成第一个元素了
      let pos = -1

      while (l <= r) {
        let mid = (l + r) >> 1
        const c = res[mid]
        if (c < cur) {
          pos = mid
          l = mid + 1
        } else {
          r = mid - 1
        }
      }

      res[pos + 1] = cur
    }
  })

  return res.length
}
// @lc code=end
