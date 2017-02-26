/**
 * Created by Sestri4kina on 22.02.2017.
 *
 * https://www.codewars.com/kata/cut-array-into-smaller-parts/javascript
 */
module.exports = function makeParts(arr, chunkSize) {
    if (arr.length < chunkSize) return [arr];
    var result = [];
    for (var i = 0, limit = arr.length; i < limit; i += chunkSize){
        result.push(arr.slice(i, i + chunkSize));
    }
    return JSON.stringify(result);
};

/*
var result = makeParts([1,2,3,4,5], 2);
console.log(`Should return: [[1,2],[3,4],[5]]. Output is: ${result}
`);

var result3 = makeParts([1,2,3], 1);
console.log(`Should return: [[1],[2],[3]]. Output is: ${result3}
`);

var result1 = makeParts([1,2,3,4,5], 10);
console.log(`Should return: [[1,2,3,4,5]]. Output is: ${result1}
`);
    */