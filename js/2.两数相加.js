/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let result = new ListNode(),
    nextVal = result
  temp = 0,
    x = 0,
    y = 0
  while (l1 != null || l2 != null) {
    x = (l1 == null) ? 0 : l1.val
    y = (l2 == null) ? 0 : l2.val
    nextVal.next = new ListNode((x + y + temp) % 10)
    temp = x + y + temp >= 10 ? 1 : 0
    if (l1 != null) l1 = l1.next
    if (l2 != null) l2 = l2.next
    nextVal = nextVal.next
  }
  if (temp == 1) {
    nextVal.next = new ListNode(1)
  }
  return result.next
}
// @lc code=end

