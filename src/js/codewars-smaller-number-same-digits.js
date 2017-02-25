/**
 * Created by Sestri4kina on 23.02.2017.
 *
 * https://www.codewars.com/kata/next-smaller-number-with-the-same-digits/train/javascript
 */
function digitsIncrease(n){
    let numArr = n.toString().split('').map(x => +x).filter(x => { return x != 0 }),
        counter = 0;
    for (var i = 0, limit = numArr.length; i < limit - 1; i++){
        if ( numArr[i] / numArr[i+1] <= 1 ) counter += 0;
        else counter += 1;
    }
    return counter === 0;
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

    return possibleVariants.map(x => +(firstPart + x))
        .filter(x => x < num )
        .reduce((a,b) => { return a>b ? a : b;}, 0);
}

function switchKLastDigits(num, k){
    let numArr = num.toString().split('').map(x => +x),
        firstPart = numArr.slice(0, numArr.length - k).join(''),
        kLastDigits = numArr.slice(numArr.length - k),
        kLastDigitsNum = +numArr.slice(numArr.length - k).join(''),
        sortedKLastDigits = kLastDigits.sort((a,b) => {return b-a;}),
        firstBiggest = sortedKLastDigits[0],
        secondBiggest = sortedKLastDigits.find( x => {return x < firstBiggest;}),
        indexSecondBiggest = sortedKLastDigits.findIndex( x => {return x < firstBiggest;});

    sortedKLastDigits.splice(indexSecondBiggest, 1);
    let lastPart = [secondBiggest].concat(sortedKLastDigits).join('');

    return +(firstPart + lastPart) < kLastDigitsNum ? +(firstPart + lastPart) : 0;
}

function numberNotEndsWithZero(num){
    return !num.toString().endsWith('0');
}

function nextSmaller(n) {
    if ( n < 10 ) return -1;
    if ( digitsIncrease(n) && numberNotEndsWithZero(n) ) return -1;
    let numArr = n.toString().split(''),
        limit = numArr.length,
        nonDiffDigits = numArr.reduce((sum, x) => { return (x == numArr[0]) ? sum + 0 : sum + x  }, 0);
    if ( nonDiffDigits == 0 ) return -1;

    for (var k = 2; k <= limit; k++) {
        if  ( rearrangeKLastDigitsClockwise(n, k) != 0 || switchKLastDigits(n, k) != 0){
            return rearrangeKLastDigitsClockwise(n, k) > switchKLastDigits(n, k)
                ? rearrangeKLastDigitsClockwise(n, k)
                : switchKLastDigits(n, k);
        }
    }
}

var result = nextSmaller(21);
console.log(`Should return: 12. Output is: ${result}
`);

var result1 = nextSmaller(531);
console.log(`Should return: 513. Output is: ${result1}
`);

var result2 = nextSmaller(2071);
console.log(`Should return: 2017. Output is: ${result2}
`);

var result3 = nextSmaller(9);
 console.log(`Should return: -1. Output is: ${result3}
`);

var result4 = nextSmaller(111);
 console.log(`Should return: -1. Output is: ${result4}
`);

var result5 = nextSmaller(907);
console.log(`Testing for: 907.
Should return: 790. Output is: ${result5}
`);

var result6 = nextSmaller(123456798);
console.log(`Testing for: 123456798.
Should return: 123456789. Output is: ${result6}
`);

var result7 = nextSmaller(88574203);
console.log(`Testing for: 88574203.
Should return: 88574032. Output is: ${result7}
`);

var result8 = nextSmaller(28389);
console.log(`Testing for: 28389.
Should return: 23988. Output is: ${result8}
`);