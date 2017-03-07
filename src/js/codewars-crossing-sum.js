/*
* Created by Sestri4kina on 05.03.2017
*
* https://www.codewars.com/kata/simple-fun-number-61-crossing-sum/train/javascript
*/

function crossingSum(matrix, a, b) {
  let rowSum = matrix[a].reduce((x,y) => { return x + y }),
      colSum = matrix.reduce((total, cur) => {return total + cur[b] }, 0);
  return rowSum + colSum - matrix[a][b];
}

var result = crossingSum([[1,1,1,1],  [2,2,2,2],  [3,3,3,3]],1, 3);
console.log(`Should return: 12. Output is: ${result}`);

var result1 = crossingSum([[1,1],  [3,3],  [1,1],  [2,2]],3,0);
console.log(`Should return: 9. Output is: ${result1}`);

var result2 = crossingSum([[100]], 0, 0));
console.log(`Should return: 100. Output is: ${result2}`);
