const express = require('express')
const helmet = require('helmet')
const app = express()

// --- Custom Middleware ---
// Checks cookies for a valid user session on protected pages
const handleAuth = (req, res, next) => {
  console.log('checking auth')
  next() // Calls the next middleware in the stack provided
}

// --- App Level Middleware ---
// Improves security (https://helmetjs.github.io)
app.use(helmet())

// --- Routes ---
app.get('/', async (req, res) => {
  console.log(req.cookies)
  // Because of localhost we are unable to set cookies on the front end
  // Set a cookie so our protected route can use it w/ custom middleware
  res
    .cookie('logged', 'true')
    .send('cookies set, open the console and enter document.cookie')
})

// Passed the handleAuth middleware, protected page (route level middleware)
app.get('/admin', handleAuth, (req, res) => {
  res.send('admin page')
})

// --- Start Server ---
app.listen(8080, () => {
  console.log(`Server started on localhost:8080`)
})
