require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(__dirname))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen(process.env.SERVER_PORT, (req, res) => {
  console.log(
    `starting server at ${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`,
  )
})
