function reverseLL(start) {
  let cur = start
  let next = cur.next
  let prev
  while (cur) {
    cur.next = prev
    prev = cur
    cur = next
    next = cur?.next
  }
  return prev
}

function printLL(start) {
  let cur = start
  const vals = []
  while (cur) {
    vals.push(cur.val)
    cur = cur.next
  }
  console.log(vals)
}

const ll1 = { val: 1 }
printLL(ll1)
const rll1 = reverseLL(ll1)
printLL(rll1)
const node1 = { val: 1 }
const node2 = { val: 2 }
const node3 = { val: 3 }
node1.next = node2
node2.next = node3
printLL(node1)
const rll2 = reverseLL(node1)
printLL(rll2)
