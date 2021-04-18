import { useState } from 'react';
import './App.css'
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
  const [handData] =
    useState(initialHandData)
  const [playerTurn] =
    useState(0)
  return (
    <div className='App'>
      <header className='App-header'>
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
  const [selectedCard, setSelectedCard]
    = useState(undefined)
  return handData.map(
    (cardData, i) => {
      return <Hand
        name={`Player ${i+1}`}
        isPlayerTurn={playerTurn === i}
        showCards={i === 0}
        cardData={cardData}
        selectedCardIdx={
          selectedCard &&
          selectedCard.playerIdx === i &&
          selectedCard.cardIdx
        }
        onCardSelected={(cardIdx) => {
          setSelectedCard({
            playerIdx: i,
            cardIdx,
          })
        }}
      />
    })
}
