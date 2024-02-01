function ComputedCount(props) {
  return (
    <div
      style={{
        margin: '15px',
        padding: '10px 17px',
        backgroundColor: '#000000',
        display: 'inline-block',
        color: '#ffffff',
        fontWeight: 900,
      }}
    >
      [COMPUTED COUNT]: {props.count * 2}
      <br />
      <span style={{ fontWeight: 400, fontSize: 12 }}>formula: count x 2</span>
    </div>
  )
}

export default ComputedCount
