/**
 * Created by Sestri4kina on 23.01.2017.
 *
 * A natural number is called k-prime if it has exactly k prime factors, counted with multiplicity. A natural number is thus prime if and only if it is 1-prime.
 * Examples:
 * k = 2 -> 4, 6, 9, 10, 14, 15, 21, 22, …
 * k = 3 -> 8, 12, 18, 20, 27, 28, 30, …
 * Given an integer k and a list arr of positive integers the function consecKPrimes returns how many times in
 * the sequence arr numbers come up twice in a row with exactly k prime factors?
 */
function countPrimes(num){
    var tmp = num,
        countFactors = 0;
    for (var i = 2; i <= num; i++){
        while (tmp % i === 0){
            tmp = tmp / i;
            countFactors++;
        }
    }
    return countFactors;
}

function consecutiveKPrimes(k, arr){
    var result = arr.map(x => {return countPrimes(x)});
    var countPairs = 0;
    for (var i = 0; i < result.length; i++){
        if (result[i] === k && result[i+1] === k){
            countPairs ++;
        }
    }
    return countPairs;
}

var result = consecutiveKPrimes(3, [10158, 10182, 10184, 10172, 10179, 10168, 10156, 10165, 10155, 10161, 10178, 10170]);
console.log(`Should return: 5. Output is: ${result}
`);

var result1 = consecutiveKPrimes(2, [10123, 10122, 10132, 10129, 10145, 10148, 10147, 10135, 10146, 10134]);
console.log(`Should return: 2. Output is: ${result1}
`);














