require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

const PORT = process.env.SERVER_PORT || 8080
const HOST = process.env.SERVER_HOST
const DB_URL = process.env.DB_URL

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(express.static(__dirname))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen(PORT, (req, res) => {
  console.log(`starting server at ${HOST}:${PORT}`)
})
