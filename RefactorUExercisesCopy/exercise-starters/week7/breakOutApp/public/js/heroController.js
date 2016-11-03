angular.module('Heroes')
    .controller('heroController', heroController);

heroController.$inject = ['heroesFactory'];

function heroController(heroesFactory) {
    var home = this;
    home.greeting = 'Welcome to the Heroes of AJAX!'
    home.newHero = {}
    home.createHero = function() {
        heroesFactory.createHero(this.newHero)
            .then(function(responseData) {
                console.log("Response Data: ", responseData);
            })
        home.newHero = {};
        home.getHero();
    }

    home.getHero = function(heroID) {
            heroesFactory.getHero(heroID)
                .then(function(responseData) {
                    console.log("Response Data: ", responseData);
                    if (responseData.data.length) {
                        //if response data is an array
                        home.heroList = responseData.data;
                        console.log("The Hero List: ", this.heroList)
                    } else {
                        //if responseData.data is not an array
                        home.hero = responseData.data;
                    }
                })
        }
        //heroesFactory.createHero({}).then
    home.getHero();
}
