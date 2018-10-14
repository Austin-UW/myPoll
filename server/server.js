const errors = require('./handlers/index').errors
const router = require('./routes/index')

require('dotenv').config()

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser') // only use json parser

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/hi', router.base)
app.use('/api/auth', router.auth)
app.use('/api/polls', router.poll)
app.use((req, res, next) => {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use(errors) // i dunno about this one :P


const PORT = process.env.PORT
app.listen(PORT, console.log(`Nicely dont kiddo, ${PORT}`))
