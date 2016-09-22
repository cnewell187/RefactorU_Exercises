// Title Case Every Letter

function letterCapitalize(str){
    str = str.toLowerCase();
    var stringArray = str.split(" ");
    for(var i =0 ; i<stringArray.length; i++){
        stringArray[i] = stringArray[i].charAt(0).toUpperCase()+stringArray[i].slice(1);
    }
    str = stringArray.join(" ");
    return str;
}

