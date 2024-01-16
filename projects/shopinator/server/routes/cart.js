const express = require('express')
const { paths } = require('../constants')
const router = express.Router()

router.get('/', (req, res) => {
  res.sendFile(`${paths.public}/cart.html`)
})

module.exports = router
