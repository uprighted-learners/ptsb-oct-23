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
          // The key prop helps React better render and update during re-renders
          // We can use the index to achieve a unique ID
          // https://react.dev/learn/rendering-lists
          return <li key={index}>{`${cat.name}-${index}`}</li>
        })}
      </ul>
    </>
  )
}

export default Content
