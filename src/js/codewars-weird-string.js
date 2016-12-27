/**
 * Created by Sestri4kina on 26.12.2016.
 *
 * Write a function toWeirdCase that accepts a string,
 * and returns the same string with all even indexed characters in each word upper cased,
 * and all odd indexed characters in each word lower cased.
 * The indexing just explained is zero based, so the zero-ith index is even,
 * therefore that character should be upper cased.
 * The passed in string will only consist of alphabetical characters and spaces(' ').
 * Spaces will only be present if there are multiple words.
 * Words will be separated by a single space(' ').
 */

module.exports = function toWeirdCase(data) {
    var arr = data.split(' ');
    var result = arr.map((x) => {
        return x.split('').map((y, j) => {
            return j % 2 === 0 ? y.toUpperCase() : y}).join('');
    });
    return result.join(' ');
}

/*
var result = toWeirdCase("String");
console.log(`Should return: StRiNg. Output is: ${result}`);

var result1 = toWeirdCase("This is a test");
console.log(`Should return: 'ThIs Is A TeSt'. Output is: ${result1}`);


var result2 = toWeirdCase("This is the final test case");
console.log(`Should return: 'ThIs Is ThE FiNaL TeSt CaSe'. Output is: ${result2}`);
*/
/*
 return data.split('').map((x, index) => {
 return ( index % 2 === 0 ) ? x.toUpperCase() : x;}).join('');
 */
/*
 var arr = data.split(' ');
 var result = arr.map(function(x, index){
 var check = arr.slice(1, index - 1);
 return (index === 0) ?
 x.split('').map((y, j) => {return j % 2 === 0 ? y.toUpperCase() : y}).join('') :
 (check % 2 === 0) ?
 x.split('').map((y, j) => {return j % 2 === 0 ? y.toUpperCase() : y}).join('') :
 x.split('').map((y, j) => {return j % 2 !== 0 ? y.toUpperCase() : y}).join('');
 });
 return result.join(' ');
 */