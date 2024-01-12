// dotenv is a Node package that allows you to load global/environment variables into your applications
// A simple example (see .env file) is the port, it is loaded into process.env which is globally available in Node
// This line must come first (although there is other styles) to load it as soon as possible
// This is now available in Node 20+ (although it works different and not many apps use it yet)
// Check the app.listen code at the bottom of the file to see how it's used
require('dotenv').config()

// Express = Node framework for building server applications
// You will likely be on version 4.x.x but 5 is (supposedly) coming
// Make sure when you read documentation you are reading the correct version
const express = require('express')
const cors = require('cors')

// After importing packages, initialize a new Express app when this file runs
const app = express()

// 8080 is a common port for servers and 3000 for frontend
const SERVER_PORT = 8080

// First example of applying middleware w/ app.use()
// Middleware are functions that run before other functions takes place
// Example - users go to a protected page, might have a middleware validating they are logged in
// https://expressjs.com/en/guide/writing-middleware.html
// https://expressjs.com/en/guide/using-middleware.html
//
// Static enables the client to serve files like images using different paths based on folder structures
// https://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))
app.use(express.static('images'))

// CORS is related to security between clients (frontend) and servers talking to each other (middleware)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
// https://expressjs.com/en/resources/middleware/cors.html
app.use(cors())

// Allows Express to receive and parse requests that send JSON (middleware)
// JSON is a data type similar looking to a Javascript object but keys must have quotes around them
// Example - { "name": "Albert", "age": 34 } compared to { name: "Albert", age: 34 } (JS Object)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
app.use(express.json())

// Receive and parse request URL string in properly encoded formats
// https://www.geeksforgeeks.org/express-js-express-urlencoded-function/
app.use(express.urlencoded())

// Custom middleware example - logging for every application request
app.use((req, res, next) => {
  console.log('custom middleware application level - log')
  // Next is provided so you can continue to execute middlewares and so on to the final function
  next()
})

// Custom middleware example - checking user is logged in
// Misc lesson - handle{FunctionName} is a common naming pattern
const handleLogin = (req, res, next) => {
  console.log('custom middleware route level - check logged or not')
  // Toggle to false to see the middleware redirect to the 404 page
  const isLoggedIn = true

  // Misc lesson - is{SomeState} is a common naming pattern for state
  // You might also see something like has{SomeState} which is similar
  if (isLoggedIn) {
    next()
    return false
  }

  // Sends the user to the error page because they are not logged in
  res.redirect('/404')
}

// & Challenge 2
// Update this function to take in a name of a file and the extension for any given file type
// Look for opps to rename things to be more clear/specific to what they are
// Update all occurences in your file to use your refactored function
function createPath(fileName = null, extension = null) {
  if (!fileName || !extension) {
    throw new Error(
      '[ERROR | createPath()] File name and extension are required',
    )
  }

  const validExtensions = ['jpg', 'png', 'html']

  // Sends path back to location of image files
  if (validExtensions.includes('jpg', 'png') && extension !== 'html') {
    return `/images/${fileName}.${extension}`
  }

  // Sends back path to location of HTML files
  if (extension === 'html') {
    return `${__dirname}/${fileName}.${extension}`
  }
}

// For the following app.get() and app.post(), these are the various HTTP requests that can be made to your endpoints
// Slash is the homepage of your application, sends its' HTML file
// GET requests typically pull information from a server
// GET routes will match the provided route string and then run a callback function
// https://expressjs.com/en/guide/routing.html
//
// req = request
// res = response (you might also see "resp", follow your company's coding style)
app.get('/', (req, res) => {
  // Send a file
  // This will automatically set a Content-Type header based on file extension
  res.sendFile(createPath('index', 'html'))
})

app.get('/about', (req, res) => {
  // Sends HTTP response
  // https://expressjs.com/en/5x/api.html#res.send
  res.send('<h2>res.send()</h2>')
})

app.get('/login', (req, res) => {
  res.sendFile(createPath('login', 'html'))
})

app.get('/success', (req, res) => {
  res.sendFile(createPath('success', 'html'))
})

app.get('/404', (req, res) => {
  res.sendFile(createPath('404', 'html'))
})

app.get('/private', handleLogin, (req, res) => {
  res.send(
    '<h2>Protected page requiring login, checked by custom middleware handleLogin()</h2>',
  )
})

// POST requests typically send information to a server
// This endpoint will be expecting login information is sent to it so it can be processed
app.post('/login', (req, res) => {
  console.log('Login detected')

  const users = [{ username: 'dandigangi', password: 'password' }]

  // We create an example sending a POST request in both the body and query string
  // These are two different styles of sending information but they could also be combined
  console.log('req.body', req.body)
  // console.log('req.query', req.query)

  // Note - you would never send user login information over a query string so this fake login will use req.body
  const { username, password } = req.body

  const validUser = users.find((user) => {
    return user.username === username && user.password === password
  })

  // Return JSON w/ 200 status code response because good login
  if (validUser) {
    res.status(200).json({
      success: true,
    })

    return false
  }

  // Return JSON w/ 401 status code response because bad login
  res.status(401).json({
    success: false,
  })
})

// Dynamic routes can include parameters of any value
// The callback function is where you handle the request and this example confirms valid Pokemon are passed, otherwise error image
// Example - localhost:8080/pokemon/squirtle => should return the image of squirtle
app.get('/pokemon/:name', (req, res) => {
  console.log('req.query', req.query)

  const validPokemon = ['pikachu', 'charmander', 'squirtle']

  // & Challenge 1
  // Render any valid image from our images folder using pokemon names
  // Render the error images if you get an invalid pokemon name in the route params
  if (validPokemon.find((pokemonName) => pokemonName === req.params.name)) {
    res.send(
      `<h2>GET "/pokemon/:name" route matched with "${req.params.name}"</h2>` +
        `<img src="${createPath('jpg', req.params.name)}" />`,
    )
  } else {
    res.send(
      '<h2>GET "/pokemon/:name" route matched but no valid Pokemon name</h2>' +
        `<img src="${createPath('jpg', 'error')}" />`,
    )
  }
})

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server started on localhost:${process.env.SERVER_PORT}`)
})
