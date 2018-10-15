const router = require('express').Router()
const handler = require('../handlers')
const authMiddleware = require('../middlewares/auth')
router.route('/')
  .get(handler.showPolls) // show everything
  .post(authMiddleware, handler.createPoll)

router.route('/:id')
  .get(handler.getPollById)
  .post(authMiddleware, handler.vote)
  .delete(authMiddleware, handler.deletePoll)

router.get('/user', authMiddleware, handler.userPolls)

module.exports = router  