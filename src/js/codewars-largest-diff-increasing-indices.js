/**
 * Created by Sestri4kina on 30.01.2017.
 *
 * https://www.codewars.com/kata/largest-difference-in-increasing-indexes/train/javascript
 * The largestDifference takes an array of numbers.
 * That array is not sorted. Do not sort it or change the order of the elements in any way,
 * or their values. Consider all of the pairs of numbers in the array where
 * the first one is less than or equal to the second one.
 * From these, find a pair where their positions in the array are farthest apart.
 * Return the difference between the indexes of the two array elements in this pair.
 */
module.exports = function largestDifference(data) {
    var combos = [];
    for (let i = 0; i < data.length; i++){
        var tmp = data.slice(i).filter((x) => { return x >= data[i]; })
            .map((x, index, arr) => {
                return data.indexOf(x) <= data.indexOf(arr[index-1]) ?
                    data.lastIndexOf(x) : data.indexOf(x);
            });
        if (tmp.length > 1) combos.push(tmp);
    }

    var almostRes = combos.map((x) => {return x[x.length - 1] - x[0]; });
    return almostRes.length === 0 ? 0 : Math.max(...almostRes);
};

/*
var result = largestDifference([1,2,3]);
console.log(`Should return: 2. Output is: ${result}
`);

var result1 = largestDifference([9,4,1,10,3,4,0,-1,-2]);
console.log(`Should return: 4. Output is: ${result1}
`);

/*
more elegant solution:
 var largestDifference = function(data) {
 return Math.max.apply(null, data.map((a, i) => data.slice(i).map( x => a <= x).lastIndexOf(true)));
 };
 */