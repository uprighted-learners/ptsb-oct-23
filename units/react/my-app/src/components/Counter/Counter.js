function Counter(props) {
  return (
    <div
      style={{
        margin: '15px',
        padding: '17px',
        backgroundColor: 'purple',
        display: 'inline-block',
        color: '#ffffff',
        fontWeight: 900,
      }}
    >
      <div>
        <h2 style={{ margin: '0 0 15px' }}>Count: {props.count}</h2>
        <button onClick={() => props.handleClickCount(props.count + 1)}>
          Up
        </button>
        {/* Challenge 1: Decrease the count */}
        <button onClick={() => props.handleClickCount(props.count - 1)}>
          Down
        </button>
      </div>
    </div>
  )
}

export default Counter
