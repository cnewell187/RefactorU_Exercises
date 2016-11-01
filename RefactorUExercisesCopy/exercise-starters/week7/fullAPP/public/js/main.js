var app =angular.module('ToDoApp', [])
app.controller("getErDone", ged);
ged.$inject=['$http'];
function ged($http){
	var ged = this;
	ged.greeting ="GET ER DONE!"

}
