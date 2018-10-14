const router = require('express').Router()
const handler = require('../handlers')
router.route('/')
  .get(handler.showPolls) // show everything
  .post(handler.createPoll)

module.exports = router  