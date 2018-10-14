const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  // if it exists
  if (req.headers.authorization) {
    // 'Bearer token but we just want token'
    const token = req.headers.authorization.split(' ')[1]
    // if it is real
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        // if not be angery
        next(Error('Failed to authenticate token'))
      }
      else {
        console.log(typeof decoded) // whether it is boolean
        req.decoded = decoded
        next()
      }
    })
  }
  else {
    next(Error('no token provided'))
  }
}