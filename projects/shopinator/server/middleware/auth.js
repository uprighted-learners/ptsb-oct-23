function handleAuth(req, res, next) {
  console.log('auth check middleware')
  next()
}

module.exports = handleAuth
