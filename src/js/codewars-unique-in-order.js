/**
 * Created by Sestri4kina on 31.12.2016.
 *
 * Implement the function unique_in_order
 * which takes as argument a sequence and returns a list of items
 * without any elements with the same value next to each other and
 * preserving the original order of elements.
 */

module.exports = function uniqueInOrder(data){
    return (typeof data === 'string' || data instanceof String) ?
        data.split('')
            .map((x, index, arr) => { return x === arr[index + 1] ? 0 : x})
            .filter((x) => {return x != '0'}) :
        data
            .map((x, index, arr) => { return x === arr[index + 1] ? 0 : x})
            .filter((x) => {return x != '0'});
};

/*
var result = uniqueInOrder('AAAABBBCCDAABBB');
console.log(`Should return: ['A', 'B', 'C', 'D', 'A', 'B']. Output is: ${result}`);

var result1 = uniqueInOrder([1,2,2,3,3]);
console.log(`Should return: [1,2,3]. Output is: ${result1}`);
 */