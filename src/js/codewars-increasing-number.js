/**
 * Created by Sestri4kina on 04.05.2017.
 *
 * https://www.codewars.com/kata/simple-fun-number-240-increasing-number/train/javascript
 */
 function increasingNumber(x, n) {
   let result = x;
   for (let i = 1; i <= n; i++) {
     while (result % i !== 0) {
       result++;
     }
   }
   return result;
 }

 let result = increasingNumber(9, 5);
 console.log(`Output should be: 15. Output is: ${result}.
   `);

let result1 = increasingNumber(1, 100);
console.log(`Output should be: 100. Output is: ${result1}.
   `);
