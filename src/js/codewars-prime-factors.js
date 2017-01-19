/**
 * Created by Sestri4kina on 18.01.2017.
 *
 * The function takes an integer on the standard input and returns a list of integers.
 * That list contains the prime factors in numerical sequence.
 */
module.exports = function primeFactors(num){
    var tmp = num,
        factors = [];
    for (var i = 2; i <= num; i++){
        while (tmp % i === 0){
            tmp = tmp / i;
            factors.push(i);
        }
    }
    return factors;
};

/*
var result = primeFactors(1);
console.log(`Should return: []. Output is: ${result}
`);

var result1 = primeFactors(10);
console.log(`Should return: [2, 5]. Output is: ${result1}
`);

var result2 = primeFactors(8);
console.log(`Should return: [2, 2, 2]. Output is: ${result2}
`);
*/