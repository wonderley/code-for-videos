
export default function Card (
  { 
    value,
    suit,
    isShown,
    isSelected,
    onCardSelected,
  }
) {
  const suitColor =
    ['♥️', '♦️'].includes(suit)
    ? 'red' : 'black'
  const cardText =
    isShown ? `${value}${suit}` : '🐟'
  const borderStyle =
    isSelected ? {
      border: '8px solid orange',
      boxSizing: 'border-box',
    } : undefined
  return (
    <div
      style={{
        width: '64px',
        height: '89px',
        backgroundColor:
          isShown ? 'white' : 'lightblue',
        borderRadius: '5px',
        display: 'flex',
        margin: 5,
        color: suitColor,
        ...borderStyle
      }}
      onClick={onCardSelected}
    >
      <span style={{
        margin: 'auto',
      }}>{cardText}</span>
    </div>
  )
}
