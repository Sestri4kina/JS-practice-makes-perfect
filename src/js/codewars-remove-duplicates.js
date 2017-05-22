/**
 * Created by Sestri4kina on 01.05.2017.
 *
 * https://www.codewars.com/kata/remove-duplication/train/javascript
 */
 module.exports = function removeDuplication(arr){
   let result = arr.filter((x, id, arr) => arr.indexOf(x) === arr.lastIndexOf(x));
   return result;
 };

/*
 let result = removeDuplication([1,2,3,2,4,6,2,6,7]);
 console.log(`Should return: [1, 3, 4, 7]. Output is: ${result}
 `);

 let result1 = removeDuplication([1,2,1,2,1,1,2,2]);
 console.log(`Should return: []. Output is: ${result1}
 `);
*/
