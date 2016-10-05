var app = angular.module("Edit", []);


app.controller("mainController", mainController);
// mainController.$inject = ['$scope'];

function mainController(){

  var main = this;
  this.bio = "I am going to tell you a story...";
  main.proUpdate = function(){};
  console.log("HALP!")
  // $scope.greeting = "Hello Squirrels!";
}
