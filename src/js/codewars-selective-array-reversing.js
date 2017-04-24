/**
 * Created by Sestri4kina on 19.04.2017.
 *
 * https://www.codewars.com/kata/selective-array-reversing/train/javascript
 */

 module.exports = function selReverse(inputArr, len) {
  if (len === 0) return inputArr;
  let arr = [], limit = inputArr.length;
  for (var i = 0 ; i < limit; i++) {
    let ind = Math.floor(i/len), j = i % len;
    arr[(ind+1)*len - 1 - j] = inputArr[i];
  }
  return arr.filter(x => x !== null);
};
/*
 let result = selReverse([2,4,6,8,10,12,14,16], 3);
 console.log(`Should return: [6,4,2, 12,10,8, 16,14]. Output is: ${result}`);

 let result1 = selReverse([1,2,3,4,5,6], 2);
 console.log(`Should return: [2,1, 4,3, 6,5]. Output is: ${result1}`);

 let result2 = selReverse([1,2,3,4,5,6], 0);
 console.log(`Should return: [1,2,3,4,5,6]. Output is: ${result2}`);

/*
first solution:
function selReverse(inputArr, len) {
  let limit = inputArr.length,
    arr = [];
  for (let i = 0; i < limit; i += len) {
    let interimArr = inputArr.slice(i, i+len).reverse();
    arr = arr.concat( interimArr );
  }
  return arr;
}

custom reverse function:
function reverseArr(arr) {
  for (var i = arr.length - 1, revArr = []; i >= 0; revArr.push(arr[i--])) {}
  return revArr;
}
*/
