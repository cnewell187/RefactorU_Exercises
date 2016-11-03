angular.module('Heroes')
    .factory('heroesFactory', heroesFactory);

heroesFactory.$inject = ['$http'];

function heroesFactory ($http) {

    return {
      createHero: function(heroInfo){
        return $http.post('/api/heroes', heroInfo)
      },

      getHero: function(heroID){
        heroID = heroID ? '/' + heroID : ''
        return $http.get('/api/heroes' + heroID)
      }
    }
}
