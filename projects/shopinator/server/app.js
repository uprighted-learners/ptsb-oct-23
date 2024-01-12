require('dotenv').config()
const path = require('path')
const express = require('express')
const { handleErrors } = require('./middleware/errors')
const app = express()

// Middleware
// TODO

// Routes (pre-Router)
app.get('/', (req, res) => {
  res.sendFile('./index.html')
})

// app.use(handleErrors)

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(process.env.SERVER_PORT, (req, res) => {
  console.log(
    `Server started on ${process.env.SERVER_ADDRESS}:${process.env.SERVER_PORT}`,
  )
})
