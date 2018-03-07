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
app.use(express.static('public'));
app.use(express.json());
app.use(notesRouter);



// function logger(req, res, next){
//   const now = new Date();
//   console.log(`${now.toLocaleDateString()} ${now.toLocaleTimeString()} ${req.method} ${req.url}`);
//   next();
// }



// app.get('/boom', (req, res, next) => {
//   throw new Error('Boom!!');
// });

// app.get('/api/notes', (req, res, next) => {
//   const {searchTerm} = req.query; 

//   notes.filter(searchTerm, (err, list) => {
//     if (err) {
//       return next(err); 
//     }
//     res.json(list);
//   });
// });


// app.get('/api/notes/:id', (req, res, next) => {
//   const { id } = req.params;
  //   let foundNote = data.find(item => item.id === Number(id));
  //   res.json(foundNote);

//   notes.find(id, (err, item) => {
//     if (err) {
//       return next(err);
//     }
//     if (item) {
//       res.json(item);
//     } else {
//       return next('not found');
//     }
//   });
// });

// app.put('/api/notes/:id', (req, res, next) => {
//   const id = req.params.id;
  
//   /***** Never trust users - validate input *****/
//   const updateObj = {};
//   const updateFields = ['title', 'content'];
  
//   updateFields.forEach(field => {
//     if (field in req.body) {
//       updateObj[field] = req.body[field];
//     }
//   });
  
//   notes.update(id, updateObj, (err, item) => {
//     if (err) {
//       return next(err);
//     }
//     if (item) {
//       res.json(item);
//     } else {
//       next();
//     }
//   });
// });

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

