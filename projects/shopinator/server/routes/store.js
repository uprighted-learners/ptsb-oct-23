const express = require('express')
const { paths } = require('../constants')
const router = express.Router()

router.get(['/', '/store'], (req, res) => {
  res.sendFile(`${paths.public}/index.html`)
})

module.exports = router
