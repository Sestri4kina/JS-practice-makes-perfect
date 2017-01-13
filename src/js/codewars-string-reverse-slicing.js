/**
 * Created by Sestri4kina on 12.01.2017.
 *
 * You'll be given a string of characters as an input.
 * Create a function reverse_slice/reverseSlice that returns a list of strings:
 * (a) in the reverse order of the original string, and
 * (b) with each successive string starting one character further in from the end of the original string.
 */
module.exports = function reverseSlice(str){
    var data = str.split('').reverse().join(''),
        arr = [];
    for(var i = 0; i < str.length; i++){
        arr.push(data.slice(i, str.length));
    }
    return arr;
};

/*
var result = reverseSlice('123');
console.log(`Should return: ['321', '21', '1']. Output is: ${result}`);

var result1 = reverseSlice('abcde');
console.log(`Should return:  ['edcba', 'dcba', 'cba', 'ba', 'a']. Output is: ${result1}`);
*/
