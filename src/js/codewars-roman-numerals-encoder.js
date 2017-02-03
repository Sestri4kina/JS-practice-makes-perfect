/**
 * Created by Sestri4kina on 03.02.2017.
 *
 * https://www.codewars.com/kata/roman-numerals-encoder/javascript
 * Create a function taking a positive integer(n < 4000) as its parameter and
 * returning a string containing the Roman Numeral representation of that integer.
 */
module.exports = function romanEncoder(num){
    var romans = [
            {letter: 'I', num: 1}, {letter: 'II', num: 2},
            {letter: 'III', num: 3}, {letter: 'IV', num: 4},
            {letter: 'V', num: 5}, {letter: 'VI', num: 6},
            {letter: 'VII', num: 7}, {letter: 'VIII', num: 8},
            {letter: 'IX', num: 9}, {letter: 'X', num: 10},
            {letter: 'XX', num: 20}, {letter: 'XXX', num: 30},
            {letter: 'XL', num: 40}, {letter: 'L', num: 50},
            {letter: 'LX', num: 60}, {letter: 'LXX', num: 70},
            {letter: 'LXXX', num: 80}, {letter: 'XC', num: 90},
            {letter: 'C', num: 100}, {letter: 'CC', num: 200},
            {letter: 'CCC', num: 300}, {letter: 'CD', num: 400},
            {letter: 'D', num: 500}, {letter: 'DC', num: 600},
            {letter: 'DCC', num: 700}, {letter: 'DCCC', num: 800},
            {letter: 'CM', num: 900}, {letter: 'M', num: 1000},
            {letter: 'MM', num: 2000}, {letter: 'MMM', num: 3000},
    ];
    return num.toString().split('')
        .map((x, index, arr) => {
            return Number(x) * Math.pow(10, arr.length - 1 - index);
        })
        .filter( x => { return x != 0 })
        .map( x => {
            if (x >= 4000) return {letter: Array((x/1000)+1).join('M'), num: x};
            return romans.find(z => { return z.num == x });
        })
        .map(x => { return x.letter })
        .join('');
};

/*
var result = romanEncoder(1990);
console.log(`Should return: 'MCMXC'. Output is: ${result}
`);

var result1 = romanEncoder(2007);
console.log(`Should return: 'MMVII'. Output is: ${result1}
`);

var result2 = romanEncoder(1000);
console.log(`Should return: 'M'. Output is: ${result2}
`);

var result3 = romanEncoder(8463);
console.log(`Should return: 'MMMMMMMMCDLXIII'. Output is: ${result3}
`);
*/