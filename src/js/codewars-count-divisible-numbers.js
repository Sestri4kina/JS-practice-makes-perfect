/**
 * Created by Sestri4kina on 28.01.2017.
 *
 * Write function divisibleCount(x, y, k) that takes in 3 numbers x, y and k,
 * and returns the number of integers within the range [x..y] that are divisible by k
 */
function divisibleCount(start, end, k) {
    //check special cases
    var dif = end -start;
    if (dif == 0 && start % k === 0) return 1;
    if (dif == 0 && start % k !== 0) return 0;
    if (dif == 1 && (start % k === 0 || end % k === 0)) return 1;
    //build arrays to find the first and the last divisible numbers in a sequence
    var tmp = (start !== 0) ?
        Array.from(Array(k).keys()).map(x => { return (x+start) }) :
        Array.from(Array(k).keys());
    var reverseArr = Array.from(Array(k).keys()).map(x => { return (end-x) });
    var first = tmp.find(x => { return x % k === 0;});
    var last = reverseArr.find(x => { return x % k === 0;});
    //find an amount of arithmetic progression's elements
    return (last - first)/k + 1;
}

var result = divisibleCount(6,11,2);
console.log(`Should return: 3. Output is: ${result}
`);

var result3 = divisibleCount(101, 9007199254740991, 11);
console.log(`Should return: 818836295885535. Output is: ${result3}
`);

var result1 = divisibleCount(1005, 9007199254740991, 109);
console.log(`Should return: 82634855548073. Output is: ${result1}
`);
/*
1. for loop method - 12500ms
 var count = 0;
 for (var i = start; i <= end; i++){
 if ( i % k === 0){ count++;}
 }
 return count;

 2. more elegant solution
 var totalDivisibles =  Math.floor(y / k),
 excludeDivisibles = Math.floor((x - 1) / k),
 divisiblesInArray = totalDivisibles - excludeDivisibles;
 return divisiblesInArray;

 */