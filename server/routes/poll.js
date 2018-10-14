const router = require('express').Router()
const showPolls = require('../handlers').showPolls
router.route('/').get(showPolls) // show everything

module.exports = router