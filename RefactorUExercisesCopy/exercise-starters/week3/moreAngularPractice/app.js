var app = angular.module("LessonRepeat", [])
.controller("mainController", mainController);

function mainController($scope){
  $scope.greeting = "Hello Squirrels!";
  var main = this;
  main.monkeys = [
    'Koko',
    'Mr Bananas',
    'Kongz',

  ];

  main.monkeyObj ={
    "Koko":'eat',
    "Mr Bananas": 'touch bananas',
    "Kongs": 'bang on drums'

  }
}
