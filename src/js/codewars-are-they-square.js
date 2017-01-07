/**
 * Created by Sestri4kina on 07.01.2017.
 */
function isSquare(data){
    return data.length === 0 ? 'undefined' : data.every((x) => { return Math.sqrt(x) % 1 === 0});

}

var result = isSquare([1, 4, 9, 16, 25, 36]);
console.log(`Should return: true. Output is: ${result}`);

var result1 = isSquare([1, 2, 3, 4, 5, 6]);
console.log(`Should return: false. Output is: ${result1}`);

var result2 = isSquare([]);
console.log(`Should return: undefined. Output is: ${result2}`);