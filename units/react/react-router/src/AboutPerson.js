import { useParams } from 'react-router-dom'

function AboutPerson(props) {
  // Hook similar to things like req.query/req.params we've used in the pass to access URL values
  // Doc: https://reactrouter.com/en/main/hooks/use-params
  let { name } = useParams()

  return (
    <>
      <hr />
      <h5>
        You accessed a person's about info on the company about page at:{' '}
        <pre>/about/{name}</pre>
      </h5>
    </>
  )
}

export default AboutPerson
