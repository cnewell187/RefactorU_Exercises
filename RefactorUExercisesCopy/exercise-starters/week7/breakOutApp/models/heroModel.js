var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/heroes', function(err){
  if (err) {
      console.log("Error: " + err);
  } else {
      console.log("Connection succesful!")
  }
})

var heroSchema = mongoose.Schema({
  name: {type: String, required:true, default: "The Nameless One"},
  costume: {type: String, required:true, default: "No Costume Data"},
  superPowers: {type: Array, default:[]},
  facialHair: {type:Boolean, default: false},
  backstory: {type: String, required:true, default: "Backstory Unknown"},
  //sidekick: {},
});

module.exports = mongoose.model('Hero', heroSchema, 'superfriends'); //third arg is mongo db collection name
