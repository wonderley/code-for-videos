function sumOfDigits(n) {
  let sum = 0
  while (n > 0) {
    sum += n % 10
    n = Math.floor(n / 10)
  }
  return sum
}

const tests =
  [912875, 189025, 10]
for (let n of tests) {
  console.log(sumOfDigits(n))
}