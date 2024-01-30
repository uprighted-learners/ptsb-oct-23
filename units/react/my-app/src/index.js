import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

// The starting point of all React apps
// This gets an element from public/index.html and mounts (aka injects) the React application
const root = ReactDOM.createRoot(document.getElementById('root'))

// Strict mode is a more rigid set of rules when developing in React to improve your code/practices
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
