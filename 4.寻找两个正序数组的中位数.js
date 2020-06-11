/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  function sort(array, less) {
    function swap(i, j) {
      const t = array[i]
      array[i] = array[j]
      array[j] = t
    }
    function quicksort(left, right) {
      if (left < right) {
        const pivot = array[left + Math.floor((right - left) / 2)]
        let
          left_new = left,
          right_new = right

        do {
          while (less(array[left_new], pivot)) {
            left_new += 1
          }
          while (less(pivot, array[right_new])) {
            right_new -= 1
          }
          if (left_new <= right_new) {
            swap(left_new, right_new)
            left_new += 1
            right_new -= 1
          }
        } while (left_new <= right_new)

        quicksort(left, right_new)
        quicksort(left_new, right)
      }
    }
    quicksort(0, array.length - 1)
    return array
  }

  const nArr = sort(nums1.concat(nums2), (a, b) => a > b)
  const m = nArr.length / 2
  if (nArr.length % 2 === 0) {
    return (nArr[m - 1] + nArr[m]) / 2
  }
  else {
    return nArr[Math.floor(m)]
  }
}
// @lc code=end



