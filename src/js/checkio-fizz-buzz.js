/**
 * Created by Sestri4kina on 18.12.2016.
 *
 * You should write a function that will receive a positive integer and return:
 * "Fizz Buzz" if the number is divisible by 3 and by 5;
 * "Fizz" if the number is divisible by 3;
 * "Buzz" if the number is divisible by 5;
 *  The number as a string for other cases.
 *  Input: A number as an integer.
 *  Output: The answer as a string.
 *
 */

module.exports = function fizzBuzz(number){
    return (number % 15 === 0) ? "Fizz Buzz" :
                  (number % 3 == 0) ? "Fizz" :
                      (number % 5 == 0) ? "Buzz" :
                          number.toString();
}

/*
var result = fizzBuzz(15);
console.log(`Should return: "Fizz Buzz". Output is: ${result}`);

var result1 = fizzBuzz(6);
console.log(`Should return: "Fizz". Output is: ${result1}`);

var result2 = fizzBuzz(7);
console.log(`Should return: "7". Output is: ${result2}`);
*/