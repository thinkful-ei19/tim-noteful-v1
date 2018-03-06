'use strict';

// TEMP: Simple In-Memory Database
const express = require('express');
const data = require('./db/notes');

console.log('hello world!');

// INSERT EXPRESS APP CODE HERE...
const app = express();
app.use(express.static('public'));




app.get('/api/notes', (req, res) => {
  const {searchTerm} = req.query; 
  if (searchTerm) {
    let filteredNote = data.filter(item => item.title.includes(searchTerm));
    res.json(filteredNote);
  }
  else if (searchTerm === undefined){
    res.json(data);
  }
});


app.get('/api/notes/:id', (req, res) => {
  const { id } = req.params;
  let foundNote = data.find(item => item.id === Number(id));
  res.json(foundNote);
});

app.listen(8080, function () {
  console.info(`Server listening on ${this.address().port}`);
}).on('error', err => {
  console.error(err);
});

