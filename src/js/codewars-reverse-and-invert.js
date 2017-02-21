/**
 * Created by Sestri4kina on 17.02.2017.
 *
 * https://www.codewars.com/kata/reverse-and-invert/javascript
 */
function numberReverseInvert(num){
    let tmp = num < 0 ? -num : num,
        sign = num < 0 ? 1 : -1;
    return sign * parseFloat(tmp.toString().split('').reverse().join(''));
}

module.exports = function reverseInvert(array){
    return array.filter(x => { return (typeof x === 'number') && (x % 1 === 0) })
        .map(x => { return numberReverseInvert(x) });
};

/*
var result = reverseInvert([1,12,'a',3.4,87,99.9,-42,50,5.6]);
console.log(`Should return: [-1,-21,-78,24,-5]. Output is: ${result}
`);

var result1 = reverseInvert([-9,-18,99]);
console.log(`Should return: [9,81,-99]. Output is: ${result1}
`);
*/