/*
* created by Sestri4kina on 23.03.2017
*
* Design an algorithm and write code to remove the duplicate characters in a string
* without using any additional buffer. NOTE: One or two additional variables are fine.
* An extra copy of the array is not.
* FOLLOW UP
* Write the test cases for this method.
*/
function removeDuplicates(str) {
  let noDuplicates = '',
    limit = str.length;
  for (let i = 0; i < limit; i++) {
    let el = str.charAt(i);
    if (str.indexOf(el) === i) noDuplicates += el;
  }
  return noDuplicates;
}

let result = removeDuplicates('ababababbbb');
console.log(`Should return: 'ab'. Output is: ${result}`);

let result1 = removeDuplicates('1343abcb?f?');
console.log(`Should return: '134abc?f'. Output is: ${result1}`);
