/**
 * Created by Sestri4kina on 20.01.2017.
 *
 * The function hasArithmProg takes a single parameter, arr,
 * and can return a boolean, a number(the index) or undefined.
 * If the entire array forms an arithmetic sequence, the function returns true.
 * If it's not an arithmetic progression itself but it contains at least one,
 * return the index of the element where the first arithmetic sequence starts.
 * If it's not one itself and it doesn't contain any, return false.
 * An arithmetic sequence will always consist of at least 3 numbers.
 * If this condition is not satisfied, the function will return undefined.
 */
function hasArithmProg(data){
    if(data.length <= 2) return undefined;
    var result = [];
    for (var i = 1; i < data.length; i++){
        result.push(data[i] - data[i-1]);
    }
    var testArithmProg = result.every((x, index, arr) => {
        return x === arr[0]
    });
    var anyArithmProg = result.findIndex((x, index, arr) => {
        return x === arr[index+1]
    });

    return (testArithmProg) ? true :
        (anyArithmProg === -1) ? false : anyArithmProg;
}

var result = hasArithmProg([9,5,1]);
console.log(`Should return: true. Output is: ${result}
`);

var result1 = hasArithmProg([90,2,4,6,8,14]);
console.log(`Should return: 1. Output is: ${result1}
`);

var result2 = hasArithmProg([2,10,4,6]);
console.log(`Should return: false. Output is: ${result2}
`);

var result3 = hasArithmProg([9,1]);
console.log(`Should return: 'undefined'. Output is: ${result3}
`);

