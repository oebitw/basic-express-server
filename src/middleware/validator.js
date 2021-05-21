'use strict';

module.exports = (req, res, next) => {
  if (!req.query.name) {
    throw new Error('Validator Error');
  } else {
    next();
  }
};