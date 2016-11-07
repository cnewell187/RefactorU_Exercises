angular.module('userLogin', [])
    .controller('userController', ['$http', function($http) {
        var userCtrl = this;
        userCtrl.submit = function() {
          console.log("Submitting")
            $http({
                method: 'POST',
                url: '/login',
                data: {
                    email: userCtrl.email,
                    password: userCtrl.password
                },
            }).then(function(res) {
                    console.info(res.data);
                },

                function(err) {
                    //helps to debug errors on the front end yo!
                    console.error(err);
                })
        }

    }])
