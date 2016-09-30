var app = angular.module("Intro", []);

app.controller('MainController', ['$scope', function($scope) {

  // $scope.displayHeader = function() {
  //  var node = document.createElement("h1");
  //  var textnode = document.createTextNode("BOOM");
  //  node.appendChild(textnode);
  //  document.getElementById("test1").appendChild(node);
	// };
  //
  // $scope.myList = [
  //   "item1",
  //   "item2",
  //   "item3",
  // ];


}]);

app.controller('SecondController', ['$scope', function($scope) {
  $scope.myList = [
    "item1 yeah baby",
    "item2",
    "item3",
  ];


}]);

// // app.controller('myCtrl',['$scope'] function($scope){
// //   $scope.myList = {
// //     "item1",
// //     "item2",
// //     "item3",
// //   }
// // }
