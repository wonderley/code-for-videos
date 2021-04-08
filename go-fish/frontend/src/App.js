import { useState } from 'react';
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
  const initialHandData =
    deal(deck, numPlayers, numCards)
  const [handData, setHandData] =
    useState(initialHandData)
  const [playerTurn] =
    useState(0)
  return (
    <div className='App'>
      <header className='App-header'>
        <button onClick={() => {
          dealCard(deck, handData, 0)
          setHandData([...handData])
        }}>
          Deal to Player 1
        </button>
        <Table
          handData={handData}
          playerTurn={playerTurn}
        />
      </header>
    </div>
  )
}

function dealCard(deck, handData, playerIdx) {
  const cardProps = deck.pop()
  handData[playerIdx].push(cardProps)
}

function deal(deck, numPlayers, numCards) {
  const handData = []
  for (let i = 0; i < numPlayers; i++)
    handData.push([])
  for (let i = 0;
  i < numPlayers*numCards;
  i++) {
    dealCard(deck, handData, i % numPlayers)
  }
  return handData
}

function Table({
  handData,
  playerTurn
}) {
  const handContent =
    handData.map(
      h => h.map(
        c => <Card {...c} />
    ))
  const hands =
    handContent.map((content, i) => (
      <Hand
        name={`Player ${i+1}`}
        isPlayerTurn={playerTurn === i}
      >
        {content}
      </Hand>
    ))
  return hands
}
