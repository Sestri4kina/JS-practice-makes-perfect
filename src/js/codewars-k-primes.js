/*
* Created by Sestri4kina on 24.01.2017.
*
* function countKprimes  which given parameters k, start, end
* returns an array of the k-primes between start (inclusive) and end (inclusive).
* Given positive integers s and a, b, c where a is 1-prime, b 3-prime, c 7-prime
* find the number of solutions of a + b + c = s. Call this function puzzle(s).
 */
function hasKprimes(num, k){
    var tmp = num,
        count = 0;
    for (var i = 2; i <= num/2; i++ ){
        while ( tmp % i === 0){
            tmp = tmp/i;
            count++;
        }
    }
    return (k === 1 && count === 0) ? true : k === count;
}

module.exports = function countKprimes(k, start, end){
    var kPrimes = [];
    for (var i = start; i <= end; i++){
        if(hasKprimes(i, k)){
            kPrimes.push(i);
        }
    }
    return kPrimes;
};

function puzzle(s){
    var c = countKprimes(7, 0, s)[0],
        b = countKprimes(3, 0, s-c),
        count = 0;
    for (var i = 0; i < b.length; i++){
        var a = s - c - b[i];
        if(hasKprimes(a, 1)){ count++ }
    }
    return count;
}

/*
var result = countKprimes(5, 500, 600);
console.log(`Should return: [500, 520, 552, 567, 588, 592, 594]. Output is: ${result}
`);

var result1 = countKprimes(2, 0, 21);
console.log(`Should return: [4, 6, 9, 10, 14, 15, 21]. Output is: ${result1}
`);

var result2 = countKprimes(7, 0, 143);
console.log(`Should return: [128]. Output is: ${result2}
`);

var result3 = puzzle(143);
console.log(`Should return: 2. Output is: ${result3}
`);

var result4 = puzzle(138);
console.log(`Should return: 1. Output is: ${result4}
`);

*/
