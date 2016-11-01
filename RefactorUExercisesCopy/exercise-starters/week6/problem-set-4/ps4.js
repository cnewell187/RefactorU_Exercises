function sum(numbers) {
    var finalNum = 0;
    for(var i=0 ; i < numbers.length; i++){
        finalNum = finalNum + numbers[i]
    }
    console.log(finalNum);

}


sum([1,2,3,4,5])
