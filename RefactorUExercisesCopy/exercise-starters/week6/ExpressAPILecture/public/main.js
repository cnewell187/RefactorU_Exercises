angular.module('KANYE', [])
    .controller("kanyeController", kanyeController);

kanyeController.$inject = ['$http'];
function kanyeController($http){
  var kanye = this;
  kanye.greeting = "Wait I'ma let you finish";

  $http.get('/api/kanye/counter')
  .then(function(res){
    kanye.counter = JSON.parse(res.data.response.body);
    //console.log(kanye.counter);

    //need to change from a big object to an array of key value pairs

    kanye.arrayK = [];
    for(prop in kanye.counter){
      newObj = {
        word: prop,
        count: kanye.counter[prop],
      }
    kanye.arrayK.push(newObj)

    }
    

  })

}
