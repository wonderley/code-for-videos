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
  const initialTableData =
    deal(deck, numPlayers, numCards)
  const [tableData] =
    useState(initialTableData)
  const [playerTurn] =
    useState(0)
  const [gameFrozen, setGameFrozen]
    = useState(true)
  return (
    <div className='App' style={{
      pointerEvents: gameFrozen ? 'none' : 'auto',
    }}>
      <header className='App-header'>
        <Table
          tableData={tableData}
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
  tableData,
  playerTurn
}) {
  const [selectedCard, setSelectedCard]
    = useState(undefined)
  const [selectedHand, setSelectedHand]
    = useState(undefined)
  return tableData.map(
    (handData, i) => {
      const isPlayerTurn = playerTurn === i
      const requestedCardValue = selectedCard ?
        tableData[selectedCard.playerIdx]
          [selectedCard.cardIdx].value :
        undefined
      const requestedCardIdx = requestedCardValue ?
        tableData[i]
        .findIndex(c => c.value === requestedCardValue)
      : undefined
      const isHandSelected = i === selectedHand
      const hasTheRequestedCard =
        requestedCardIdx !== undefined
        && requestedCardIdx !== -1
      return <Hand
        name={`Player ${i+1}`}
        isPlayerTurn={isPlayerTurn}
        showCards={i === 0}
        handData={handData}
        selectedCardIdx={
          selectedCard &&
          selectedCard.playerIdx === i &&
          selectedCard.cardIdx
        }
        onCardSelected={(cardIdx) => {
          if (!isPlayerTurn) return
          setSelectedCard({
            playerIdx: i,
            cardIdx,
          })
        }}
        isHandSelected={isHandSelected}
        onHandSelected={() => {
          if (isPlayerTurn) return
          // You can only select a hand after
          // selecting one of your own cards.
          if (!selectedCard) return
          setSelectedHand(i)
        }}
        requestedCardIdx={requestedCardIdx}
        hasTheRequestedCard={hasTheRequestedCard}
      />
    })
}
