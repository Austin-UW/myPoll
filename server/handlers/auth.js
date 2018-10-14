const db = require('../models/index')

// handlers/auth.js
const auth = async (req, res, next) => {
  // TODO: req not being passed
  try {
    const user = await db.User.create(req.body)
    console.log(user)
    res.json(user) // includes password, oopsie!
  } catch (err) {
    next(err)
  }
}
exports.register = auth

exports.login = async (req, res, next) => {
  try {
    console.log('scarce')
  } catch (err) {
    next(err)
  }
}
