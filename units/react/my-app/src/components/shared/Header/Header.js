import './Header.css'
import Subtitle from '../Subtitle/Subtitle'

// Props are an argument provided by the parent component who renders a child
function Header(props) {
  return (
    <header className='header'>
      {/* Using the props argument we can pass values for React to render */}
      <h1>{props.pageTitle}</h1>

      {/* Here we conditionally render the subtitle if the prop is not undefined */}
      {props.hasSubtitle && <Subtitle subtitle='My First App' />}

      {props.children}
    </header>
  )
}

export default Header
