/**
 * Created by Sestri4kina on 11.03.2017.
 *
 * https://www.codewars.com/kata/is-n-divisible-by-dot-dot-dot/train/javascript
 */
function isDivisible(){
    let args = [...arguments],
        n = args.slice(0,1),
        divisors = args.slice(1);
    return divisors.map( x => n % x === 0 )
        .every( x => x === true );
}

var result = isDivisible(3,3,4);
console.log(`Should return: false. Output is: ${result}
`);

var result3 = isDivisible(12,3,4);
console.log(`Should return: true. Output is: ${result3}
`);

var result1 = isDivisible(8,3,4,2,5);
console.log(`Should return: false. Output is: ${result1}
`);