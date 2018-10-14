module.exports = {
  ...require('./auth')
}

module.exports.errors = (err, req, res) => {
  return res.status(err.status || 500).json({
    success: false,
    error: {
      message: err.message || 'Something went wrong.'
    }
  })
}
