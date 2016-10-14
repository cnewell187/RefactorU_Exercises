// var counter ={
//   iteration: 0,
//   increment: function(){
//     this.iteration++
//   }
// }
//
// counter.increment();
// counter.increment();
// counter.increment();
// console.log(counter.iteration);

// below doesnt work
// var counter ={
//   iteration: 0,
//   increment: function(){
//     var inc = function(amount){
//       this.iteration = amount;
//     }
//     inc(1);
//   }
// }
// counter.increment();

// function name(){
//   console.log("my name is ", this);
// }
//
// name();

function myName(excited, arg2, arg3)
{
  if(excited){
    var ending ="!"
  }
  else{
    var ending ="."
  }
    console.log("My name is "+this.name+ending);
};
var bill = {
    name: "Bill",
}

myName.call(bill, true)

var billIsMyName = myName.bind(bill);

billIsMyName(true)

var hi = [].map.call('hello', function(el){
  return el.toUpperCase();
})

console.log(hi)
