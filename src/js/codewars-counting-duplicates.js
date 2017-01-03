/**
 * Created by Sestri4kina on 04.01.2017.
 *
 * Function returns the count of distinct case-insensitive alphabetic characters
 * and numeric digits that occur more than once in the input string
 */

module.exports = function duplicateCount(data){
    var res = data.toLowerCase().split('').sort()
        .map((x, index, arr) => {return arr.indexOf(x)})
        .filter((x, index, arr) => {return x === arr[index+1] ? 1 : 0});
    var count = 0;
    for (var i = 0; i < res.length; i++){
        res[i] !== res[i+1] ? count++ : count;
    }
    return count;
};

/*
let result = duplicateCount("Indivisibility");
console.log(`Should return: 1. Output is: ${result}`);

let result1 = duplicateCount("Indivisibilities");
console.log(`Should return: 2. Output is: ${result1}`);

let result2 = duplicateCount("");
console.log(`Should return: 0. Output is: ${result2}`);

let result3 = duplicateCount("aabbcde");
console.log(`Should return: 2. Output is: ${result3}`);

let result4 = duplicateCount("abcde");
console.log(`Should return: 0. Output is: ${result4}`);
/*
more elegant solution using regexp
 return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
 */
