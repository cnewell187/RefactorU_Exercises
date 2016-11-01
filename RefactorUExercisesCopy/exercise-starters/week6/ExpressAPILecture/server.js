var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var routes = require("./routes.js");


app.use(logger("dev"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'))
routes(app)

var port = process.env.PORT || 8080;

app.listen(port, function(err){
  if(err){
    console.log("Server error: ", err)
    process.exit(1);
  }
  console.log('Server running on port ' + port);
});
