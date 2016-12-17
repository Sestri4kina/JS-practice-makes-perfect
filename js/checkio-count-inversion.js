/**
 * Created by Sestri4kina on 17.12.2016.
 *
 * In computer science and discrete mathematics,
 * an inversion is a pair of places in a sequence where the elements in these places are out of their natural order.
 * So, if we use ascending order for a group of numbers,
 * then an inversion is when larger numbers appear before lower number in a sequence.
 * Check out this example sequence: (1, 2, 5, 3, 4, 7, 6) and
 * we can see here three inversions  - 5 and 3; - 5 and 4; - 7 and 6.
 * You are given a sequence of unique numbers and
 * you should count the number of inversions in this sequence.
 * Input: A sequence as a tuple of integers.
 * Output: The inversion number as an integer.
 * How it is used: In this mission you will get to experience the wonder of nested loops, that is of course, if you don't use advanced algorithms.
 * Precondition: 2 < len(sequence) < 200
 * len(sequence) == len(set(sequence))
 * all(-100 < x < 100 for x in sequence)
 *
 */

function countInversion(data){
    var count = 0;
    var l = data.length;
    for(var i = 0; i < l; i++){
        for(var j = i + 1; j < l; j++){
            if(data[i] - data[j] > 0){
                count++;
            }
        }
    }
    return count;
}

var result = countInversion([1, 2, 5, 3, 4, 7, 6]);
console.log(`Should return: 3. Output is: ${result}`);

var result1 = countInversion([0, 1, 2, 3]);
console.log(`Should return: 0. Output is: ${result1}`);
