const router = require('express').Router()
const handler = require('../handlers')
const authMiddleware = require('../middlewares/auth')
router.route('/polls')
  .get(handler.showPolls) // show everything
  .post(authMiddleware, handler.createPoll)

router.route('/do/:id')
  .get(handler.getPollById)
  .post(authMiddleware, handler.vote)
  .delete(authMiddleware, handler.deletePoll)

router.route('/user').get(authMiddleware, handler.userPolls)

module.exports = router