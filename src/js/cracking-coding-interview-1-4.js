/*
* created by Sestri4kina on 23.03.2017
*
* Write a method to decide if two strings are anagrams or not.
* An anagram of a string is another string that contains same characters,
* only the order of characters can be different.
*/

//converting into arrays
function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;
  return str1.split('').sort().join('') ===
              str2.split('').sort().join('');
}

//working only with string methods
function areAnagrams2(str1, str2) {
  if (str1.length !== str2.length) return false;
  let limit = str1.length;
  for (let i = 0; i < limit; i++) {
    let el = str1.charAt(i);
    if (str2.indexOf(el) === -1) return false;
    else continue;
  }
  return true;
}

// tests for first function
let result = areAnagrams('abcd', 'brdc');
console.log(`Should return: false. Output is: ${result}`);

let result1 = areAnagrams('silent', 'listen');
console.log(`Should return: true. Output is: ${result1}`);

let result2 = areAnagrams('rose', 'sore');
console.log(`Should return: true. Output is: ${result1}`);

// tests for second function
let result3 = areAnagrams2('abcd', 'brdc');
console.log(`Should return: false. Output is: ${result3}`);

let result4 = areAnagrams2('silent', 'listen');
console.log(`Should return: true. Output is: ${result4}`);

let result5 = areAnagrams2('rose', 'sore');
console.log(`Should return: true. Output is: ${result5}`);
