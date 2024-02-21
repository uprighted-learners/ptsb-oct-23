import Layout from './Layout'
import { Outlet } from 'react-router-dom'

function AboutPage() {
  return (
    <Layout>
      <h1>About Page</h1>
      <p>This is the overall company about us page.</p>
      {/*
        Outlets allow React Router to render nested child components on route
      matches.
        This renders if match on /about/:name (see index.js)
        Doc: https://reactrouter.com/en/main/components/outlet
      */}
      <Outlet />
    </Layout>
  )
}

export default AboutPage
