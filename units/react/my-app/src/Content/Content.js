function Content(props) {
  console.log(props)
  return (
    <>
      <div>Content</div>
      <ul>
        {props.cats.map((cat, index) => {
          return <li key={index}>{`${cat.name}-${index}`}</li>
        })}
      </ul>
    </>
  )
}

export default Content
