
function getSeconds(string){
    return Number(string.substring(3)) + Number(string.substring(0,2))*60;
}

console.log(getSeconds("88:87"));
