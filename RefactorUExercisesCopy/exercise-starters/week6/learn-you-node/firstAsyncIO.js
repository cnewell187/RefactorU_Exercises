var fs = require('fs');
var buffyo = fs.readFile(process.argv[2], 'utf8', myFunction);

function myFunction(err, data){
  var strArray = data.split("\n");
  console.log(strArray.length -1)
}
// var str = buffyo.toString();
var strArray = str.split("\n");
console.log(strArray.length -1)
