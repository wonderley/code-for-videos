export default function Hand(
  { children, name }
) {
  return (
    <div style={{margin: 20}}>
      <span style={{
        color: 'white',
        fontWeight: 'bold',
      }}>
        {name || ''}
      </span>
      <div style={{
        display: 'flex',
        flexDirection: 'row'
      }}>
        {children}
      </div>
    </div>
  )
}
