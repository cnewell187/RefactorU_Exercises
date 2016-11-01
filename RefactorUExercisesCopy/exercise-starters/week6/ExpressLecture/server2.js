var express = require("express");
var app = express();
var logger = require('morgan');
app.use(logger("dev"));

app.get('/', function(req, res) {
    // res.send("<h1>Yo</h1>")
    res.send("<h1>Go to /happiness please thanks</h1>");
});


app.get('/happiness', function(req, res) {
    // res.send("<h1>Yo</h1>")
    res.send("<h1>HAPPINESS FOR ALL!!!!!!</h1>");
});


var PORT = process.env.PORT || 8080;
app.listen(PORT, function(err) {
    if (err) {
        console.log("ERROR ALERT!", err);
        process.exit(1);
    };
    console.log("Server is up listening to port " + PORT);
});
