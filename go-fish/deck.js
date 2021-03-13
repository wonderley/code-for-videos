
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

function testDeck() {
  const d = createDeck()
  console.log(`deck has ${d.length} cards`)
  for (let c of d)
    console.log(`${c.value}${c.suit}`)
}

testDeck()