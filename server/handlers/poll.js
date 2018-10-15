const db = require('../models')

exports.showPolls = async (req, res, next) => {
  try {
    console.log(await db.Poll.find()[0])
    const polls = await db.Poll.find().populate('user', ['username', 'id'])
    console.log(polls[0])
    res.status(200).json(polls)
  }
  catch (err) {
    err.status = 400
    next(err)
  }
}

exports.createPoll = async (req, res, next) => {
  const { id } = req.decoded
  const { question, options } = req.body
  console.log(req.body)
  try {
    const user = await db.User.findById(id)
    const poll = await db.Poll.create({
      question,
      user,
      options: options.map(option => ({ option, votes: 0 })),
    })
    user.polls.push(poll._id)
    await user.save()

    return res.status(201).json({ ...poll._doc, user: user._id })
  }
  catch (err) {
    return next({
      status: 400,
      message: err.message,
    })
  }
}

exports.getPollById = async (req, res, next) => {
  try {
    const { id } = req.params

    const poll = await db.Poll.findById(id)
      .populate('user', ['username', 'id'])
    if (!poll) {
      throw new Error('poll not found :(')
    }

    res.status(200).json(poll)
  }
  catch (err) {
    err.status = 400
    next(err)
  }
}

exports.vote = async (req, res, next) => {
  try {
    const { token } = req.decoded
    const { id } = req.params
    const { answer } = req.body

    if (answer) {
      const poll = await db.Poll.findById(id)
      if (!poll) {
        throw new Error('poll not found while voting')
      }
      /* const vote = poll.options.map(
        option => 
      ) */
    }
  }
  catch (err) {
    err.status = 400
    next(err)
  }
}

exports.deletePoll = async (req, res, next) => {
  try {
    const { id: pollId } = req.params
    /* delete reference to poll from user */
    const { id: token } = req.decoded

    let user = await db.User.findById(token)
    user.polls = user.polls.filter(userPoll => { // should I use await or map through db object?
      return userPoll._id.toString() !== pollId.toString() // keep if not the one to be deleted
    })
    /* rest */
    const poll = await db.Poll.findById(pollId)
    if (!poll) throw new Error('poll not found :(')
    if (poll.user.toString() !== token) {
      throw new Error('YOU CANNOT')
    }
    await poll.remove()
    await user.save()
    res.status(200).json(poll) // send back deleted poll
  }
  catch (err) {
    err.status = 400
    next(err)
  }
}
exports.userPolls = async (req, res, next) => {
  try {
    const { id } = req.decoded
    const user = await db.User.findById(id)
      .populate('polls')
    res.status(200).json(user.polls)
  }
  catch (err) {
    err.status = 400
    next(err)
  }
}
