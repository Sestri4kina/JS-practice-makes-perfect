/**
 * Created by Sestri4kina on 29.01.2017.
 *
 * Find a non-negative integer in the interval from a to b, that
 * have the maximum number of divisors.
 * divNum(15,30) => 24
 * divNum(1,2) => 2
 * divNum(0,0) => 0
 * divNum(52,156) => 120
 */
function amountDivisors(num){
    if (num === 1) return 1;
    var countDivisors = 2;
    for (var i = 2, limit = num/2; i <= limit; i++){
        if(num % i === 0){countDivisors++}
    }
    return countDivisors;
}

function divNum(start, end){
    if (end < start) return 'Error';
    
    var maxDiv = amountDivisors(start),
        num = start;
    for (var i = start; i <= end; i++ ){
        if (amountDivisors(i) > maxDiv){
            maxDiv = amountDivisors(i);
            num = i;
        }
    }
    return num;
}

var result = divNum(15,30);
console.log(`Should return: 24. Output is: ${result}
`);

var result1 = divNum(52,156);
console.log(`Should return: 120. Output is: ${result1}
`);

var result2 = divNum(1,2);
console.log(`Should return: 2. Output is: ${result2}
`);

var result3 = divNum(52,50);
console.log(`Should return: 'Error'. Output is: ${result3}
`);
/*
 var maxDiv = amountDivisors(start);
 for (var i = start; i <= end; i++ ){
 if (amountDivisors(i) > maxDiv){
 maxDiv = amountDivisors(i);
 }
 }
 return maxDiv;


 /*
 var newArr = [...Array(start+1).keys()].map((x) => { return  x+start; });
 var divArr = newArr.map(x => {return amountDivisors(x)});

 */