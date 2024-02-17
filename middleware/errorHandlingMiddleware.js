// middleware/errorHandlingMiddleware.js
const errorHandlingMiddleware = (err, req, res, next) => {
  console.error(err.stack);
  res
    .status(500)
    .json({ error: "Something went wrong!", details: err.message });
};

module.exports = errorHandlingMiddleware;
