/**
 * Created by Sestri4kina on 03.01.2017.
 *
 * function that sums the list of comma separated numbers
 * that arrive in a string and return the result as an int.
 * The string passed into your function will only contain numbers in string format
 * and can contain any number of comma separated integers.
 */

module.exports = function stringCalculator(data){
    return data.split(', ').reduce((prev, curr) => { return Number(prev) + Number(curr) });
};

/*
var result = stringCalculator('2, 3');
console.log(`Should return : 5. Output is: ${result}`);

var result1 = stringCalculator('20, 30, 10');
console.log(`Should return : 60. Output is: ${result1}`);
*/