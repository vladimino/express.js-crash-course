const moment = require('moment');

const logger = (req, res, next) => {
  console.log(
    `Request received to`
    + ` ${req.protocol}://${req.get('host')}${req.originalUrl}`
    + ` on ${moment().format()}`
  );
  next();
}

module.exports = logger;
