const sum = (num1, num2) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number')
    return 'illegal args'
  return num1 + num2
}
const double = (num, fakeSum) => {
  return fakeSum(num, num)
}
// export doenst work beacuse node uses es5 not 6
// need to export as object
module.exports = { sum, double }
