
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

function printDeck(d) {
  console.log(`deck has ${d.length} cards`)
  for (let c of d)
    console.log(`${c.value}${c.suit}`)
}

function testDeck() {
  const d = deck()
  printDeck(d)
}

function testShuffle() {
  const d = createDeck()
  const d2 = shuffleDeck(d)
  printDeck(d2)
}

testShuffle()
