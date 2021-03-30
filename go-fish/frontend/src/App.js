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
  const hands = [[], [], []]
  // Deal five cards to three players
  for (let i = 0; i < 3*5; i++) {
    const cardProps = deck.pop()
    hands[i % 3].push(
      <Card {...cardProps} />
    )
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <Hand name='Player 1'>
          {hands[0]}
        </Hand>
        <Hand name='Player 2'>
          {hands[1]}
        </Hand>
        <Hand name='Player 3'>
          {hands[2]}
        </Hand>
      </header>
    </div>
  )
}

export default App
