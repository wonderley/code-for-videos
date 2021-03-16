
function createDeck() {
  const cards = []
  for (let suit of ['♥️', '♣️', '♦️', '♠️']) {
    for (let value of [
      2,3,4,5,6,7,8,9,10,'J','Q','K','A'
    ]) {
      cards.push({suit, value})
    }
  }
  return cards
}

function cardToString(c) {
  let asString = `${c.value}${c.suit}`
  if (asString.length === 2) {
    // Pad to make all cards three characters
    asString = ' ' + asString
  }
  return asString
}

function printDeck(d) {
  console.log(`deck has ${d.length} cards`)
  // print in five columns
  let row = []
  for (let i = 0; i < d.length; i++) {
    row.push(`${d[i].value}${d[i].suit}`)
    if (i % 5 === 4) {
      console.log(row.join(' '))
      row = []
    }
  }
}

function testShuffle() {
  const d = createDeck()
  const d2 = shuffleDeck(d)
  printDeck(d2)
}

function testDeck() {
  const d = deck()
  printDeck(d)
}

function shuffleDeck(d) {
  const cards = [...d]
  const shuffled = []
  while (cards.length) {
    const n = Math.floor(
      Math.random() * cards.length)
    shuffled.push(cards[n])
    cards.splice(n, 1)
  }
  return shuffled
}

function testShuffle() {
  const d = createDeck()
  const d2 = shuffleDeck(d)
  printDeck(d2)
}

testShuffle()
