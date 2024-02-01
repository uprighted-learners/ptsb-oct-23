import './Content.css'

function Content(props) {
  return (
    <>
      <div>{props.children}</div>
      <hr />
      <h4>User List</h4>
      <ul className='user-list'>
        {/* Render multiple elements from our fake cats data w/ map() */}
        {/* Challenge 3: If you change map() to forEach(), why doesn't it work? */}
        {/* Answer: your answer here */}
        {props.users.map((user, index) => {
          // Why we use keys!
          // https://react.dev/learn/rendering-lists#why-does-react-need-keys
          // Read the whole page but this links to specifically this part ^
          return (
            <li className='user' key={index}>
              {user.name}
              <br />
              {`${user.role}`}
            </li>
          )
        })}
      </ul>
      <hr />
    </>
  )
}

export default Content
