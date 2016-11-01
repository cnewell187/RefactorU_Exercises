//angular front end
angular.module('bear', [])
    .controller("bearController", bearController);

bearController.$inject['$http'];

function bearController($http) {
    var bCtrl = this;
    bCtrl.newBear = {};

    bCtrl.greeting = "I heard you like bears...";

    bCtrl.addBear = function() {
        $http.post('/api/bears', bCtrl.newBear)
            .then(function(response) {
                console.log(response.data)
                bCtrl.getBears();
                    //window.location.href ='/about' if we needed to move to them to a new page.
            })
        bCtrl.newBear = {};
    }

    bCtrl.getBears = function() {
        $http.get('/api/bears')
            .then(function(response) {
                bCtrl.TheBearHouse = response.data;
            })
    }

    bCtrl.getBears();

    bCtrl.removeBear = function(bear){
      var removeIndex = bCtrl.TheBearHouse.indexOf(bear);
      $http.delete('/api/bears/' + removeIndex)
      .then(function(response){
        bCtrl.getBears();
      })
    }
};
