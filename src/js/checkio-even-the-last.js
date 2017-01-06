/**
 * Created by Sestri4kina on 16.12.2016.
 *
 * You are given an array of integers.
 * You should find the sum of the elements with even indexes (0th, 2nd, 4th...)
 * then multiply this summed number and the final element of the array together.
 * Don't forget that the first element has an index of 0.
 * For an empty array, the result will always be 0 (zero).
 * Input: A list of integers.
 * Output: The number as an integer.
 * Precondition: 0 ≤ len(array) ≤ 20
 * all(isinstance(x, int) for x in array)
 * all(-100 < x < 100 for x in array)
 *
 */

module.exports = function evenLast(arr){
    return arr.length === 0 ? 0 :
        (arr[arr.length - 1] * arr.reduce((prev, curr, index) => {return index % 2 === 0 ? prev + curr : prev}));
};

/*
previous solution:
 if (arr.length === 0) {
 return 0;
 } else {
 var sum = 0;
 for(var i = 0;  i < arr.length ; i++){
 if (i % 2 === 0 ) {
 sum = sum + arr[i];
 }
 }
 return sum * arr[arr.length - 1];
 }


var result = evenLast([0, 1, 2, 3, 4, 5]);
console.log(`Should return: 30. Output is: ${result}`);

var result1 = evenLast([]);
console.log(`Should return: 0. Output is: ${result1}`);

var result2 = evenLast([0, 2, 4, 7]);
console.log(`Should return: 28. Output is: ${result2}`);
*/