'use strict';

// TEMP: Simple In-Memory Database
const express = require('express');
const morgan = require('morgan');
// const data = require('./db/notes');
// const notesRouter = require('./router/notes.router');
// const simDB = require('./db/simDB');
// const notes = simDB.initialize(data); 
const notesRouter = require('./router/notes.router');
const { PORT } = require('./config');

console.log('hello world!');

// INSERT EXPRESS APP CODE HERE...
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));

app.use(notesRouter);



app.use(function (req, res, next){
  let err = new Error('Not Found');
  err.status = 404;
  res.status(404).json({ message: 'Not Found' });
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});

app.listen(PORT, function () {
  console.info(`Server listening on ${this.address().port}`);
}).on('error', err => {
  console.error(err);
});

