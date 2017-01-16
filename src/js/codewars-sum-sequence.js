/**
 * Created by Sestri4kina on 16.01.2017.
 *
 * Your task is to make function, which returns the sum of a sequence of integers.
 * The sequence is defined by 3 non-negative values: begin, end, step.
 * If begin value is greater than the end, function should returns 0
 */

module.exports = function sequenceSum(start, end, step){
    var sum = [start];
    while( sum[sum.length - 1] + step <= end){
        sum.push(sum[sum.length - 1] + step)
    }
    return start > end ? 0 : sum.reduce((a,b) => {return a+b});
};

/*
var result = sequenceSum(2,2,2);
console.log(`Should return: 2. Output is: ${result}
`);

var result1 = sequenceSum(2,6,2);
console.log(`Should return: 12. Output is: ${result1}
`);

var result2 = sequenceSum(1,5,3);
console.log(`Should return: 5. Output is: ${result2}
`);

/*
more elegant solution:
 const sequenceSum = (begin, end, step) => {
 if (begin > end) {
 return 0;
 }
 return begin + sequenceSum(begin + step, end, step);
 };
 */