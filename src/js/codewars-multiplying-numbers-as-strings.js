/*
* created by Sestri4kina on 05.04.2017
*
* https://www.codewars.com/kata/multiplying-numbers-as-strings/train/javascript
*/
function multiply(a, b) {
const A = parseInt(a).toString(),
  B = parseInt(b).toString();
}

let result = multiply("2", "3");
console.log(`Result is: '6'. Output is: ${result === '6'}`);

let result1 = multiply("0000001", "3");
console.log(`Result is: '3'. Output is: ${result1 === '3'}`);

let result2 = multiply("1009", "03");
console.log(`Result is: '3027'. Output is: ${result2 === '3027'}`);

let result3 = multiply("98765", "56894");
console.log(`Result is:  "5619135910".
Output is: ${result3 === "5619135910"}`);

let result4 = multiply("1020303004875647366210", "2774537626200857473632627613");
console.log(`Result is: "2830869077153280552556547081187254342445169156730".
Output is: ${result4 === "2830869077153280552556547081187254342445169156730"}`);

let result5 = multiply("9007199254740991", "9007199254740991");
console.log(`Result is: "81129638414606663681390495662081".
Output is: ${result5 === "81129638414606663681390495662081"}`);
