const http = require('http');
var fs = require('fs');
http.createServer(function(req, res){
  // res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile("index.html", function(err, text){
      res.setHeader("Content-Type", "text/html");
      res.end(text);
    })
}).listen(1337, '127.0.0.1', function(){
  console.log("Server running byeahhha!");
});
