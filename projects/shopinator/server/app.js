'use strict'
require('dotenv').config()
const path = require('path')
const express = require('express')
const cors = require('cors')
const { paths } = require('./constants')
const routes = require('./routes')
const router = express.Router
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(paths.public))

app.use(['/', '/store'], routes.store)
app.use('/cart', routes.cart)
app.use('/admin', routes.admin)

app.listen(process.env.SERVER_PORT, (req, res) => {
  console.log(
    `starting ${process.env.SERVER_ADDRESS}:${process.env.SERVER_PORT}`,
  )
})
