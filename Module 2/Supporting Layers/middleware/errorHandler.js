const AppError = require('../utils/AppError');

module.exports = (err, req, res, next) => {
  const isOperational = err instanceof AppError && err.isOperational;

  const statusCode = isOperational ? err.statusCode : 500;
  const message = isOperational
    ? err.message
    : 'Internal Server Error';

  res.status(statusCode).json({
    error: message,
  });
};