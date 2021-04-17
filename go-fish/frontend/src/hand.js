import Card from './card'

export default function Hand(
  {
    name,
    isPlayerTurn,
    showCards,
    cardData,
    playerIdx,
    selectedCardIdx,
    onCardSelected,
  }
) {
  const content = cardData.map(
    (c, i) => <Card
      isShown={showCards}
      playerIdx={playerIdx}
      cardIdx={i}
      onCardSelected={() => {
        onCardSelected(i)
      }}
      isSelected={i === selectedCardIdx}
      {...c}
    />
  )
  return (
    <div style={{
      width: '100%',
      padding: 20,
      boxSizing: 'border-box',
      border: isPlayerTurn ?
        '3px solid white' :
        undefined,
    }}>
      <span style={{
        color: 'white',
        fontWeight: 'bold',
      }}>
        {name || ''}
      </span>
      <div style={{
        display: 'grid',
        width: '100%',
        gridAutoFlow: 'column',
        gridTemplateColumns:
          'repeat(auto-fit, minmax(10px, max-content))',
        justifyItems: 'center',
        justifyContent: 'center',
      }}>
        {content}
      </div>
    </div>
  )
}
