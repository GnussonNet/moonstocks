const ErrorLibrary = require('../utilities/errorLibrary');

const mongooseErrorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // If any cast error, pass it to our error library
  if (err.name === 'CastError') {
    const message = `Invalid ${err.path} : ${err.value}. This resource does not exist`;
    error = new ErrorLibrary(message, 404);
  }

  // If any duplication error, pass it to our error library
  if (err.code === '11000') {
    const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
    const message = `Duplicate field value: ${value}. Please enter another value`;
    error = new ErrorLibrary(message, 400);
  }

  // If any validation error, pass it to our error library
  if (err.name === 'ValidationError') {
    const errors = Object.values(err.message).map((val) => val.message);
    const message = `Invalid data provided. ${errors.join('. ')}`;
    error = new ErrorLibrary(message, 400);
  }

  return res.status(error.statusCode || 500).json({
    success: false,
    error,
    message: error.message,
  });
};

module.exports = mongooseErrorHandler;
