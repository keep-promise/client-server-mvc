const user = require('../routes/user');

const initRoute = (app) => {
  app.use('/get', user);
}

module.exports = initRoute;