function multiples(a, b, limit) {
  const result = new Map()
  const nodes = [a, b]
  while (nodes.length) {
    const cur = nodes.shift()
    if (cur < limit) {
      result.set(cur, true)
      nodes.push(cur * 3, cur * 5)
    }
  }
  return Array.from(result.keys())
}

console.log(multiples(3, 5, 10))
console.log(multiples(3, 5, 1000))
