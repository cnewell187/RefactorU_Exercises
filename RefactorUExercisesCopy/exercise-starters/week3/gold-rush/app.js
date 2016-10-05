var app = angular.module("MainApp",[]);

app.controller("MainController", MainController);

function MainController(){
  var main = this;
  main.name = "Casey";
  main.pushPin= function(event){
    var x = event.clientX;
    var y= event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("demo").innerHTML = coords;
  };

}
