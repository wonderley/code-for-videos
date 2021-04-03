import './App.css'
import Card from './card'
import Hand from './hand'
import {
  createDeck,
  shuffleDeck,
} from './deck'

export default function App() {
  const unshuffledDeck = createDeck()
  const deck = shuffleDeck(unshuffledDeck)
  const numPlayers = 3
  const numCards = 5
  const handData = deal(deck, numPlayers, numCards)
  return <Table handData={handData} />
}

function deal(deck, numPlayers, numCards) {
  const handData = []
  for (let i = 0; i < numPlayers; i++)
    handData.push([])
  for (let i = 0;
  i < numPlayers*numCards;
  i++) {
    const cardProps = deck.pop()
    handData[i % numPlayers].push(cardProps)
  }
  return handData
}

function Table({ handData }) {
  const handContent =
    handData.map(
      h => h.map(
        c => <Card {...c} />
    ))
  const hands =
    handContent.map((content, i) => (
      <Hand name={`Player ${i+1}`}>
        {content}
      </Hand>
    ))
  return (
    <div className='App'>
      <header className='App-header'>
        {hands}
      </header>
    </div>
  )
}
