/*
* created by Sestri4kina on 26.03.2017
*
* Write an algorithm such that if an element in an MxN matrix is 0,
* its entire row and column is set to 0.
*/
function setToZero(arr) {
  let newArr = [],
    M = arr.length,
    N = arr[0].length;
  //copy arr's elements to newArr;
  // if to use <newArr = arr.slice(0)> newArr's elements will keep reference to arr's elements
  for (let i = 0; i < M; i++) {
    newArr.push(arr[i].slice(0));
  }
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[i][j] === 0) {
        newArr[i].fill(0);
        for (let k = 0; k < M; k++) newArr[k][j] = 0;
      }
    }
  }
  return newArr;
}

let result = setToZero([[1, 2, 0],[3, 4, 9]]);
console.log(`Should return: '[[0, 0, 0], [3, 4, 0]]'. Output is: ${result}`);

let result1 = setToZero([[1,2,3,2], [4,5,0,6], [7,8,7,9]]);
console.log(`Should return: '[[1,2,0,2], [0,0,0,0], [7,8,0,9]]'. Output is: ${result1}`);
