/*
* created by Sestri4kina on 2*.03.2017
*
* Write a method to replace all spaces in a string with ‘%20’.
*/
function replaceSpaces(str) {
  return str.replace(/\s/g, '%20');
}

let result = replaceSpaces('Albert Einstein');
console.log(`Should return: 'Albert%20Einstein'. Output is: ${result}`);

let result1 = replaceSpaces('Ada Lovelace first world programmer');
console.log(`Should return: 'Ada%20Lovelace%20first%20world%20programmer'. Output is: ${result1}`);
