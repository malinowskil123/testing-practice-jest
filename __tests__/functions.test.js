// npm test runs your tests

// import doenst work beacuse node uses es5 not 6
const { sum, double } = require('../functions')
// jest is fast beacuse it runs your tests parallel
test('sum() test', () => {
  // assertion
  expect(sum(2, 2)).toEqual(4)
  expect(sum(2, 4)).toEqual(6)
})

test('sum() test illegal args', () => {
  // assertion
  expect(sum(2, '9')).toEqual('illegal args')
})

test('does double invoke sum', () => {
  // mock functu
  const fakeSum = jest.fn()
  console.log(fakeSum.mock)
  double(2, fakeSum)
  console.log(fakeSum.mock)
  expect(fakeSum).toHaveBeenCalled()
})

// matchers
// toBe
// toEqual
// toContain
// toBeNull
