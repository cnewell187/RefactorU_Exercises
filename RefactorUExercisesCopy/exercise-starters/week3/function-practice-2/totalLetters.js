function totalLetters(array1){
  string = array1.join("");
  string2=string.replace(/[^a-zA-Z]/g, "");
  return string2.length;
};

var testArray =["Happy111@@@ ^^^ ----", "sad", "glad"];

console.log(totalLetters(testArray));
