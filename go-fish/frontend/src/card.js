
export default function Card (
  { value, suit }
) {
  const isShown = false
  const suitColor =
    ['♥️', '♦️'].includes(suit)
    ? 'red' : 'black'
  const cardText =
    isShown ? `${value}${suit}` : '🐟'
  return (
    <div style={{
      width: '64px',
      height: '89px',
      backgroundColor:
        isShown ? 'white' : 'lightblue',
      borderRadius: '5px',
      display: 'flex',
      margin: 5,
      color: suitColor,
    }}>
      <span style={{
        margin: 'auto',
      }}>{cardText}</span>
    </div>
  )
}
