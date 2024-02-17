// middleware/loggingMiddleware.js
const loggingMiddleware = (req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.path}`);
  next();
};

module.exports = loggingMiddleware;
