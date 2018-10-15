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
      options: options.map(option => ({ name: option, votes: 0 })),
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
  const { id: pollId } = req.params
  const { id: userId } = req.decoded
  const { answer } = req.body
  try {
    if (answer) {
      const poll = await db.Poll.findById(pollId)
      if (!poll) throw new Error('No poll found')

      const vote = poll.options.map(option =>
        option.name === answer ? {
          name: option.name,
          votes: option.votes + 1,
          _id: option._id
        } : option,
      )
      console.log('VOTE: USERID ', userId)
      console.log('VOTE: poll.voted ', poll.voted)
      console.log(
        'VOTE: vote filter',
        poll.voted.filter(user => user.toString() === userId).length,
      )

      if (poll.voted.filter(user => user.toString() === userId).length <= 0) {
        poll.voted.push(userId)
        poll.options = vote
        await poll.save()

        return res.status(202).json(poll)
      }
      else {
        throw new Error('Already voted')
      }
    }
    else {
      throw new Error('No Answer Provided')
    }
  }
  catch (err) {
    return next({
      status: 400,
      message: err.message,
    })
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
    res.status(200).json({ poll, deleted: true }) // send back deleted poll
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
