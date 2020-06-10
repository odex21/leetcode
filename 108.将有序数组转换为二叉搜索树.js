/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const findCenter = (nums, l, r) => {
    const center = Math.floor((l + r) / 2)
    if (r - l < 0) return null

    const root = new TreeNode(nums[center])

    root.left = findCenter(nums, l, center - 1)
    root.right = findCenter(nums, center + 1, r)

    return root
  }

  const root = findCenter(nums, 0, nums.length - 1)
  return root
}
// @lc code=end
