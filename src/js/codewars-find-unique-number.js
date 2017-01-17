/**
 * Created by Sestri4kina on 16.01.2017.
 *
 * There is an array with some numbers.
 * All numbers are equal except for one. Try to find it!
 */
function findUniq(data) {
    return data.find((x, index, arr) => {
        return x !== arr[index + 1] && x !== arr[index - 1];
    });
}

var result = findUniq([ 1, 1, 1, 2, 1, 1 ]);
console.log(`Should return: 2. Output is: ${result}
`);

var result1 = findUniq([ 0, 0, 0.55]);
console.log(`Should return: 0.55. Output is: ${result1}
`);


