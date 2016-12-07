'use strict';

// Requires
require('jquery-path');
let firebase = require("./firebaseConfig.js");
// require("./views/toy-edit");

function getToys() {
  return new Promise(function(resolve, reject) {
    $.ajax ({
      url: `https://toy-shop-f3148.firebaseio.com/toys.json`
    }).done (function(toyData) {
      resolve(toyData);
    });
  });
}




// // adds a new movie, in the form of an object, to the collection
// function addMovie(movieFormObj) {
//   console.log("movie object before promise", movieFormObj);
//   return new Promise(function(resolve, reject) {
//     console.log("movie object after promise", movieFormObj);
//     $.ajax ({
//       url: 'https://scrappy-eb326.firebaseio.com/movies.json',
//       type: 'POST',
//       data: JSON.stringify(movieFormObj),
//       dataType: 'json'
//     }).done(function(movieID){
//       resolve(movieID);
//     });
//   });
// }

// // POST - Submits data to be processed to a specified resource. Takes one parameter.
// function deleteMovie(movieId) {
//   console.log("delete Movie");
//   return new Promise(function(resolve, reject) {
//     $.ajax ({
//       url: `https://scrappy-eb326.firebaseio.com/movies/${movieId}.json`,
//       method: "DELETE"
//     }).done(function() {
//       resolve();
//     });
//   });
// }


// // Gets by MovieId
// function getMovie(movieId) {
//   return new Promise(function(resolve, reject) {
//     $.ajax ({
//       url: `https://scrappy-eb326.firebaseio.com/movies/${movieId}.json`
//     }).done(function(movieData) {
//       resolve(movieData);
//     }).fail(function(error){
//       reject(error);
//     });
//   });
// }


// function editMovie(movieFormObj, movieId) {
//   return new Promise(function(resolve, reject) {
//     $.ajax({
//       url: `https://scrappy-eb326.firebaseio.com/movies/${movieId}.json`,
//       type: 'PUT',
//       data: JSON.stringify(movieFormObj)
//     }).done(function(data) {
//       resolve(data);
//     });
//   });
// }

module.exports = {
  getToys
};