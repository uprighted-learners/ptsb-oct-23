// Props are an argument provided by the parent component who renders a child
function Header(props) {
  console.log(props)
  console.log(props.subtitle)
  return (
    <header className='App-header'>
      {/* Using the props argument we can pass values for React to render */}
      <h1 className='App-color'>{props.title}</h1>

      {/* Here we conditionally render the subtitle if the prop is not undefined */}
      {props.subtitle && <h4>{props.subtitle}</h4>}
    </header>
  )
}

export default Header
