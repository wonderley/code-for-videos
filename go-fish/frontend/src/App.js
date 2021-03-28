import './App.css'
import Card from './card'
import Hand from './hand'

function App() {
  const cards = [
    <Card value='5'  suit='♥️'/>,
    <Card value='J'  suit='♣️'/>,
    <Card value='2'  suit='♦️'/>,
    <Card value='10' suit='♥️'/>,
    <Card value='2'  suit='♠️'/>,
  ]
  return (
    <div className='App'>
      <header className='App-header'>
        <Hand name='Player 1'>
          {cards}
        </Hand>
        <Hand name='Player 2'>
          {cards}
        </Hand>
        <Hand name='Player 3'>
          {cards}
        </Hand>
      </header>
    </div>
  )
}

export default App
