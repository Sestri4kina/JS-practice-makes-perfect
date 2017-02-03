/**
 * Created by Sestri4kina on 02.02.2017.
 *
 * https://www.codewars.com/kata/build-a-pile-of-cubes/javascript
 * The parameter of the function findNb will be an integer m and you have to return the integer n
 * such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.
 */
module.exports = function findNb(m) {
//sum of the first  natural n cubes equals to (n*(n+1)/2)^2
    var c = 2 * Math.sqrt(m),
        rootOfDiscriminant = Math.sqrt(1 + 4*c),
        n = (-1 + rootOfDiscriminant)/2;

    return (n % 1 == 0) ? n : -1;
};

/*
var result = findNb(4183059834009);
console.log(`Should return: 2022. Output is: ${result}
`);

var result1 = findNb(24723578342962);
console.log(`Should return: -1. Output is: ${result1}
`);

var result2 = findNb(40539911473216);
console.log(`Should return: 3568. Output is: ${result2}
`);
*/