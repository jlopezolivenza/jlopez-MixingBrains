var express = require('express');
var app = express();
var path = require("path");

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname,  '/vista',  '/index.html'));
});

var server = app.listen(8080, function() {
    console.log('Listening on port %d', server.address().port);
});