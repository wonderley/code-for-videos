import './App.css'
import Card from './card'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Card value='5' suit='♥️'/>
        <Card value='J' suit='♣️'/>
        <Card value='2' suit='♦️'/>
      </header>
    </div>
  )
}

export default App
