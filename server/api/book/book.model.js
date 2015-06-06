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
  imagePath: String,
  read: Boolean
});

BookSchema.statics.counts = function(cb) {
  var me = this;

  me.count({}, function (err, total) {
    me.count({ read: true}, function(err, read) {
      //TODO: error handlers?
      cb(total, read);
    })
  })
};

module.exports = mongoose.model('Book', BookSchema);
