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
    console.log(this) // consoles the users name that we are saving
    // if we send in a different password
    if (!this.isModified('password')) {
      return next()
    }
    // if the password is not different from what?
    else {
      // change user password to
      console.log('else')
      const hashed = await bcrypt.hash(this.password, 15)
      this.password = hashed
    }
  } catch (err) {
    return next(err)
  }
})
userSchema.methods.comparePassword = async function (attempt, next) {
  try {
    // this.password is current password being stored, returns boolean.
    return await bcrypt.compare(attempt, this.password)
  } catch (err) {
    next(err)
  }
}
module.exports = mongoose.model('User', userSchema)
