const noMatchMiddleware = (req, res, next) => {
  res.status(404).json({
    code: 404,
    message: 'router url not found'
  })
};

module.exports = noMatchMiddleware;