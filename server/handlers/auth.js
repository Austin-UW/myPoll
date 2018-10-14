const jwt = require('jsonwebtoken')

const db = require('../models/index')
// handlers/auth.js
exports.register = async (req, res, next) => {
  console.log('REGISTER HANDLER CALLEd in handlers/auth.js')

  try {
    const user = await db.User.create(req.body)
    const { id, username } = user

    const token = jwt.sign({ id, username }, process.env.SECRET)
    res.status(201).json({ id, username, token })
  }
  catch (err) {
    if (err.status === 11000) {
      err.message = 'Sorry, username taken'
    }
    next(err)
  }
}

exports.login = async (req, res, next) => {
  try {
    console.log('LOGGIN HANDLER CALLED in handlers/auth.js')
    const user = await db.User.findOne({ username: req.body.username })
    const { id, username } = user
    const valid = await user.comparePassword(req.body.password)

    if (valid) {
      const token = jwt.sign({ id, username }, process.env.SECRET)
      res.json({ id, username, token })
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