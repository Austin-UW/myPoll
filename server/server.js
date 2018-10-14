const errors = require('./handlers/index').errors
const router = require('./routes/index')

require('dotenv').config()

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser') // only use json parser

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(errors)

app.get('/', (req, res) => res.json({ name: 'hi man, good job koddo' }))
app.use('/api/auth', router.auth)

// NOTE: must put middlewares in order

const PORT = process.env.PORT
app.listen(PORT, console.log(`Nicely dont kiddo, ${PORT}`))
