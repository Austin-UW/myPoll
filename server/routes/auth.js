// routes/auth.js
const router = require('express').Router()
const handlers = require('../handlers/index')
const authMiddleware = require('../middlewares/auth')

router.post('/register', handlers.register)
router.post('/login', authMiddleware, handlers.login)

module.exports = router
