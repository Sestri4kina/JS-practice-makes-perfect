/**
 * Created by Sestri4kina on 07.02.2017.
 *
 * https://www.codewars.com/kata/pairs-of-integers-from-m-to-n/train/javascript
 */
function generatePairs(m, n) {
    var pairs = [];
    for (var i = m; i <= n; i++){
        for (var j = i; j <= n; j++){
            pairs.push([i,j]);
        }
    }
    return pairs;
}

var result = generatePairs(2, 4);
console.log(`Should return: [ [2, 2], [2, 3], [2, 4], [3, 3], [3, 4], [4, 4] ]. Output is: ${result}
`);
