var express = require("express");
var app = express();
var logger = require('morgan');
app.use(logger("dev"));

var TheBearHouse =[];

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('public'));


function myMiddleWare() {
  return function(req, res, next){
    console.log("BEAR MOVES TO " + req.path);
    next()
  }
}

app.use(myMiddleWare());

app.get('/', function(req, res){
  res.sendFile('index.html',{root:'./public/html'});
});

app.post('/api/bears', function(req, res){
  //add a bear to TheBearHouse

  TheBearHouse.push(
{name: req.body.name,
accessories:req.body.accessories.split(', '),
stuffedness: req.body.stuffedness,}
  );
  console.log(TheBearHouse);
  //send a response down
res.send('New Bear Added ');
})

app.get('/api/bears', function(req,res){
  res.send(TheBearHouse);
})
app.delete('/api/bears/:bearIndex', function(req, res){
  TheBearHouse.splice(+req.params.bearIndex, 1);
  res.send("Bear is Dead")
});


// Creating Server and Listening for Connections \\
var port = process.env.PORT || 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);
});
