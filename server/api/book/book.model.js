'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BookSchema = new Schema({
  title: String,
  author: String,
  description: String,
  yearPublished: Number,
  genre: String
});

module.exports = mongoose.model('Book', BookSchema);
