import { useRouteError, Link } from 'react-router-dom'

function ErrorPage() {
  // Hook giving us access to errors captured by React Router
  const error = useRouteError()
  console.error(error)

  return (
    <>
      <h2 style={{ color: 'red' }}>Error Not Found</h2>
      <h3>
        Go back to <Link to='/'>Home</Link>
      </h3>
    </>
  )
}

export default ErrorPage
