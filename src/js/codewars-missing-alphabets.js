/**
 * Created by Sestri4kina on 23.04.2017.
 *
 * https://www.codewars.com/kata/simple-fun-number-135-missing-alphabets/train/javascript
 */
 module.exports = function missingAlphabets(s) {
   let alphabet = 'abcdefghijklmnopqrstuvwxyz',
     arr = [], limit = alphabet.length,
     limit2 = s.length, maxOccur = 0,
     result = '';
   for (let i = 0; i < limit; i++) {
     let el = alphabet.charAt(i);
     arr.push([el, 0]);
   }
   for (let i = 0; i < limit2; i++) {
     let ind = s.charCodeAt(i);
     arr[ind - 97][1] += 1;
     if (arr[ind - 97][1] > maxOccur) maxOccur = arr[ind - 97][1];
   }
   for (let i = 0; i < limit; i++) {
     result += arr[i][0].repeat(maxOccur - arr[i][1]);
   }
   return result;
 };
/*
 let result = missingAlphabets("codewars");
 console.log(`Should return: "bfghijklmnpqtuvxyz". Output is: ${result}
 `);

 let result1 = missingAlphabets("abbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxy");
 console.log(`Should return: "ayzz". Output is: ${result1}
 `);

 let result2 = missingAlphabets("abcdefghijklmnopqrstuvwxy");
 console.log(`Should return: "z". Output is: ${result2}
 `);
*/
