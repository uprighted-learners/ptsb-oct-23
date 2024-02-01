function CounterLayout(props) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {props.children}
    </div>
  )
}

export default CounterLayout
