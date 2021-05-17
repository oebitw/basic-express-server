'use strict';

///////////////////////////
//////// Imports /////////
/////////////////////////

const express = require('express');
const notFound = require('./error-handlers/404.js');
const serverError = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');
const checkName = require('./middleware/validator.js').checkName;


///////////////////////////
//////// App setup ///////
/////////////////////////

const app = express();



///////////////////////////
//////// middleware //////
/////////////////////////

app.use(express.json());
app.use(logger);

///////////////////////////
//////// ROUTES    ///////
/////////////////////////

app.get('/', homeHandler);

app.get('/person',checkName(),personHandler);


///////////////////////////
//////// Handlers  ///////
/////////////////////////

function homeHandler(req,res){
  res.send('Hello from the other side');
}

// http://localhost:3030/person?name=omar

function personHandler(req,res){
  console.log(req.query.name);
  res.json({
    name: req.query.name,
  });

}

app.use('*', notFound);
app.use(serverError);



///////////////////////////
//////// EXPORT    ///////
/////////////////////////

function start(port) {
  app.listen(port, () => {
    console.log(`The app is up on ${port}`);
  });
}

module.exports = {
  server:app,
  start:start,
};