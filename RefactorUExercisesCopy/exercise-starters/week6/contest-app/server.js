var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var submissions = [];
var fs = require("fs");
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var routes = require("./routes.js");

app.use(cookieParser());
app.use(express.static('public'));
app.use(bodyParser.json());


routes(app);

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})

// fs.readFile('input.txt', function(err, data) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("Data read: " + data.toString());
// });
