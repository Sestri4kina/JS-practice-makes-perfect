/**
 * Created by Sestri4kina on 01.01.2017.
 *
 * iqTest("2 4 7 8 10") => 3
 * Third number is odd, while the rest of the numbers are even
 * iqTest("1 2 1 1") => 2
 * Second number is even, while the rest of the numbers are odd
 */

module.exports = function iqTest(data){
    var arr = data.split(' ');
    var evenData = arr.filter((x) =>{return x % 2 === 0});

    return evenData.length === 1 ?
    arr.findIndex((x) => {return x % 2 ===0}) + 1 :
    arr.findIndex((x) => {return x % 2 !==0}) + 1;
};

/*
var result = iqTest("2 4 7 8 10");
console.log(`Should return : 3. Output is: ${result}`);

var result1 = iqTest("1 2 1 1");
console.log(`Should return : 2. Output is: ${result1}`);
*/