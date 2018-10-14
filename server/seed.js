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
  console.log('DROP ALL USERS')

  await db.Poll.remove()
  console.log('DROP ALL POLLS')

  await Promise.all(
    users.map(async user => {
      const data = await db.User.create(user)
      await data.save()
    })
  )
  console.log('CREATED USERS', JSON.stringify(users))

  await Promise.all(
    polls.map(async poll => {
      poll.options = poll.options.map(option => ({ option, votes: 0 }))
      const data = await db.Poll.create(poll)
      const user = await db.User.findOne({ username: 'username' })
      data.user = user
      user.polls.push(data._id)
      await user.save()
      await data.save()
    })
  )
  console.log('CREATED POLLS', JSON.stringify(polls))
}

seed()
