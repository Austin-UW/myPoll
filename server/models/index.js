const mongoose = require('mongoose')
require('dotenv').config()
// log all transactions and stop weird deprecation errors
mongoose.set('useCreateIndex', true)
// mongoose.set('debug', true)
// allow us to use promises
mongoose.Promise = global.Promise

mongoose.connect(
  process.env.DB,
  { useNewUrlParser: true }
)

module.exports.User = require('./user')
module.exports.Poll = require('./poll')
