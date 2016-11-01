var express = require("express");

var app = express();
var logger = require('morgan');
app.use(logger("dev"));
require('colors');
var bodyParser = require('body-parser');


var PORT = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(function(req, req, next) {
    console.log("middleware fires!")
    next();
})

function checkMyAPIKey(req, res, next) {
    console.log("Check dem keyz!", req.query.key)
    if (req.query.key) {
        console.log("You shall pass")
        next();
    } else {
        console.log("You shall not pass!");
        res.send("<h1>BLOCKED BITCH</h1>");
    }
}
app.get('/no', checkMyAPIKey, function(req, res) {
    // res.send("<h1>Yo</h1>")
    console.log("boom!")
    res.sendFile(__dirname + '/index.html');
});

app.get('/about', function(req, res) {
    // res.send("<h1>Yo</h1>")
    res.sendFile(__dirname + '/about.html');
});


//simulates an error
app.get("/err", function(req, res, next) {
    next(new Error("ooops error"));
})

app.use(function(err, req, res, next) {
    console.log("Homemade Error", err.stack);
    res.status(500).send({
        status: 500,
        message: "Oh Shit Mang",
    })
})

app.post('/', function(req, res, next) {
    console.log("Before".blue);
    console.log(req.body);
    next();
})

app.use(bodyParser.json());

app.post('/', function(req, res, next) {
    console.log("After".red);
    console.log(req.body);
    res.send('donez');
})





app.listen(PORT, function(err) {
    if (err) {
        console.log("ERROR ALERT!", err);
        process.exit(1);
    };
    console.log("Server is up listening to port ".red + PORT);
});
