var app = angular.module("PokeApp",[]);

app.controller("pokeDex", pokeDex);

pokeDex.$inject =['$http'];

function pokeDex($http){
  var poke = this;
  poke.text= "Da Poke and Da Mon!";
  getPokemon(poke, $http, 10);


}


function getPokemon(poke, $http, num){
  $http.get('https://www.tablerig.com/tables/calpaterson/pokemon-with-images')
  .then(function(results, status){
    poke.data = results.data
    poke.name = poke.data.body[num]["pokemon-name"]
    poke.img = poke.data.body[num]["image-url"]

  }, function(results, status){
    console.log("Success: " , status);
  })
}
