/**
 * Created by Sestri4kina on 17.03.2017.
 *
 * https://www.codewars.com/kata/simple-fun-number-23-square-digits-sequence/train/javascript
 *
 */
function getNewNum(num) {
    return num.toString().split('')
        .map(x => +x)
        .reduce((sum, cur) => { return sum + cur*cur; }, 0);
}

function squareDigitsSequence(a0) {
    let arr =[a0];
    for (;;) {
        let b = getNewNum(arr[arr.length-1]);
        if (arr.indexOf(b) == -1) {
            arr.push(b);
        } else return arr.length + 1;
    }
}

let result = squareDigitsSequence(16);
console.log(`Should return: 9. Output is: ${result}`);

let result1 =squareDigitsSequence(103);
console.log(`Should return: 4. Output is: ${result1}`);

