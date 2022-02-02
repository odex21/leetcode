/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */


// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const findPalindrome = (s, left, right) => {
    while (s.charAt(left) === s.charAt(right) && left >= 0 && right < s.length) {
      left--
      right++
    }
    return (right - left - 2) / 2
  }

  let i = 0, j = -1
  let start = 0, end = 0
  let right = -1

  s = '#' + s.split('').join('#') + '#'

  const ansArr = []

  while (i < s.length) {
    let curLen
    if (right >= i) {
      const symIndex = j * 2 - i
      const minLen = symIndex > -1 ? Math.min(right - i, ansArr[symIndex]) : right - i
      curLen = findPalindrome(s, i - minLen, i + minLen)
    }
    else {
      curLen = findPalindrome(s, i, i)
    }
    ansArr.push(curLen)

    if (i + curLen > right) {
      j = i
      right = i + curLen
    }



    if (curLen * 2 + 1 > end - start) {
      start = i - curLen
      end = i + curLen
    }

    i++
  }
  const t = s.slice(start, Math.floor(end)).split('')
  return t.filter(e => e !== '#').join('')
}
// @lc code=end

