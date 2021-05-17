'use strict';

module.exports = (error,req,res,next) => {
  res.status(500);
  res.json({
    status:500,
    message: error.message,
    route: req.path,
  });
};