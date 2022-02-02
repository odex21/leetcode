const { myAtoi } = require('./8.字符串转换整数-atoi')

const test = (s) => {
  const res = myAtoi(s)
  console.log('input', s, 'output', res)
}

test('42')
test('   -42')
test('4193 with words')
test('words and 987')
test('-91283472332')
test('-+12')
test('+1')
test('00000-42a1234')
