function chunk(input, size) {
    var arrayToChunk = input;
    var fracDiv = input.length / size;
    var remainder = input.length - Math.floor(fracDiv) * size;
    var chunkedArray = [];
    console.log("remainder")
    console.log(remainder);
    for (var i = 0; i < size; i++) {
        var chunk = [];
        if (i === 0) {

            chunk = arrayToChunk.slice(0, Math.ceil(fracDiv));
            console.log("The First Chunk")
            console.log(chunk)
            chunkedArray.push(chunk)
        } else if (i < remainder) {
            chunk = arrayToChunk.slice(i * Math.ceil(fracDiv), i * Math.ceil(fracDiv) + Math.ceil(fracDiv));
            chunkedArray.push(chunk);
        } else {
            chunk = arrayToChunk.slice(i * Math.floor(fracDiv) + remainder, i * Math.floor(fracDiv) + remainder + Math.floor(fracDiv));
            chunkedArray.push(chunk);
        }

    }

    console.log("The Chunked Array")
    console.log(chunkedArray)
}

var test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var test2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var test3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]

// chunk(test1, 2)
// chunk(test1, 3)
// chunk(test1, 4)
chunk(test3, 7)
