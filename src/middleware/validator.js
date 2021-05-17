'use strict';

function checkName() {
  return (req, res, next) => {
    if (req.query.name) {
      next();
    } else {
      next('Please Enter a name');
    }
  };
}


module.exports = {
  checkName: checkName,
};