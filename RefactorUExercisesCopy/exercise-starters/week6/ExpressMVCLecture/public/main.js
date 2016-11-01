angular.module('MVC', [])
    .controller("mvcController", mvcController);

mvcController.$inject = ['$http'];

function mvcController($http) {
    var mCtrl = this;
    mCtrl.newUser = {};
    mCtrl.greeting = "You are now under our control, do not attempt to change the channel";
    mCtrl.addUser = function() {
        console.log("New User: ",
            mCtrl.newUser);
        $http.post('/api/user/', mCtrl.newUser)
            .then(function(res) {
                console.log("Response: " ,res)
            });
        mCtrl.newUser = {};
    }
}
