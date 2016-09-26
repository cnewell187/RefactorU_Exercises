var students = [{
 name: 'Liz',
 age: 25,
 city: 'Boulder'
},{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},{
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];

// for(var i=0; i < students.length; i++) {
//  console.log(students[i].name);
// }

function logNames(objArray, string){
  var remainingArray = objArray.slice(1);
  var finalString =string;
  if (objArray.length > 0){
    finalString = finalString + objArray[0].name +"\n";
    return logNames(remainingArray, finalString);
  }
  else{
    return finalString;
  }
}

console.log(logNames(students, ""));
