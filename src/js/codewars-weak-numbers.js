/*
* created by Sestri4kina on 19.03.2017
*
* https://www.codewars.com/kata/simple-fun-number-26-weak-numbers/train/javascript
*/
function amountOfDivisors(n) {
    if (n === 1) return 1;
    let amount = 2;
    for (let i = 2; i <= n/2; i++) {
        if (n / i % 1 === 0) { amount++; }
    }
    return amount;
}

function amountOfElementsGreaterThanCurrent(arrInput) {
 return arrInput.map((x, index, arr) => {
            let elArr = arr.slice(0, index),
                counter = 0;
            if (elArr.length === 0) return counter;
            elArr.forEach(y => {if (y > x) counter++;});
            return counter;
         });
}

module.exports = function weakNumbers(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
      arr.push( amountOfDivisors(i) );
  }
  let weakness = amountOfElementsGreaterThanCurrent(arr),
      maxWeakness = weakness.reduce((a,b) => {return a>b ? a : b;}),
      amountMaxWeakness = weakness.length -
      weakness.slice().sort((a,b) => {return a-b;}).indexOf(maxWeakness);
  return [maxWeakness, amountMaxWeakness];
};

/*
let result = weakNumbers(500);
console.log(`Should return: [403,1]. Output is: ${result}`);

let result1 = weakNumbers(9);
console.log(`Should return: [2,2]. Output is: ${result1}`);

let result2 = weakNumbers(7);
console.log(`Should return: [2,1]. Output is: ${result2}`);
*/
