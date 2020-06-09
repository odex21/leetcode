/*
 * @lc app=leetcode.cn id=133 lang=javascript
 *
 * [133] 克隆图
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (!node) return
  const map = new Map()

  const cloneNode = (node) => {
    if (map.has(node.val)) return

    const newNode = new Node(node.val, [])
    map.set(node.val, newNode)

    node.neighbors.forEach(n => {
      const neighbor = map.get(n.val) || cloneNode(n)
      newNode.neighbors.push(neighbor)

    })

    return newNode
  }

  return cloneNode(node)
}
// @lc code=end
