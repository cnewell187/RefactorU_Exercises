var api = require("./controllers/api.js");

module.exports = function(app) {
   app.get('/', function(req, res){
     res.sendFile("./public/index.html");
   });

   app.get('/api/kanye/counter', api.counter)
   app.get('/api/kanye/album', api.album)
   app.get('/api/kanye/track', api.track)
}
