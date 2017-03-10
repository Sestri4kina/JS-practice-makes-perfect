/**
 * Created by Sestri4kina on 27.02.2017.
 *
 * https://www.codewars.com/kata/next-bigger-number-with-the-same-digits/train/javascript
*/
function numberHasNoZero(n) {
    return n.toString().indexOf('0') === -1;
}

function digitsDecrease(n){
    if ( !numberHasNoZero(n) ) return false;
    let numArr = n.toString().split('').map(x => +x),
        counter = 0;
    for (var i = 0, limit = numArr.length; i < limit - 1; i++){
        if ( numArr[i+1] / numArr[i] >= 1 ) counter += 1;
        else counter += 0;
    }
    return counter === 0;
}

function numberOfDigits(num){
    return num.toString().length;
}

function rearrangeKLastDigitsClockwise(num, k){
    let numArr = num.toString().split('').map(x => +x),
        firstPart = numArr.slice(0, numArr.length - k).join(''),
        kLastDigits = numArr.slice(numArr.length - k),
        possibleVariants = [];

    for (var i = 0; i < k; i++) {
        kLastDigits.unshift(kLastDigits.pop());
        possibleVariants.push(kLastDigits.join(''));
    }

    let last = possibleVariants.map(x => +(firstPart + x))
        .filter(x => { return (x > num && numberOfDigits(x) === numberOfDigits(num)); });
    return last.length === 0 ? 0 : last.reduce((a,b) => { return a<b ? a : b;});
}

function switchKLastDigits(num, k){
    let numArr = num.toString().split('').map(x => +x),
        firstPart = numArr.slice(0, numArr.length - k).join(''),
        kLastDigits = numArr.slice(numArr.length - k),
        sortedKLastDigits = kLastDigits.slice().sort((a,b) => {return a-b;}),
        diff = sortedKLastDigits.filter((x, i, arr) =>{ return arr.indexOf(x) === i; }),
        diffIndices = diff.map(x => sortedKLastDigits.indexOf(x)),
        possibleVariants = [];

    for (let i = 0; i < diff.length; i++) {
        let tmp = sortedKLastDigits.slice();
        tmp.splice(diffIndices[i], 1);
        tmp.unshift(diff[i]);
        possibleVariants.push(tmp.join(''));
        tmp = kLastDigits.slice().sort((a,b) => {return a-b;});
    }

    let last = possibleVariants.map(x => +(firstPart + x) )
        .filter(x => { return (x > num && numberOfDigits(x) === numberOfDigits(num)); });
    return last.length === 0 ? 0 : last.reduce((a,b) => { return a<b ? a : b; });
}

module.exports = function nextBigger(n) {
    if ( n < 10 ) return -1;
    if ( digitsDecrease(n) ) return -1;
    let numArr = n.toString().split(''),
        limit = numArr.length,
        nonDiffDigits = numArr.reduce((sum, x) => { return (x == numArr[0]) ? sum + 0 : sum + x  }, 0);
    if ( nonDiffDigits == 0 ) return -1;

    for (var k = 2; k <= limit; k++) {
        if  ( rearrangeKLastDigitsClockwise(n, k) !== 0
            && switchKLastDigits(n, k) !== 0 ){
            return rearrangeKLastDigitsClockwise(n, k) < switchKLastDigits(n, k)
                ? rearrangeKLastDigitsClockwise(n, k)
                : switchKLastDigits(n, k);
        } else if (rearrangeKLastDigitsClockwise(n, k) !== 0
            && switchKLastDigits(n, k) === 0 ){
            return rearrangeKLastDigitsClockwise(n, k);
        } else if (rearrangeKLastDigitsClockwise(n, k) === 0
            && switchKLastDigits(n, k) !== 0 ){
            return switchKLastDigits(n, k);
        }
    }
    if (rearrangeKLastDigitsClockwise(n, limit) === 0
        || switchKLastDigits(n, limit) === 0) { return -1; }
};

/*
var result = nextBigger(12);
console.log(`Should return: 21. Output is: ${result}
`);

var result1 = nextBigger(513);
console.log(`Should return: 531. Output is: ${result1}
`);

var result2 = nextBigger(2017);
console.log(`Should return: 2071. Output is: ${result2}
`);

var result3 = nextBigger(9);
console.log(`Should return: -1. Output is: ${result3}
`);

var result4 = nextBigger(111);
console.log(`Should return: -1. Output is: ${result4}
`);

var result5 = nextBigger(790);
console.log(`Testing for: 790.
Should return: 907. Output is: ${result5}
`);

var result6 = nextBigger(1234567890);
console.log(`Testing for: 1234567890  .
Should return: 1234567908. Output is: ${result6}
`);

var result7 = nextBigger(88574032);
console.log(`Testing for: 88574032.
Should return: 88574203. Output is: ${result7}
`);

var result8 = nextBigger(28389);
console.log(`Testing for: 28389.
Should return: 23988. Output is: ${result8}
`);

var result9 = nextBigger(5650);
console.log(`Testing for: 5650.
Should return: 6055. Output is: ${result9}
`);
*/