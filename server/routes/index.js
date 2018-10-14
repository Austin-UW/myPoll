// routes index.js
module.exports.auth = require('./auth')

module.exports.base = (req, res) => {
  console.log('get /hi')
  res.json({ message: 'hi man. god job' })
}
