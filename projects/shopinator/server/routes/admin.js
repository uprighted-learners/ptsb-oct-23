const express = require('express')
const { paths } = require('../constants')
const { handleAuth } = require('../middleware')
const router = express.Router()

router.get('/', handleAuth, (req, res) => {
  res.sendFile(`${paths.public}/admin.html`)
})

module.exports = router
