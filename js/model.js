'use strict';

// Requires
require("./views/toy-list");
require("./views/toy-details");
require("./views/toy-edit");
let data = require("./data/firebase");


data.getToys().then(function(toyData) {
  console.log("toy data:", toyData);
  }, function(reason) {
  console.log("nope");
});

