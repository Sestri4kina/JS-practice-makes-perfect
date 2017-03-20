/*
* created by Sestri4kina on 20.03.2017
*
* Cracking the coding interview 1.1
* Implement an algorithm to determine if a string has all unique characters.
* What if you can not use additional data structures?
*/
function uniqueSymbols(str) {
  return str.split('').every((x, index, arr) => {return index === arr.lastIndexOf(x);});
}

function uniqueSymbols2(str) { //no additional data structures
  if (str.length === 0) return true;
  let result = 0,
    limit = str.length;
  for (let i = 0; i < limit; i++) {
    let el = str.charAt(i);
    if (i !== str.lastIndexOf(el)) break;
    else result++;
  }
  return result === limit ? true : false;
}


let result = uniqueSymbols('ababababbbb');
console.log(`Should return: false. Output is: ${result}`);

let result1 = uniqueSymbols('1234568abcdef');
console.log(`Should return: true. Output is: ${result1}`);

let result2 = uniqueSymbols('abcdefghh');
console.log(`Should return: false. Output is: ${result2}`);

let result3 = uniqueSymbols('');
console.log(`Should return: true. Output is: ${result3}`);

let result4 = uniqueSymbols2('ababababbbb');
console.log(`Should return: false. Output is: ${result4}`);

let result5 = uniqueSymbols2('1234568abcdef');
console.log(`Should return: true. Output is: ${result5}`);

let result6 = uniqueSymbols2('abcdefkghhk');
console.log(`Should return: false. Output is: ${result6}`);

let result7 = uniqueSymbols2('');
console.log(`Should return: true. Output is: ${result7}`);
