/**
 * Created by Sestri4kina on 18.12.2016.
 *
 * Return the number (count) of vowels in the given string.
 */

module.exports = function getCount(str) {
    var newStr = str.replace(/[aeiou]/g, 0).split('');
    return (newStr.filter(x => x==='0')).length;
}

/*
var result = getCount("abracadabra");
console.log(`Should return: 5. Output is: ${result}`);

var result1 = getCount('pear tree');
console.log(`Should return: 4. Output is: ${result1}`);
*/