use super::Solution;

/*
 * @lc app=leetcode.cn id=1405 lang=rust
 *
 * [1405] 最长快乐字符串
 */

// @lc code=start
impl Solution {
  pub fn longest_diverse_string(a: i32, b: i32, c: i32) -> String {
    // 过滤掉空的
    let mut keys: Vec<(i32, &str)> = vec![(a, "a"), (b, "b"), (c, "c")]
      .into_iter()
      .filter(|(i, _s)| i > &0)
      .collect();
    let mut ret = vec![];

    while keys.len() > 0 {
      // 排序，取最大的
      keys.sort_by(|a, b| b.0.partial_cmp(&a.0).unwrap());
      let mut cur = 0;
      let len = ret.len();

      // 检测重复
      if len >= 2 && ret[len - 1] == ret[len - 2] && ret[len - 1] == keys[cur].1 {
        // 没有次大即结束
        if keys.len() > 1 {
          cur = 1;
        } else {
          break;
        }
      }
      ret.push(keys[cur].1);
      keys[cur].0 -= 1;

      if keys[cur].0 < 1 {
        keys.remove(cur);
      }
    }
    ret.concat()
  }
}
// @lc code=end
