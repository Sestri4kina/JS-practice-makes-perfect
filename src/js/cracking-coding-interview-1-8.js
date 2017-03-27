/*
* created by Sestri4kina on 27.03.2017
*
* Assume you have a method isSubstring which checks if one word is a substring
* of another. Given two strings, s1 and s2, write code to check if s2 is a
* rotation of s1 using only one call to isSubstring
* (i.e., “waterbottle” is a rotation of “erbottlewat”).
*/
String.prototype.isSubstring = function(str) {
  return str.search(this) !== -1;
}

function checkForRotation(str1, str2) {
  return str2.isSubstring(str1+str1);
}

let result = checkForRotation("waterbottle", "erbottlewat");
console.log(`Should return: true. Output is: ${result}`);

let result1 = checkForRotation("rose","sero");
console.log(`Should return: true. Output is: ${result1}`);

let result2 = checkForRotation("one", "oen");
console.log(`Should return: false. Output is: ${result2}`);
