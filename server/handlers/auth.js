const jwt = require('jsonwebtoken')

const db = require('../models/index')
// handlers/auth.js
exports.register = async (req, res, next) => {
  console.log('REGISTER HANDLER CALLEd in handlers/auth.js')

  try {
    const user = await db.User.create(req.body)
    console.log(user)
    const { id, username } = user
    res.json({ id, username })
  }
  catch (err) {
    next(err)
  }
}

exports.login = async (req, res, next) => {
  try {
    console.log('LOGGIN HANDLER CALLED in handlers/auth.js')
    const user = await db.User.findOne({ username: req.body.username })
    const valid = await user.comparePassword(req.body.password)

    if (valid) {
      res.json({ id: user.id, username: user.username })
    }
    else { // if the username is bad,
      throw new Error() // catch that err
    }
  }
  catch (err) {
    err.message = 'Sorry that username is already taken'
    next(err)
  }
}