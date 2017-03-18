/*
* created by Sestri4kina on 18.03.2017
*
* https://www.codewars.com/kata/playing-with-digits/train/javascript
*/
function digPow(n, p){
    let newNum = n.toString().split('')
             .map((x, index) => {return Math.pow(+x, index + p)})
             .reduce((sum, x) => {return sum + x}, 0);
    return (newNum / n) % 1 === 0 ? newNum / n : -1;
}

let result = digPow(89, 1);
console.log(`Should return: 1. Output is: ${result}`);

let result1 = digPow(46288, 3);
console.log(`Should return: 51. Output is: ${result1}`);
