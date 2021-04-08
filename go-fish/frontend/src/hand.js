export default function Hand(
  { children, name }
) {
  return (
    <div style={{
      width: '100%',
      padding: 20,
      boxSizing: 'border-box',
      border: '3px solid white',
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
        {children}
      </div>
    </div>
  )
}
