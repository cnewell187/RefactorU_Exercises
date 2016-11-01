var todo = require('./controllers/todo.js')

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.sendFile(__dirname + "/public/html/" + "home.html");
    });
    app.get('/api/todo', function(req, res) {
        todo.find(req.query, function(err, list) {
            if (err) {
                console.error("Error: ", err) //makes it red instead of .log
                res.status(500).json(err);
            } else {
                res.send(list);
            }
        })
    });

    app.post('/api/todo', function(req, res) {
      console.log("The req body",req.body)
        var newTodo = new todo(req.body);
        newTodo.save(function(err, doc) {
            if (err) {
                console.log("The Error: ", err)
                res.status(500).json(err);
            }
            else{
              res.json(doc)
            }
        })
    })
}
