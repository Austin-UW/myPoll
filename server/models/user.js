const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  polls: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Poll'
    }
  ]
  // comparePassword: () =>
})
// NOTE: arrow functions auto bind this keyword to object and this will not refer to global
userSchema.pre('save', async function (next) {
  try {
    // if all is well
    if (!this.isModified('password')) {
      return next()
    }
    // if the password is different
    else {
      // change user password to a big boy password
      console.log('all is good in user saving user.js pre try.else')
      const hashed = await bcrypt.hash(this.password, 15)
      this.password = hashed
    }
  }
  catch (err) {
    // call error handlers, but which one?
    return next(err)
  }
})
userSchema.methods.comparePassword = async function (attempt, next) {
  try {
    // this.password is current password being stored, returns boolean.
    return await bcrypt.compare(attempt, this.password)
  }
  catch (err) {
    next(err)
  }
}
module.exports = mongoose.model('User', userSchema)
