/* global $ noteful api store */
'use strict';

$(document).ready(function () {
  noteful.bindEventListeners();

  api.search({}).then(response => {
    store.notes = response;
    noteful.render();
  });
 

});

// api.search({})
//   .then(response => {
//     return response;
//   });

// // test get all with search term
// api.search({searchTerm: ''})
//   .then(response => {
//     return response;
//   });

// // test get by id
// api.details(id)
//   .then(response => {
//     console.log(response);
//   });
