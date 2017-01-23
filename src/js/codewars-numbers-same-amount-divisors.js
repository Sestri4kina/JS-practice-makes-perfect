/**
 * Created by Sestri4kina on 22.01.2017.
 *
 * The integers 14 and 15, are contiguous (1 the difference between them, obvious) and
 * have the same number of divisors.
 * 14 ----> 1, 2, 7, 14 (4 divisors)
 * 15 ----> 1, 3, 5, 15 (4 divisors)
 * We have 8 pairs of integers below 50 having this property, they are:
 * [[2, 3], [14, 15], [21, 22], [26, 27], [33, 34], [34, 35], [38, 39], [44, 45]]
 * We need a special function, countPairsInt(), that receives two arguments,
 * diff and nMax, and outputs the amount of pairs of integers that fulfill this property,
 * all of them being smaller (not smaller or equal) than nMax.
 */
function amountDivisors(num){
    var countDivisors = 0;
    for (var i = 2, limit = num/2; i <= limit; i++){
        if(num % i === 0){countDivisors++}
    }
    return countDivisors;
}

module.exports = function countPairsInt(diff, nMax){
    var countPairs = 0;
    for (var i = 2, limit = nMax - diff; i < limit; i++){
        if (amountDivisors(i) === amountDivisors(i+diff)){
            countPairs++;
        }
    }
    return countPairs;
};

/*
var result = countPairsInt(1, 50);
console.log(`Should return: 8. Output is: ${result}
`);

var result1 = countPairsInt(3, 100);
console.log(`Should return: 7. Output is: ${result1}
`);
*/