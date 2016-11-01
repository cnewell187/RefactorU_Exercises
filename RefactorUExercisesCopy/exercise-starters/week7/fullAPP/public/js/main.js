var app = angular.module('ToDoApp', [])
app.controller("getErDone", ged);
ged.$inject = ['$http'];

function ged($http) {
    var ged = this;
    ged.greeting = "GET ER DONE!"
    ged.The_List = [];

    ged.addToDoItem = function() {
        $http.post('/api/todo', ged.newToDoItem).then(function(response) {
            console.log("The response data:", response.data)
            ged.newToDoItem = {};
            ged.getToDo();
        })

    }
    ged.getToDo = function() {
        $http.get('/api/todo')
            .then(function(response) {
                console.log("The response data:", response.data)
                ged.The_List = response.data;

            })
    }
    ged.getToDo();

}
