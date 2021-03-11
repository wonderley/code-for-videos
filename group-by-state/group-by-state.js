function groupByState(rows) {
  const totals = {}
  for (let row of rows) {
    const total =
      totals[row.state] || 0
    totals[row.state] =
      total + row.miles
  }
  return totals
}

const rows = [
  { state: "GA", miles: 100 },
  { state: "FL", miles: 150 },
  { state: "GA", miles: 200 },
  { state: "FL", miles: 100 },
  { state: "NY", miles: 50 }
]
console.log(groupByState(rows))
