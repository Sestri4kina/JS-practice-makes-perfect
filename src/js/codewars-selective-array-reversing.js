/**
 * Created by Sestri4kina on 19.04.2017.
 *
 * https://www.codewars.com/kata/selective-array-reversing/train/javascript
 */
 function selReverse(inputArr, len) {
   let limit = inputArr.length,
     arr = [];
   for (let i = 0; i < limit; i += len) {
     let interimArr = inputArr.slice(i, i+len).reverse();
     arr = arr.concat( interimArr );
   }
   return arr;
 }

 let result = selReverse([2,4,6,8,10,12,14,16], 3);
 console.log(`Should return: [6,4,2, 12,10,8, 16,14]. Output is: ${result}`);

 let result1 = selReverse([1,2,3,4,5,6], 2);
 console.log(`Should return: [2,1, 4,3, 6,5]. Output is: ${result1}`);
