// Requires \\
var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/contacts', function(err) {
    if (err) {
        console.log("Error: " + err);
    } else {
        console.log("Connection succesful!")
    }
})

var personSchema = mongoose.Schema({
  name: {type: String, required:true},
  age: Number,
  phone: String,
  created: {type: Number, default: function(){
    return Date.now()}},
});

var Person = mongoose.model('Person', personSchema);

function createPerson(attributes){
  var person = new Person(attributes);
  //console.log("New person: " + person)
  person.save(function(err, doc){
    console.log("The Error: " +err)
  })
}

// createPerson({
//   name: "Jellobian2",
//   age: 67891234,
//   phone: "Prayer",
// });
//
// createPerson({
//   name:"Elbertha",
//   age: 22,
//   phone:'Evil Ritual'
// })

function getPeople(query){
  Person.find(query || {}, function(err, people){
    if(err){
      console.log("Error getting people: ", err)
    }
    else{
      console.log("The People: \n", people)
    }
  })
}

getPeople();
getPeople({name: "Jellobian2"})

// Create Express App Object \\
var app = express();

// Application Configuration \\
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res) {
    res.send('Hello')
});

// Creating Server and Listening for Connections \\
var port = process.env.PORT || 3000
app.listen(port, function() {
    console.log('Server running on port ' + port);

})
