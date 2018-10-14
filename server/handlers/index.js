module.exports.errors = (err, req, res) => {
  res.status(err.status | 500).json({
    err: err.message || 'something went VERY wrong, you are screwed man oops'
  })
}

module.exports.notFound = (req, res, next) => {
  const err = new Error('OOPSIE, NOT FOUND')
  err.status = 404

  next(err)
}
