require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const { dbConnect } = require('./db')
const Product = require('./models/product')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(__dirname))
app.get('/', (req, res) => res.redirect('/products'))

app.get('/products', (req, res) => {
  res.sendFile(__dirname + `/index.html`)
})

app.post('/products/:id?', async (req, res) => {
  const productId = req.query.id || null
  let products

  if (productId) {
    products = await Product.findOne({ id: parseInt(productId) })
  } else {
    products = await Product.find()
  }

  res.status(200).json(products)
})

app.listen(process.env.SERVER_PORT, (req, res) => {
  dbConnect()
  console.log(
    `starting server at ${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`,
  )
})
