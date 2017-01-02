/**
 * Created by Sestri4kina on 02.01.2017.
 */
function shiftedDiff(str1, str2){
    var test = 0;
    for (var i = 0; i < str1.length; i++){
        if (str2.indexOf(str1[i]) === -1) {return -1;} else {
            (str2.indexOf(str1[i - 1]) > str2.indexOf(str1[i])) ? test++ : test;
        }
    }
    return str1 === str2 ? 0 :
        str1.length !== str2.length ? -1 :
            test === 1 ? str2.indexOf(str1[0]) : -1;
}

/*
more elegant solution
 if (first.length != second.length) return -1
 return (second + second).indexOf(first)
 */

var result = shiftedDiff("eecoff","coffee");
console.log(`Should return : 4. Output is: ${result}`);

var result1 = shiftedDiff("hoop","pooh");
console.log(`Should return : -1 (not a valid rotation). Output is: ${result1}`);

var result2 = shiftedDiff("Moose","moose");
console.log(`Should return : -1. Output is: ${result2}`);

var result3 = shiftedDiff("   "," ");
console.log(`Should return : -1. Output is: ${result3}`);