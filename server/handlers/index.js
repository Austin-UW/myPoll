module.exports = {
  ...require('./auth'),
  ...require('./poll')
}
/* tslint:disable */
/* eslint-disable */
module.exports.errors = (err, req, res, next) => {
  console.log('ERROR IN INDEX', err.message)
  /* eslint-enable */
  return res.status(err.status || 400).json({
    success: false,
    error: {
      message: err.message || 'Something went wrong.'
    }
  })
}
