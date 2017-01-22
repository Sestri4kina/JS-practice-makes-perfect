/**
 * Created by Sestri4kina on 21.01.2017.
 *
 * Given a set of elements (integers or string characters) that may occur more than once,
 * we need to know the amount of subsets that none of their values have repetitions.
 */
function estSubsets(arr) {
    var data = [arr[0]];
    arr.forEach(x => {
        if(data.indexOf(x) === -1) data.push(x);
    });
    return arr.length === 0 ? 0 : (Math.pow(2, data.length) - 1);
}

var result = estSubsets([1, 2, 3, 4]);
console.log(`Should return: 15. Output is: ${result}
`);

var result1 = estSubsets([2, 3, 4, 5, 5, 6, 6, 7, 8, 8]);
console.log(`Should return: 127. Output is: ${result1}
`);

var result2 = estSubsets([]);
console.log(`Should return: 0. Output is: ${result2}
`);

var result3 = estSubsets([1, 1, 1, 1]);
console.log(`Should return: 1. Output is: ${result3}
`);

