var app = angular.module("MainApp",[]);

app.controller('mainController', mainController);
mainController.$inject = ['$scope'];

function mainController($scope){
  $scope.greeting = "Hello Squirrels!";
}
