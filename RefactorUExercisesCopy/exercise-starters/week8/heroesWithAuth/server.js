var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var logger = require("morgan");
var app = express();
var routes = require('./routes.js')
var sessions = require('client-sessions')({
  cookieName: "Hero Sesh",
  secret: "superStrongSecret",
  requestKey: 'session', //req.session
  duration: 80000000, //how long can someone stay logged in, in milliseconds
  cookie:{
    ephemeral: false, // when true expires when browser closed
    httpOnly: true, //when true cookie not accessible via front end JS
    secure: false // when true the cookie will only be read when sent over https
  }
});
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/heroes', function(err){
  if (err) {
      console.log("Error: " + err);
  } else {
      console.log("Connection succesful!")
  }
})
app.use(sessions);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);
app.use(express.static('public'));



var port = process.env.PORT || 3737
app.listen(port, function(){
  console.log('Server running on port ' + port);

});
