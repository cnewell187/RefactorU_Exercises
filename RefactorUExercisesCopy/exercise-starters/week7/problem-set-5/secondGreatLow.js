function firstGreatLow(array) {
    var lowest = array[0];
    var highest = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] < lowest) {
            lowest = array[i];
        }
        if(array[i] > highest){
          highest = array[i]
        }
    }
    console.log(highest)
    console.log(lowest)
}

function secondGreatLow(array) {
    var lowest;
    var highest;
    var secondLowest;
    var secondHighest;
    for (var i = 0; i < array.length; i++) {
        if (array[i] < lowest || lowest === undefined) {
            lowest = array[i];
        }
        if(array[i] > highest || highest === undefined){
          highest = array[i]
        }
    }

    for(var i = 0; i <array.length; i++){
      if ((array[i] < secondLowest || secondLowest === undefined) && array[i] >lowest && array[i] != lowest) {
          secondLowest = array[i];
      }
      if ((array[i] > secondHighest || secondHighest === undefined) && array[i] < highest && array[i] != highest) {
          secondHighest = array[i];
      }
    }
    console.log("Highest: " +highest)
    console.log("Lowest: " +lowest)
    console.log("Second Highest: " +secondHighest)
    console.log("Second Lowest: " +secondLowest)
}

var testArray = [0, 1, 2, 3, 4, 5, 6, 7, 8]
var testArray2 = [0,1]

//firstGreatLow(testArray)
secondGreatLow(testArray2)
