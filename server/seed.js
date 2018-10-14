const mongoose = require('mongoose')
require('dotenv').config()
mongoose.set('debug', true)
mongoose.Promise = global.Promise
mongoose.connect(
  process.env.DB,
  { useNewUrlParser: true }
)

const db = require('./models')

const users = [
  { username: 'username', password: 'password' },
  { username: 'Kevin malone', password: 'boobies' }
]

const polls = [
  {
    question: 'Which is the best JavaScript framework',
    options: ['Angular', 'React', 'VueJS']
  },
  { question: 'Who is the best mutant', options: ['Wolverine', 'Deadpool'] },
  {
    question: 'why is kevin malone so cool?',
    options: ['he is so nice', 'BOOBIES', 'hot']
  },
  { question: 'Boolean?', options: ['True', 'False'] }
]

const seed = async () => {
  await db.User.remove()
  await db.Poll.remove()

  await Promise.all(
    users.map(async user => {
      const data = await db.User.create(user)
      await data.save()
    })
  )

  await Promise.all(
    polls.map(async poll => {
      poll.options = poll.options.map((option) => ({
        name: option, votes: 0
      }))
      console.log(poll.options)
      const data = await db.Poll.create(poll)
      const user = await db.User.findOne({ username: 'username' })
      data.user = user
      user.polls.push(data._id) // just pushes the id of the poll so we can access later
      await user.save()
      await data.save()
    })
  )
}

seed()
