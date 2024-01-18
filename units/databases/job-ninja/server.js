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

// GET to retrieve all companies or one (optional query param)
app.get('/companies', async (req, res) => {
  const companiesCollection = await getCollection('companies')
  const companies = await companiesCollection.find().toArray()

  // I returned a count property imaging a case where the UI needs to display that count
  // We _could_ count the array on front end or using the array above
  // But in a real world scenario these databases could be huge and this is faster (let the backend do the lifting!)
  // If you want to go even faster there is a speedier method named .estimatedDocumentCount()
  res.status(200).json({ companies, total: companiesCollection.countDocuments })
})

// POST to add one or many new companies
app.post('/companies/add', async (req, res) => {
  const { companies } = req.body
  const companiesCollection = await companiesToCollection('companies')

  // The spread syntax is a shorthand way in Javascript to loop over iterable objects
  // Arrays for example are iterable and spread will loop and add all the objects inside of it
  // This spread example grabs an object containing a key "companies" and value of array with an object for each company
  // After the spread runs each company object is inserted into the array below wrapping ...companies
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  const companyList = [...companies]
  companiesCollection.insertMany(companyList)

  res.status(200).json({
    success: true,
    added: companyList.length,
  })
})

app.patch('/companies/update', async (req, res) => {
  const { company } = req.body
  const companiesCollection = await getCollection('companiesCollection')

  // Use a field to identify/filter down to the records you want to update
  const query = { id: company.id }

  // "$set" is an operator used make the updates to specified fields
  // These are special operators the database needs to know what operation to perform and how
  const record = { $set: { ...company } }

  // Pass the query so it knows what to update and then the record is the data for the update
  const result = await companiesCollection.updateOne(query, record)

  res.status(200).json({
    success: true,
    matched: result.matchedCount,
    modified: result.modifiedCount,
  })
})

app.delete('/companies/delete', async (req, res) => {
  const { id } = req.body
  const companiesCollection = await getCollection('companies')

  //
  const query = { id }
  const result = await companiesCollection.deleteOne(query)

  res.status(200).json({
    success: true,
  })
})

app.listen(process.env.SERVER_PORT, (req, res) => {
  console.log(
    `starting server at ${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`,
  )
})
