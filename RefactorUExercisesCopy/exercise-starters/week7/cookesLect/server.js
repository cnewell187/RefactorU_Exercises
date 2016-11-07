var express = require('express');
var cookieParser = require('cookie-parser'); // stores things in req.cookies
var bodyParser = require('body-parser'); //stores things in req.body
var app = express();
var routes = require('./routes.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'));

//Session Ale
var sessions = {}; //storing dem seshs
// a sesh is an arb obj in server mem

app.set('sessions', sessions)
routes(app)





var port = process.env.PORT || 3737
app.listen(port, function(){
  console.log('Server running on port ' + port);

});
