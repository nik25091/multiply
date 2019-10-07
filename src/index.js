module.exports = function multiply(first, second) {
  let a = BigInt(first)
  let b = BigInt(second)
  let res = BigInt(first) * BigInt(second)
  return res + ''
}
