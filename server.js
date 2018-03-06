'use strict';

// TEMP: Simple In-Memory Database
const express = require('express');
const data = require('./db/notes');

console.log('hello world!');

// INSERT EXPRESS APP CODE HERE...
const app = express();
app.use(express.static('public'));


app.listen(8080, function () {
  console.info(`Server listening on ${this.address().port}`);
}).on('error', err => {
  console.error(err);
});

app.get('/api/notes', (req, res) => {
//   const queryString = api.search({hi:'bye'});
//   console.log(queryString);
  res.json(data);
//   const searchTerm = req.query.searchTerm; if (searchTerm) 
//   { let filteredList = data.filter(function(item) { return item.title.includes(searchTerm); });

});


app.get('/api/notes/:id', (req, res) => {
  const {id} = req.params;

  let foundNote = data.find(item => item.id === Number(id));
  
  //   console.log(foundId);
  res.json(foundNote);

});

app.listen(8080, function () {
  console.info(`Server listening on ${this.address().port}`);
}).on('error', err => {
  console.error(err);
});
  
