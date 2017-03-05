/*
* Created by Sestri4kina on 05.03.2017
*
* https://www.codewars.com/kata/simple-fun-number-176-reverse-letter/train/javascript
*/
function reverseLetter(str) {
    return str.replace(/[^a-z]/g, '').split('').reverse().join('');
}

var result = reverseLetter("krishan");
console.log(`Should return: "nahsirk". Output is: ${result}`);

var result1 = reverseLetter("ultr53o?n");
console.log(`Should return: "nortlu". Output is: ${result1}`);

var result2 = reverseLetter("krish21an");
console.log(`Should return: "nahsirk". Output is: ${result2}`);
