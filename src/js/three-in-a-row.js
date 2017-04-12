/**
 * Created by Sestri4kina on 12.04.2017.
 */

 function threeInARow(arr) {
   let result = 0,
       limit = arr.length,
       midArr = [],
       limit2 = Math.pow(limit, 2);
   for (let i = 0; i < limit; i++) {
     midArr = midArr.concat(arr[i]);
   }
   //check rows
   for (let i = 0; i < limit2; i+=3) {
     let testRow = midArr.slice(i, i+3).every(x => x === midArr[i])
     if (testRow) result += 3;
   }
   //check columns
   for (let i = 0; i < limit; i++) {
     let testCol = 0;
     for (let j = 0; j < limit2; j+=3) {
       if (midArr[i] === midArr[i+j]) testCol++;
     }
     if (testCol === limit) result += 5;
   }
   //check left diagonal
   let testLeftDiag = 0;
   for (let i = 0; i < limit2; i += limit+1) {
     if (midArr[0] !== midArr[i]) break;
     else testLeftDiag++;
   }
   if (testLeftDiag === limit) result += 10;
   //check right diagonal
   let testRightDiag = 0;
   for (let i = limit-1; i < limit2 + 1 - limit; i += limit-1) {
     if (midArr[limit-1] !== midArr[i]) break;
     else testRightDiag++;
   }
   if (testRightDiag === limit) result += 10;

   return result;
 }

 let result = threeInARow([[1,1,1], [0,1,3], [1,1,5]]);
 console.log(`Should return: 18. Output is: ${result}`);

 let result1 = threeInARow([[2,0,0], [12,2,4], [0,1,2]]);
 console.log(`Should return: 10. Output is: ${result1}`);

 let result2 = threeInARow([[0,0,0], [0,0,0], [0,0,0]]);
 console.log(`Should return: 44. Output is: ${result2}`);
