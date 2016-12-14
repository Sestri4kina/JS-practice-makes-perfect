/**
 * Created by Sestri4kina on 14.12.2016.
 *
 * Largest prime factor
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 *
 * Not the most elegant way to solve this task.
 * How to improve:
 * write function isPrimeNumber;
 * then build primeFactors array for a number.
 */

function primeFactors(number){
    var factors = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101];
    var numberFactors = [];
    for (let i of factors) {
        if (number % i == 0) {
            numberFactors.push(i);
            number = number / i;
        }
    }
    return numberFactors;
}

//test number: 30030 = 2*3*5*7*11*13. console should output: [2, 3, 5, 7, 11, 13]
var test = primeFactors(30030);
console.log(test);
var result = primeFactors(600851475143);
console.log(result);

