var app = angular.module("Intro", []);

app.controller('MainController', ['$scope', '$window', function($scope, $window) {
$scope.h1="Hello";
$scope.h1 = $scope.h1 + "!!!";


$scope.changeColor = function(){
  $scope.mouseStyle = {color: "pink"};
}

$scope.changeColorBack = function(){
  $scope.mouseStyle = {color: "black"};
}

$scope.confirm = function(event){

      if($window.confirm('are you sure?')===false) {
        console.log("HALEPL!")
        event.preventDefault();
        event.target.remove();

      }
}


}]);

app.controller('SecondController', ['$scope', function($scope) {
  $scope.myList = [
    "item1 yeah baby",
    "item2",
    "item3",
  ];


}]);
