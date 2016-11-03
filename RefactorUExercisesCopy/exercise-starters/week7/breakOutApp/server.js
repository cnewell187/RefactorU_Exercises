var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var logger = require("morgan");
var app = express();
var routes = require('./routes.js')

mongoose.connect('mongodb://localhost/heroes', function(err){
  if (err) {
      console.log("Error: " + err);
  } else {
      console.log("Connection succesful!")
  }
})

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
routes(app);

var port = process.env.PORT || 3737
app.listen(port, function(){
  console.log('Server running on port ' + port);

});
