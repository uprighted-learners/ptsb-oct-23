import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import ErrorPage from './ErrorPage'
import AboutPerson from './AboutPerson'

// Main React Router Docs
// Advise laerning from V6 but it is likely you will encounter V5 at your future jobs
// Doc: https://reactrouter.com/en/main

// Create a router and pass in routes w/ a path to match on and what component to render for it.
// Follow this tutorial! There is a lot in there but Setup, Adding a Router, Handling Not Found Errors, Nested Routes, Loading Data, and Data Writes + HTML Forms are the key one sto complete minimum.
// Suggestion: Use this repo to continue going through the documentation/tutorials before you bring it into your projects.
// Doc: https://reactrouter.com/en/main/start/tutorial
// Doc: https://reactrouter.com/en/main/route/route#type-declaration (see this for what can be passed into a route or <Route />)
//
// Note there are other types of routers including a lower level interface
// Doc: https://reactrouter.com/en/main/router-components/hash-router
const router = createBrowserRouter([
  {
    // What path to match on
    path: '/',

    // Component to render on match
    element: <HomePage />,

    // Component to render on error
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
    errorElement: <ErrorPage />,

    // Adding nested routes! Matches on /about/:name
    // These paths cannot be absolute such as /:name because it breaks the mather
    children: [
      {
        path: ':name',
        element: <AboutPerson />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={router} />)
