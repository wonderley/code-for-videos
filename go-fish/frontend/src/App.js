import './App.css'
import Card from './card'
import Hand from './hand'
import {
  createDeck,
  shuffleDeck,
} from './deck'

function App() {
  const unshuffledDeck = createDeck()
  const deck = shuffleDeck(unshuffledDeck)
  const numPlayers = 3
  const numCards = 5
  const handData = []
  for (let i = 0; i < numPlayers; i++)
    handData.push([])
  for (let i = 0;
  i < numPlayers*numCards;
  i++) {
    const cardProps = deck.pop()
    handData[i % numPlayers].push(cardProps)
  }
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

export default App
