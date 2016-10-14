angular.module("Route66", ['ngRoute'])
    .controller("steeringWheel", steeringWheel)
    .controller("zombieController", zombieController)
    .controller("dinoController", dinoController);

angular.module("Route66").config(HighwaySigns);


HighwaySigns.$inject = ["$routeProvider"];

function HighwaySigns($routeProvider) {
    $routeProvider.when('/', {
            templateUrl: "/templates/page2.html"
        })
        .when('/bigDino', {
            templateUrl: "/templates/bigDino.html",
            controller: "dinoController as dino",
        })
        .when('/roadZombie', {
            templateUrl: "/templates/roadZombie.html",
            controller: "zombieController as zombie",
        })
        .when('/fail',{
          templateUrl: "/templates/turnBack.html",
      })
        .otherwise({
          redirectTo:"/fail",
                })
};

function steeringWheel() {
    var wheel = this;
    wheel.sign = "Route66";
};

function zombieController() {
    var zombie = this;
    zombie.greeting = "BRAINZZZ";
};

function dinoController() {
    var dino = this;
    dino.greeting = "RAWR!!!! NOM CHOMP STOMP!!"
};
