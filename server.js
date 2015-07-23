var express = require('express');
var app = express();
var path = require('path');
var db = require('./db/config');
var parser = require('body-parser');
// TextPost = db.TextPost;

app.use(express.static('scripts'));
app.use(parser.json());



app.get('/posts', function(req, res){
  db.find({}, function(err, results){
    if(err) {
      console.log(err);
    } else{
     res.send(results);
    }
  });
})

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.post('/submitpost', function(req, res){
  db.create({'title': req.body.title, 'content': req.body.content, 'link': req.body.link});
  res.send('its good')
})




app.listen(3000, function(){
  console.log('listening on 3000');
})