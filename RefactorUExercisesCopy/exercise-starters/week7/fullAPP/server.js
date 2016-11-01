var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var routes = require('./routes.js');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/todo', function(err) {
    if (err) {
        console.log("Error: " + err);
    } else {
        console.log("Connection succesful!")
    }
})

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes \\/
routes(app);

// Creating Server and Listening for Connections \\
var port = process.env.PORT || 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

});
