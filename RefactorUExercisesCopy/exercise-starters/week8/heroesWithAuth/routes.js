var heroController = require('./controllers/heroDispatch.js')
var userController = require('./controllers/userController.js')

module.exports = function(app){
  app.get('/login',function(req, res){
    res.sendFile('login.html', {root: './public'})
  } )
  app.post('/login', userController.login)
  app.get('/', userController.session)
  // app.get('/', function(req, res){
  //   res.sendFile('home.html', {root: './public/html'})
  // });
 //runs middleware to check if user is logged in or not
  app.post('/api/heroes', heroController.createHero);
  app.get('/api/heroes', heroController.getHero)
  //dynamic and or parameterized routes
  app.get('/api/heroes/:heroID',heroController.getHero)



  //app.get('/register')
  app.post('/register', userController.register)
  app.get('/logout', userController.logout)

};
