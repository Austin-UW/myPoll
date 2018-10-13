const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json({name: 'hi man, good job koddo'})
})
// NOTE: must put middlewares in order
app.use((req, res, next) => {
  const err = new Error('OOPSIE, NOT FOUND')
  err.status = 404

  next(err)
})
app.use((err, req, res) => {
  res.status(err.status | 500).json({
    err: err.message || 'something went VERY wrong, you are screwed man oops'
  })
})
const PORT = 1234
app.listen(PORT, console.log(`Nicely dont kiddo, ${PORT}`))