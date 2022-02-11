use leetcode::solution::Solution;

fn test(expect: &str, a: i32, b: i32, c: i32) {
  let res = Solution::longest_diverse_string(a, b, c);
  assert_eq!(expect.to_string(), res)
}

#[test]
fn main() {
  test("ccaccbcc", 1, 1, 7);
  test("aabbc", 2, 2, 1);
  test("aabaa", 7, 1, 0);
  test("ccbccbccbbccbbccbbc", 0, 8, 11);
}
