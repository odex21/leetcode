use super::Solution;

/*
 * @lc app=leetcode.cn id=12 lang=rust
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
impl Solution {
  pub fn int_to_roman(num: i32) -> String {
    [
      (1000, "M"),
      (900, "CM"),
      (500, "D"),
      (400, "CD"),
      (100, "C"),
      (90, "XC"),
      (50, "L"),
      (40, "XL"),
      (10, "X"),
      (9, "IX"),
      (5, "V"),
      (4, "IV"),
      (1, "I"),
    ]
    .iter()
    .fold(
      (String::with_capacity(13), num),
      |(res, num), (base, unit)| (res + &unit.repeat((num / base) as usize), num % base),
    )
    .0
  }
}
// @lc code=end
