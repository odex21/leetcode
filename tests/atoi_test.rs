use leetcode::solution::Solution;

fn test(s: &str) {
  let res = Solution::my_atoi(s.to_string());
  assert_eq!(res, 1);
}

#[test]
fn main() {
  test("hello")
}
