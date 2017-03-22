/*
* created by Sestri4kina on 21.03.2017
*
* Write code to reverse a C-Style String.
* (C-String means that “abcd” is represented as five characters, including the null character.)
*/
function reverseString(str) {
  return str.split('').slice().reverse().join('');
}

function reverseString2(str) {
  let newStr = '',
    limit = str.length;
  for (let i = 0; i <= limit; i++) {
    newStr += str.charAt(limit - i);
  }
  return newStr;
}

let result = reverseString('a&?bcd 123');
console.log(`Should return: '321 dcb?&a'. Output is: ${result}`);

let result1 = reverseString2('a&?bcd 123');
console.log(`Should return: '321 dcb?&a'. Output is: ${result1}`);

let result2 = reverseString('');
let result3 = reverseString2('');
console.log(`Should return empty String: ''. Output is: '${result2}' and '${result3}'`);
