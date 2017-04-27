/**
 * Created by Sestri4kina on 27.04.2017.
 *
 * https://www.codewars.com/kata/flatten-and-sort-an-array/train/javascript
 */
 function flattenAndSort(arr) {
   let newArr = [], limit = arr.length;
   for (let i = 0; i < limit; i++) {
     newArr = newArr.concat(arr[i]);
   }
   return newArr.sort((a,b) => a-b);
 }

 let result = flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]);
 console.log(`Should return: [1, 2, 3, 4, 5, 6, 7, 8, 9]. Output is: ${result}
 `);

 let result1 = flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]);
 console.log(`Should return: [1, 2, 3, 4, 5, 6, 100]. Output is: ${result1}
 `);
