/**
 * Created by Sestri4kina on 11.01.2017.
 *
 * Given a string of digits,
 * you should replace any digit below 5 with '0' and any digit 5 and above with '1'.
 * Return the resulting string.
 */
module.exports = function fakeBin(str) {
    return str.split('').map(x => x < 5 ? 0 : 1).join('');
};

/*
var result = fakeBin('45385593107843568');
console.log(`Should return: '01011110001100111'. Output is: ${result}`);

var result1 = fakeBin('509321967506747');
console.log(`Should return: '101000111101101'. Output is: ${result1}`);
    */