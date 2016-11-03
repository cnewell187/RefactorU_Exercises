var wordPool = require("../models/wordPool.json")
var request = require('request')
// var transController = require('./transController.js')

function buildQuiz(req, res){
  var quiz = []
  for (var i =0 ; i < 10; i++){
    quiz.push(wordPool[randIt])
  };
}

function translateWord(baseWord){
  var translatedWord;
  var gtEndpoint = 'https://www.googleapis.com/language/translate/v2?key=AIzaSyCLGUGn7uSe2i1oeNaxH9Mur6TM0uJ1jh8';
  //var gtTest = "&q=hello%20world&source=en&target=es"


  var gtWord = baseWord
  var gtSource = "en"
  var gtTarget = "es"
  request(`${gtEndpoint}&q=${gtWord}&source=${gtSource}&target=${gtTarget}`, (err, response, body) => {

    if(err){
      console.log("The Error",err)
    }
      translatedWord = JSON.parse(response.body).data.translations[0].translatedText
      console.log("Translated Word in translateWord function: ", translatedWord)
      return translatedWord;
  });
}

function quizItem(baseWord){
  this.word = baseWord;
  this.tWord = translateWord(baseWord);

}

function testQuiz(){
var testQuiz  = new quizItem("dog");
console.log(testQuiz)
}


module.exports = {
 quizItem: quizItem,
 testQuiz: testQuiz,
}
