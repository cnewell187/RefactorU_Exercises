// var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];
//
// // for(var i=0; i < animals.length-1; i++) {
// //  console.log(animals[i]);
// // }
//
// // for(var i=0; i < animals.length; i = i+2) {
// //  console.log(animals[i]);
// // }
//
// // for(var i=animals.length-1; i >=0; i--) {
// //  console.log(animals[i]);
// // }
//
// for(var i=0; i < animals.length; i++) {
//
//   if(i ===0){
//  console.log(animals[i]);
//  }
//  else if(i === animals.length-1){
//    console.log(animals[i]);
//  }
//  else{
//    console.log(animals[i]);
//    console.log(animals[i]);
//  }
// }

function keyValue(key, value){
  console.log(key)
  var keyObject = {
  }

  keyObject[key] = value;

  console.log(keyObject)
  return keyObject;
}

console.log(keyValue("city", "denver"))
