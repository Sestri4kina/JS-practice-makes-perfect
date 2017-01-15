/**
 * Created by Sestri4kina on 15.01.2017.
 *
 * The function takes two arguments:
 ** The length of Bob's lap (larger than 0)
 ** The length of Charles' lap (larger than 0)
 * The function should return an array containing exactly two numbers:
 ** The first number is the number of laps that Bob has to run
 ** The second number is the number of laps that Charles has to run
 */

function greatestCommonFactor(a, b){
    if(b == 0)
        return a;
    return greatestCommonFactor(b, a % b);
}

module.exports = function numberOfLaps(x, y){
    var arr = Array.from(arguments).reverse();
    var GCF = greatestCommonFactor(x, y);
    return arr.map( el => {return el/GCF});
};

/*
var result = numberOfLaps(3, 5);
console.log(`Should return: [5, 3]. Output is: ${result}`);

var result1 = numberOfLaps(6, 4);
console.log(`Should return: [2, 3]. Output is: ${result1}`);

var result2 = numberOfLaps(12, 4);
console.log(`Should return: [1, 3]. Output is: ${result2}`);

/*
several possible solutiona:
 1.
 function gcd(a, b) {
 if(b == 0)
 return a;
 return gcd(b, a % b);
 }
var nbrOfLaps = function (x, y) {
 var lcm = (x*y)/ gcd(x,y);
 return [lcm/x, lcm/y];
 }

 2.
 var nbrOfLaps = function(x, y) {
 var lcm = x;
 while(lcm % y != 0) {lcm += x;}
 return [lcm / x, lcm / y];
 }

 3.
 function nbrOfLaps(x, y) {
 let arr = x > y ? [x, y] : [y, x];
while (arr[0] % arr[1] !== 0)
 arr = [arr[1], arr[0] % arr[1]];
 return [y / arr[1], x / arr[1]];
 }
 */
