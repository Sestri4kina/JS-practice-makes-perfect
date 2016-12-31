/*
 * Created by Sestri4kina on 15.12.2016.
 *
 * You are given an array with positive numbers and a number N.
 * You should find the N-th power of the element in the array with the index N.
 * If N is outside of the array, then return -1.
 * Don't forget that the first element has the index 0.
 *
 * Input: Two arguments. An array as a list of integers and a number as a integer.
 * Output: The result as an integer.
 * Precondition: 0 < len(array) ≤ 10  0 ≤ N  all(0 ≤ x ≤ 100 for x in array)
 *
 */

module.exports = function indexPower(arr, N){
    if ( N >= arr.length) {
        return -1;
    } else {
        return Math.pow(arr[N] , N);
    }
}

/*
let result = indexPower([1, 2, 3, 4], 2);
console.log(`Should return: 9. Output is: ${result}`);

let result1 = indexPower([1, 3, 10, 100], 3);
console.log(`Should return: 1000000. Output is: ${result1}`);

let result2 = indexPower([1, 2], 3);
console.log(`Should return: -1. Output is: ${result2}`);
*/