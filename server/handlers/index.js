module.exports = {
  ...require('./auth')
}
/* tslint:disable */
/* eslint-disable */
module.exports.errors = (err, req, res, next) => {
  /* eslint-enable */
  return res.status(err.status || 400).json({
    success: false,
    error: {
      message: err.message || 'Something went wrong.'
    }
  })
}
