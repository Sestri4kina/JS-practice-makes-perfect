/*
* created by Sestri4kina on 30.03.2017
*
* https://www.codewars.com/kata/product-of-two-squares/train/javascript
*/
module.exports = function squareProduct(n) {
  let arr = [],
    num = Math.sqrt(n),
    limit = Math.sqrt(num);
  for (let i = 1; i <= limit; i++) {
    if (num % i === 0) arr.push([i, num/i]);
  }
  return arr;
};

/*
let result = squareProduct(16);
console.log(`Should return: [[1,4],[2,2]]. Case#1: ${JSON.stringify(result)}`);

let result1 = squareProduct(256);
console.log(`Should return: [[2,8],[4,4],[1,16]]. Case#2: ${JSON.stringify(result1)}`);

let result2 = squareProduct(2);
console.log(`Should return: []. Case#3: ${JSON.stringify(result2codewars)}`);
*/
