use leetcode::solution::Solution;

fn test(expect: i32, s: &str) {
  let res = Solution::my_atoi(s.to_string());
  assert_eq!(res, expect);
}

#[test]
fn main() {
  test(42, "42");
  test(-2147483648, "-91283472332");
  test(0, "+-12");
}
