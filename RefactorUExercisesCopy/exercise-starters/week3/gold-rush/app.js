var app = angular.module("MainApp",[]);

app.controller("MainController", MainController);

function MainController(){
  var main = this;
  main.name = "Location";
  main.pushPin= function(event){
    var x = event.clientX;
    var y= event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("demo").innerHTML = coords;
    var mark = document.createElement("i");
    mark.className="fa fa-map-pin";
    mark.style.position = "absolute";
    mark.style.top = y + 'px';
    mark.style.left = x +'px';
    document.body.appendChild(mark);


  };

}
