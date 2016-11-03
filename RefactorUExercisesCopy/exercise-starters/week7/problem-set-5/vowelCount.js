function vowelCount(str){
  var letters = str.split();
  var vowelCounter = 0;
  for(var i = 0; i <letters.length; i++){
    if(letters[i] === ('a' || 'A'|| 'e'||'E'||'i'||'I'||'o'||'O'||'u'||'U')){
      vowelCounter++;
    }
  }
  console.log(vowelCounter);
}


vowelCount("AAAA")
