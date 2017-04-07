/*
* created by Sestri4kina on 05.04.2017
*
* https://www.codewars.com/kata/multiplying-numbers-as-strings/train/javascript
*/
function concatArrays(arr1, arr2) {
  let arrMax = arr1.length >= arr2.length ? arr1 : arr2,
    arrMin = arr1.length < arr2.length ? arr1 : arr2,
    limitMin = arrMin.length,
    limitMax = arrMax.length,
    diff = 0;
  for (let i = 0; i < limitMin; i++) {
    let sumElements = arrMax[limitMax-1-i] + arrMin[limitMin-1-i] + diff;
    if ( sumElements > 9) {
      let end = sumElements.toString().length,
        firstDigits = +sumElements.toString().slice(0, end - 1),
        lastDigit = +sumElements.toString().slice(-1);
      arrMax[limitMax-1-i] = lastDigit;
      diff = firstDigits;
    }
    else {
      arrMax[limitMax-1-i] = sumElements;
      diff = 0;
    }
  }
  arrMax[limitMax -  limitMin - 1] += diff;
  return arrMax;
}

function multiplyArrayByNum (arr, num) {
  let limit = arr.length,
    diff = 0;
  for (let i = 0; i < limit; i++) {
    let product = arr[limit - i - 1] * num + diff;
    if (product > 9 && limit - i !== 1) {
      let end = product.toString().length,
        firstDigits = +product.toString().slice(0, end - 1),
        lastDigit = +product.toString().slice(1);
      arr[limit - i - 1] = lastDigit;
      diff = firstDigits;
    } else {
      arr[limit - i - 1] = product;
      diff = 0;
    }
  }
  return arr;
}

function checkForZeros(str) {
  let limit = str.length, result = str.slice(0);
  for (let i = 0; i < limit; i++) {
    if (str.charAt(i) === '0') {
      result = str.slice(i+1);
    } else break;
  }
  return result;
}

module.exports = function multiply(a, b) {
  if (a === '0' || b === '0') return '0';
  let A = checkForZeros(a),
    B = checkForZeros(b),
    num1 = A.length >= B.length ? A : B,
    num2 = A.length >= B.length ? B : A,
    arr1 = num1.toString().split('').map(x => +x),
    arr2 = num2.toString().split('').map(x => +x),
    limit = arr2.length,
    result = [];
    for (let i = 0; i < limit; i++) {
      let arrOfZeros = [];
      arrOfZeros[i-1] = 0;
      arrOfZeros.fill(0,0,i-1);//fill returns the changed array
      let interimArr = arr1.concat(arrOfZeros);//concat returns a new array
      result = concatArrays(result, multiplyArrayByNum(interimArr, arr2[limit-1-i]));
    }
    return result.join('');
};

/*
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

/* first solution does not work for big numbers
because numbers that do not lie within [smallestInt, biggestInt]
cannot be represented as Number objects where biggestInt = 9007199254740991,
smallestInt = -9007199254740991;
first solution:
let A = parseInt(a),
  B = parseInt(b),
  arrB = B.toString().split('').map(x => +x),
  limit = arrB.length,
  result = 0;
  for (let i = 0; i < limit; i++) {
    result += A * arrB[i] * Math.pow(10, limit-1-i);
  }
  return result.toString();
*/
