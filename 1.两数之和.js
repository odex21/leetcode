/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = {}
  for (let a = 0;a < nums.length;a++) {

    let cur = nums[a]
    if (map[cur] !== undefined) map[cur] = [map[cur], a]
    else map[cur] = a

    if (a > 0) {
      let arr = map[target - cur]

      if (arr !== undefined) {
        const isArr = Array.isArray(arr)

        const temp = isArr ? arr[0] : arr

        if (temp !== undefined) {

          if (target - cur === cur && !isArr) continue
          if (isArr) {
            let b
            while ((b = arr.pop()) === a) { }
            return [a, b]
          } else {
            return [a, temp]
          }

        }
      }
    }
  }
}

// @lc code=end

