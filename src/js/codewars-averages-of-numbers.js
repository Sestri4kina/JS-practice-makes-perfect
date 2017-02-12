/**
 * Created by Sestri4kina on 12.02.2017.
 *
 * https://www.codewars.com/kata/averages-of-numbers/javascript
 * Write a method, that gets an array of integer-numbers and return an array of
 * the averages of each integer-number and his follower, if there is one.
 * Example:
 * Input:  [ 1, 3, 5, 1, -10]
 * Output:  [ 2, 4, 3, -4.5]
 * If the array has 0 or 1 values or is null or None, your method should return an empty array.
 */
function averages(numbers) {
    return numbers === null || numbers.length === 0 || numbers.length === 1 ? [] :
        numbers.map((x, index, arr) => {
            return index != arr.length-1 ? 0.5 * (x + arr[index+1]) : 0;
        }).slice(0, numbers.length - 1);
}

var result = averages([2, 2, 2, 2, 2]);
console.log(`Should return: [2, 2, 2, 2]. Output is: ${result}
`);

var result3 = averages([2, -2, 2, -2, 2]);
console.log(`Should return:  [0, 0, 0, 0]. Output is: ${result3}
`);

var result1 = averages([1, 3, 5, 1, -10]);
console.log(`Should return: [2, 4, 3, -4.5]. Output is: ${result1}
`);

