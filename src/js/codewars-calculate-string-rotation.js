/**
 * Created by Sestri4kina on 02.01.2017.
 */
function shiftedDiff(str1, str2){
    return str1 === str2 ? 0 :
        str1.length !== str2.length ? -1 :
            str2.search(str1.substring(2));
}

var result = shiftedDiff("eecoff","coffee");
console.log(`Should return : 4. Output is: ${result}`);

var result1 = shiftedDiff("hoop","pooh");
console.log(`Should return : -1 (not a valid rotation). Output is: ${result1}`);

var result2 = shiftedDiff("Moose","moose");
console.log(`Should return : -1. Output is: ${result2}`);