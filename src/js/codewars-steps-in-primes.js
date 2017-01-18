/**
 * Created by Sestri4kina on 16.01.2017.
 *
 * Function should return the first pair of the two prime numbers spaced with a step of 'dif' between the limits
 * if these 'dif'-steps prime numbers exist otherwise null.
 */
function isPrime(num){
    var divisor = 3,
        limit = Math.sqrt(num);
    if (num == 2 || num == 3) return true;
    if (num % 2 === 0) return false;
    while (divisor <= limit){
        if (num % divisor === 0) {return false;}
        else {divisor+=2;}
    }
    return true;
}

function step(dif, start, end){
    var primes = [];

    for (var i = start; i <= end; i++){
        if (isPrime(i)){
            primes.push(i);
        }
    }

    var firstPrime = primes.length < 1 ? 'undefined' : primes.find((x, index, arr) => {
        return (arr.indexOf(x + dif) > -1);
    });

    return firstPrime != undefined ? [firstPrime, firstPrime+dif] : null;
}

var result = step(2, 5, 7);
console.log(`Should return: [5, 7]. Output is: ${result}
`);

var result1 = step(4, 130, 200);
console.log(`Should return: [163, 167]. Output is: ${result1}
`);

var result2 = step(6, 100, 103);
console.log(`Should return: null. Output is: ${result2}
`);
