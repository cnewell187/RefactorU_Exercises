function alphabetSoup(str){
  var letters = str.split('');
  letters.sort();
  var finalWord = letters.join('');
  console.log(finalWord)
}

alphabetSoup("PURPLERAIN")
