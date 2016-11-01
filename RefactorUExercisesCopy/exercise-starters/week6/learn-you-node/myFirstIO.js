var fs = require('fs');
var buffyo = fs.readFileSync(process.argv[2]);
var str = buffyo.toString();
var strArray = str.split("\n");
console.log(strArray.length -1)
