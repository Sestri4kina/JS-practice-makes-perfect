/**
 * Created by Sestri4kina on 21.01.2017.
 *
 * Write a method that takes an array of consecutive (increasing) letters as input and that
 * returns the missing letter in the array.
 * You will always get an valid array. And it will be always exactly one letter be missing.
 * The length of the array will always be at least 2.
 * The array will always contain letters in only one case.
 */
module.exports = function findMissingLetter(data){
    var charCode = data.map(x => {return x.charCodeAt(0)})
                     .find((x, index, arr) => {return x === arr[index+1] - 2});
    return String.fromCharCode(charCode+1);
};

/*
var result = findMissingLetter(['a','b','c','d','f']);
console.log(`Should return: 'e'. Output is: ${result}
`);

var result1 = findMissingLetter(['O','Q','R','S']);
console.log(`Should return: 'P'. Output is: ${result1}
`);
    */