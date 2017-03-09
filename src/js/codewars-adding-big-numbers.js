/*
* created by Sestri4kina on 06.03.2017
*
* https://www.codewars.com/kata/adding-big-numbers/train/javascript
*/
module.exports = function add(a, b) {
    var aL = a.length,
        bL = b.length,
        limit = Math.min(aL, bL),
        biggerNum = aL >= bL ? a : b,
        smallerNum = aL < bL ? a : b,
        firstPartBiggerNum = biggerNum.slice(0, biggerNum.length - limit),
        secondPartBiggerNum = biggerNum.slice(-limit),
        firstItem = secondPartBiggerNum.split('').map(x => +x),
        secondItem = smallerNum.split('').map(x => +x),
        addition = '',
        zeroOrOne = 0;

    for (var i = limit-1; i >= 0; i--) {
        var digitsSum = firstItem[i] + secondItem[i] + zeroOrOne;
        if ( digitsSum > 9 ) {
            addition = digitsSum.toString().slice(1) + addition;
            zeroOrOne = 1;
        } else {
            addition = digitsSum.toString() + addition;
            zeroOrOne = 0;
        }
    }
    //special cases
    if ( aL === bL && zeroOrOne === 1 ) { return zeroOrOne + addition; }
    if ( aL === bL && zeroOrOne === 0 ) { return addition; }
    if ( zeroOrOne === 0 ) { return firstPartBiggerNum + addition; }

    var firstPartReversedArr = firstPartBiggerNum.split('').slice().reverse().map(x => +x),
        firstPartRes = [];
    firstPartReversedArr.forEach( (x, index, arr) => {
        if ( x + zeroOrOne > 9 && index !== arr.length - 1 ) {
            x = (x + zeroOrOne).toString().slice(1);
            firstPartRes.push(x);
            zeroOrOne = 1;
        } else if (x + zeroOrOne < 9 && index !== arr.length - 1) {
            x = (x + zeroOrOne).toString();
            firstPartRes.push(x);
            zeroOrOne = 0;
        } else if ( index === arr.length - 1 ) {
            x = (x + zeroOrOne).toString();
            firstPartRes.push(x);
        }
    });
    
    return firstPartRes.slice().reverse().join('') + addition;
};

/*
var result = add('99', '11');
console.log(`Should return: '110'. Output is: ${result}
`);

var result1 = add('9999', '33');
console.log(`Should return: '10032'. Output is: ${result1}
`);

var result2 = add('123', '999999');
console.log(`Should return: '1000122'. Output is: ${result2}
`);

var result3 = add('123', '124');
console.log(`Should return: '247'. Output is: ${result3}
`);

var result4 = add('11123', '124');
console.log(`Should return: '11247'. Output is: ${result4}
`);
*/