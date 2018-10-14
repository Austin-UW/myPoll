const express = require('express')
require('dotenv').config()
const cors = require('cors')
const handlers = require('./handlers/index')
const bodyParser = require('body-parser').json // only use json parser
const db = require('./models/index')
const app = express()

app.get('/', (req, res) => {
  res.json({ name: 'hi man, good job koddo' })
})

// NOTE: must put middlewares in order
app.use(cors())
app.use(bodyParser)
app.use(handlers.notFound) // passes error status code to handlers.errors
app.use(handlers.errors)

const PORT = process.env.PORT
app.listen(PORT, console.log(`Nicely dont kiddo, ${PORT}`))
