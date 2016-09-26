function firstReverse(str){
  var strReversed = "";

  for (var i = str.length-1; i>=0; i--){
    strReversed = strReversed + str.charAt(i);
  }
  return strReversed;
}

console.log(firstReverse("Reverse ME!!!"));


function swapCase(str){
  str2= "";
    for (var i = 0; i<str.length; i++){
        if (str.charAt(i)===(str.charAt(i)).toUpperCase()){
        str2 = str2 + str.charAt(i).toLowerCase();
      }
      else{
        str2 = str2 + str.charAt(i).toUpperCase();
      };
  }
  return str2;
}

console.log(swapCase("CaSeY"));


function letterCount(str){
  str=str.toLowerCase();
  count = {};
  for(var i = 0; i<str.length; i++){
    if (count[str.charAt(i)] != null){
      count[str.charAt(i)] +=1;
    }
    else{
      count[str.charAt(i)] = 1;
    }
  }
  highest = 0;
  for(item in count){
    if(count[item]>highest){
      highest = count[item];
    }
  }
  for(item in count){
    if(count[item]===highest){
      return item;
    }
  }
}

console.log(letterCount("HapAyaAyy"))
