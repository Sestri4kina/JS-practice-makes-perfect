/**
 * Created by Sestri4kina on 27.01.2017.
 */
//time test - around 600ms
function oddity(num){
    //special case
    if (num === 1){ return 'odd' }
    //build an array of prime factors
    var factors = [],
        limit = Math.sqrt(num),
        tmp = num;
    for (var i = 2; i <= limit; i++){
        while (tmp % i === 0){
            factors.push(i);
            tmp = tmp / i;
        }
    }
    //check if a number is prime
    if (factors.length === 0) return 'even';
    //check if a number has a prime factor that's bigger than sqrt(num)
    var test = factors.reduce((total, curr) => {return total*curr}, 1);
    if (test !== num){ factors.push(num/test); }

    //map factors's elements to its indices
    var indexFactors = factors.map((x, index, arr) => {return arr.indexOf(x)});
    //filter indexFactors to get an array of unique elements
    var frequency = indexFactors.filter((x, index, arr) => {return arr.indexOf(x) == index});
    //count an amount of different divisors
    var result = frequency.map((x) => {return indexFactors.lastIndexOf(x) - indexFactors.indexOf(x) + 1})
        .reduce( (total, curr) => {return total*(curr + 1)}, 1);

    return result % 2 === 0 ? 'even' : 'odd';

}

var result = oddity(4);
console.log(`Should return: 'odd'. Output is: ${result}
`);

var result3 = oddity(9);
console.log(`Should return: 'odd'. Output is: ${result3}
`);

var result1 = oddity(8468275);
console.log(`Should return: 'even'. Output is: ${result1}
`);

var result2 = oddity(61804);
console.log(`Should return: 'even'. Output is: ${result2}
`);
/*
most elegant solution:
 return Math.sqrt(n)%1 ? "even" : "odd";

my other variants:
1. fails time test - 12300ms on average
 if (num === 1){ return 'odd' }
 var factors = 2;
 if (num % 2 != 0){
 for (var i = 3; i <= num/2; i+=2){
 if(num % i === 0){ factors+=1 }
 }
 } else {
 for (var i = 2; i <= num/2; i+=1){
 if(num % i === 0){ factors+=1 }
 }
 }
 return factors % 2 === 0 ? 'even' : 'odd';

 2. fails 7-digits numbers and bigger - invalid array length (length > pow(2,32))
 if (num === 1){ return 'odd' }
 if (num === 2){ return 'even' }
 var limit = Math.round(num/2)+1;
 var total = [...Array(limit).keys()].slice(1)
 .map( (x) => { return (num % x === 0) ? 1 : 0; })
 .reduce((prev, curr) => {return prev + curr; });
 return total % 2 !== 0 ? 'even' : 'odd';
 */