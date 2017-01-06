/*
 * Created by Sestri4kina on 15.12.2016.
 *
 * You are given an array of numbers (floats).
 * You should find the difference between the maximum and minimum element.
 * Your function should be able to handle an undefined amount of arguments.
 * For an empty argument list, the function should return 0.
 * Floating-point numbers are represented in computer hardware as base 2 (binary) fractions.
 * So we should check the result with ±0.001 precision.
 * Input: An arbitrary number of arguments as numbers (int, float).
 * Output: The difference between maximum and minimum as a number (int, float).
 * Precondition: 0 ≤ len(args) ≤ 20
 * all(-100 < x < 100 for x in args)
 * all(isinstance(x, (int, float)) for x in args)
 *
 */
//using rest parameters to solve the problem with an undefined amount of arguments
module.exports = function mostNumbers(...numbers){
    let sortedNumbers = numbers.sort(function(a, b){return a-b});
    return sortedNumbers.length === 0 ? 0 :
        Number((sortedNumbers[sortedNumbers.length - 1] - sortedNumbers[0]).toFixed(3));
};

/*
refactor 06.01.2016
previous solution:
 if (numbers.length === 0) {
 return 0;
 } else {
 let sortedNumbers = numbers.sort(function(a, b){return a-b});
 return Number((sortedNumbers[sortedNumbers.length - 1] - sortedNumbers[0]).toFixed(3));
 }

let result = mostNumbers(10.2, -2.2, 0, 1.1, 0.5);
//should output: 12.4
console.log(`Should output: 12.4. Output is: ${result}`);
let result1 = mostNumbers();
//should output: 0
console.log(`Should output: 0. Output is: ${result1}`);
let result2 = mostNumbers(5, -5);
//should output: 10
console.log(`Should output: 10. Output is: ${result2}`);
//should output: 140
let result3 = mostNumbers(36,-26,-7.5,0.9,0.53,-6.6,-71,0.53,-48,57,69,0.063,-4.7,0.01,9.2);
console.log(`Should output: 140. Output is: ${result3}`);
*/