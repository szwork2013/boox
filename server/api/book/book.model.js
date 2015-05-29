'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BookSchema = new Schema({
  title: String,
  author: String,
  description: String,
  yearPublished: { type: Number, min: 0 },
  type: String,
  genre: [String],
  imagePath: String
});

module.exports = mongoose.model('Book', BookSchema);
