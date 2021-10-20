import Card from './card'

export default function Hand(
  {
    name,
    isPlayerTurn,
    isHandSelected,
    showCards,
    cardData,
    playerIdx,
    selectedCardIdx,
    onCardSelected,
    onHandSelected,
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
  const nameUnderline = isPlayerTurn ? {
    textDecoration: 'underline',
    textDecorationThickness: '4px',
  } : undefined
  const border = isHandSelected ?
    '8px solid orange' :
    '8px solid transparent'
  return (
    <div
      onClick={onHandSelected}
      style={{
        width: '100%',
        padding: 10,
        boxSizing: 'border-box',
        border,
    }}>
      <span style={{
        color: 'white',
        fontWeight: 'bold',
        ...nameUnderline,
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
