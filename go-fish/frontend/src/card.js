
export default function Card (
  { value, suit }
) {
  const suitColor =
    ['♥️', '♦️'].includes(suit)
    ? 'red' : 'black'
  return (
    <div style={{
      width: '64px',
      height: '89px',
      backgroundColor: 'white',
      borderRadius: '5px',
      display: 'flex',
      margin: 5,
      color: suitColor,
    }}>
      <span style={{
        margin: 'auto',
      }}>{`${value}${suit}`}</span>
    </div>
  )
}
