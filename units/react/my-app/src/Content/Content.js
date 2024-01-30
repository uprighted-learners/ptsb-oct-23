function Content(props) {
  console.log(props)
  return (
    <>
      <div>Content</div>
      <ul>
        {/* Render multiple elements from our fake cats data w/ map() */}
        {/* Challenge 3: If you change map() to forEach(), why doesn't it work? */}
        {/* Answer: your answer here */}
        {props.cats.map((cat, index) => {
          // Why we use keys!
          // https://react.dev/learn/rendering-lists#why-does-react-need-keys
          // Read the whole page but this links to specifically this part ^
          return <li key={index}>{`${cat.name}-${index}`}</li>
        })}
      </ul>
    </>
  )
}

export default Content
