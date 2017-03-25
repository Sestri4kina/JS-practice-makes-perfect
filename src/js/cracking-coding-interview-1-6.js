/*
* created by Sestri4kina on 25.03.2017
*
* Given an image represented by an NxN matrix, where each pixel in the image
* is 4 bytes, write a method to rotate the image by 90 degrees.
* Can you do this in place?
*/
function rotateBy90DegreesCounterclockwise(arr) {
  let newArr = [],
    N = arr.length;
  for (let i = 0; i < N; i++) {
    newArr[i] = [];
    for (let j = 0; j < N; j++) {
      newArr[i].push( arr[j][N-1-i] );
    }
  }
  return newArr;
}

function rotateBy90DegreesClockwise(arr) {
  let newArr = [],
    N = arr.length;
  for (let i = 0; i < N; i++) {
    newArr[i] = [];
    for (let j = 0; j < N; j++) {
      newArr[i].push( arr[N-1-j][i] );
    }
  }
  return newArr;
}

//rotate by 90 degrees counterclockwise
let result = rotateBy90DegreesCounterclockwise([[1, 2],[3, 4]]);
console.log(`Should return: '[[2, 4], [1, 3]]'. Output is: ${result}`);

let result1 = rotateBy90DegreesCounterclockwise([[1,2,3], [4,5,6], [7,8,9]]);
console.log(`Should return: '[[3,6,9], [2,5,8], [1,4,7]]'. Output is: ${result1}`);

//rotate by 90 degrees clockwise
let result2 = rotateBy90DegreesClockwise([[1, 2],[3, 4]]);
console.log(`Should return: '[[3, 1], [4, 2]]'. Output is: ${result2}`);

let result3 = rotateBy90DegreesClockwise([[1,2,3], [4,5,6], [7,8,9]]);
console.log(`Should return: '[[7,4,1], [8,5,2], [9,6,3]]'. Output is: ${result3}`);
