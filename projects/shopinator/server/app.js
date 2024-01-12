require('dotenv').config()
const path = require('path')
const express = require('express')
const { handleAuth, handleErrors } = require('./middleware')
const { paths } = require('./constants')
const router = express.Router
const app = express()

// Middleware
app.use(express.static(paths.public))
app.use(handleErrors)

// Routes
app.get('/', (req, res) => {
  res.sendFile(`${paths.public}/index.html`)
})

app.get('/cart', (req, res) => {
  res.sendFile(`${paths.public}/cart.html`)
})

app.get('/admin', handleAuth, (req, res) => {
  res.sendFile(`${paths.public}/admin.html`)
})

app.listen(process.env.SERVER_PORT, (req, res) => {
  console.log(
    `Server started on ${process.env.SERVER_ADDRESS}:${process.env.SERVER_PORT}`,
  )
})
