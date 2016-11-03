var heroController = require('./controllers/heroDispatch.js')

module.exports = function(app){
  app.get('/', function(req, res){
    res.sendFile('home.html', {root: './public/html'})
  });
  app.post('/api/heroes', heroController.createHero);

  app.get('/api/heroes', heroController.getHero)
  //dynamic and or parameterized routes
  app.get('/api/heroes/:heroID',heroController.getHero)

};
