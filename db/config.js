var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var db = mongoose.connect('mongodb://localhost/');


var SiteData = mongoose.Schema({
  title: String,
  content: String,
  link: String,
  timestamp: {type: Date, default: Date.now}
})

var TextPost = mongoose.model('TextPost', SiteData)

module.exports = TextPost;