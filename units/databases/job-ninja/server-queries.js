require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const { MongoClient } = require('mongodb')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(express.static('public'))

// Open the overall database connection
const client = new MongoClient(`${process.env.DB_URL}/${process.env.DB_APP}`)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/companies', async (req, res) => {
  // Open connection to specific collection
  // This is not the data but you now have methods available to query for data
  await client.connect()
  const collection = await client.db(process.env.DB_APP).collection('companies')
  res.send('done')
})

app.listen(process.env.SERVER_PORT, (req, res) => {
  console.log(
    `starting server at ${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`,
  )
})
