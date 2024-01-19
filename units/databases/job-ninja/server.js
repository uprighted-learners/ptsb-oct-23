// Learn MongoDB CRUD
// https://www.mongodb.com/docs/manual/crud/

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

// Open connection to specific collection
// This is not the data but you now have methods available to query for data
async function getCollection(collectionName) {
  await client.connect()
  const collection = await client
    .db(process.env.DB_APP)
    .collection(collectionName)
  return collection
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

// POST Add Company Endpoint
// Fields: id, title, industry, location
app.post('/company/add', async (req, res) => {
  const { companies } = req.body
  const companiesCollection = await getCollection('companies')
  const companyList = [...companies]

  companiesCollection.insertMany(companyList)

  // Add 10 companies
  // 5 are successful, 5 fail

  res.status(200).json({
    success: true,
    added: companyList.length,
  })
})

app.listen(process.env.SERVER_PORT, (req, res) => {
  console.log(
    `starting server at ${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`,
  )
})
