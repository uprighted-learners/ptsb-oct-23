function Header(props) {
  console.log(props)
  console.log(props.subtitle)
  return (
    <header className='App-header'>
      <h1 className='App-color'>{props.title}</h1>
      {props.subtitle && <h4>{props.subtitle}</h4>}
    </header>
  )
}

export default Header
