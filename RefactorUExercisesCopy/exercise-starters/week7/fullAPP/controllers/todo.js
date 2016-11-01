module.exports = require('mongoose').model('todo', {
  title: String,
  done: {type: Boolean, default: false},
  dateCreated: {type: Number, default: function(){
    return Date.now()}},  
})
