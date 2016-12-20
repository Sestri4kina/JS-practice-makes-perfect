/**
 * Created by Sestri4kina on 19.12.2016.
 *
 * The array has various numbers.
 * You should sort it, but sort it by absolute value in ascending order.
 * For example, the sequence (-20, -5, 10, 15) will be sorted like so: (-5, 10, 15, -20).
 * Your function should return the sorted list .
 * Precondition: The numbers in the array are unique by their absolute values.
 * Input: An array of numbers.
 * Output: The list or tuple (but not a generator) sorted by absolute values in ascending order.
 *
 */

function absoluteSorting(data){
    for (var i = 0; i < data.length; i++){
        for (var j = 0; j < data.length - i - 1; j++){
            if ( Math.abs(data[j]) > Math.abs(data[j+1]) ){
                var tmp = data[j];
                data[j] = data[j+1];
                data[j+1] = tmp;
            }
        }
    }
    return data;
}

var result = absoluteSorting([-20, -5, 10, 15]);
console.log(`Should return: [-5, 10, 15, -20]. Output is: ${result}`);

var result1 = absoluteSorting([-1, -2, -3, 0]);
console.log(`Should return: [0, -1, -2, -3]. Output is: ${result1}`);

/* Elegant solution
 function absoluteSorting(numbers){
    return numbers.sort((a, b) => Math.abs(a) - Math.abs(b))
 }
 */