/**
 * Created by Sestri4kina on 21.01.2017.
 *
 * Extend the array object with a function to return all elements of that array,
 * except the ones with the indexes passed in the parameter.
 */
Array.prototype.except = function(keys){
    return this.filter((x, index, arr) => {
        return (typeof keys === 'number') ? (index !== keys) :
        keys.indexOf(index) === -1;
    });
};

var arr = ['a', 'b', 'c', 'd', 'e'];

var result = arr.except([1,3]);
console.log(`Should return: ['a', 'c', 'e']. Output is: ${result}
`);

var result1 = arr.except(1);
console.log(`Should return: ['a', 'c', 'd', 'e']. Output is: ${result1}
`);

