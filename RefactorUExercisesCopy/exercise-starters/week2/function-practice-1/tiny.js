function tiny(num){
    if(num>0 && num<1){
        return true;
    }
    else{
        return false;
    }
}

console.log(tiny(1.4));
console.log(tiny(.4));
console.log(tiny(0));

