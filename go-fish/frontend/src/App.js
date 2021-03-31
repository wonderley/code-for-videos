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
  const handContent = []
  for (let i = 0; i < numPlayers; i++)
    handContent.push([])
  for (let i = 0;
  i < numPlayers*numCards;
  i++) {
    const cardProps = deck.pop()
    handContent[i % numPlayers].push(
      <Card {...cardProps} />
    )
  }
  const hands = []
  for (let i = 0;
  i < handContent.length;
  i++) {
    hands.push(
      <Hand name={`Player ${i+1}`}>
        {handContent[i]}
      </Hand>
    )
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <Hand name={`Player ${1}`}>
          {handContent[0]}
        </Hand>
        <Hand name={`Player ${2}`}>
          {handContent[1]}
        </Hand>
        <Hand name={`Player ${3}`}>
          {handContent[2]}
        </Hand>
      </header>
    </div>
  )
}

export default App
