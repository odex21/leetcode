use leetcode::solution::Solution;

fn test(expect: &str, s: i32) {
  let res = Solution::int_to_roman(s);
  assert_eq!(res.to_string(), expect);
}

#[test]
fn main() {
  test("III", 3);
  test("IV", 4);
  test("IX", 9);
  test("LVIII", 58);
}
