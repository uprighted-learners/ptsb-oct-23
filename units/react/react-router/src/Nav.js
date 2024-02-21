import { Link } from 'react-router-dom'

const fakeAboutNames = ['dan', 'demaceo', 'mikey', 'daniela', 'jahara']

function Nav() {
  return (
    <ul>
      <li>
        {/*
          Link is a React Router component to replace anchor tags.
          It allows navigation between page and hooks into features like browser history such as the back button.
          Doc: https://reactrouter.com/en/main/components/link
        */}
        <Link to='/'>Home</Link>
        {/* <a href="/">Home</a> */}
      </li>
      <li>
        <Link to='/about'>About</Link>
        <br />
        {/* <a href="/about">About</a> */}
        {fakeAboutNames.map((name) => {
          return (
            <div style={{ paddingLeft: 12, fontSize: 12 }}>
              <Link to={`/about/${name}`}>{name}</Link>
              <br />
            </div>
          )
        })}
      </li>
      <li>
        {/* Shows the use of an errorElement for pages not matching routes provided in router setup. (See index.js) */}
        <Link to='/derp'>Not Real Page</Link>
      </li>
    </ul>
  )
}

export default Nav
