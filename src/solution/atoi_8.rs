use super::Solution;

/*
 * @lc app=leetcode.cn id=8 lang=rust
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
impl Solution {
  pub fn my_atoi(s: String) -> i32 {
    let mut negative = false;
    let mut res = 0i64;
    let max = i32::MAX as i64;

    for (i, cur) in s.trim().chars().enumerate() {
      // match cur {
      //   '+' => {
      //     if i == 0 {
      //       continue;
      //     } else {
      //       break;
      //     }
      //   }
      //   '-' => {
      //     if i == 0 {
      //       negative = true;
      //       continue;
      //     } else {
      //       break;
      //     }
      //   }
      //   c if c.is_digit(10) => {
      //     res = res * 10 + cur.to_digit(10).unwrap() as i64;
      //     if res > (i32::MAX as i64) {
      //       if negative {
      //         return i32::MIN;
      //       } else {
      //         return i32::MAX;
      //       }
      //     }
      //   }
      //   _ => {
      //     break;
      //   }
      // }

      if cur == '+' && i == 0 {
        continue;
      } else if cur == '-' && i == 0 {
        negative = true;
        continue;
      } else if !cur.is_digit(10) {
        break;
      } else {
        res = res * 10 + cur.to_digit(10).unwrap() as i64;
        if res > max {
          if negative {
            return i32::MIN;
          } else {
            return i32::MAX;
          }
        }
      }
    }

    if negative {
      -res as i32
    } else {
      res as i32
    }
  }
}
// @lc code=end
