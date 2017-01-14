/**
 * Created by Sestri4kina on 14.01.2017.
 *
 * Complete the method/function so that it converts dash/underscore delimited words into camel casing.
 * The first word within the output should be capitalized only if the original word was capitalized.
 */

function toCamelCase(str){
    var data = str.split('').map((x, index, arr) => {
        return arr[index -1] === '_' || arr[index -1] === '-' ? x.toUpperCase() : x})
        .join('');
    return data.replace(/[-_]/g, '');
}

var result = toCamelCase("the-stealth-warrior") ;
console.log(`Should return: "theStealthWarrior". Output is: ${result}`);

var result1 = toCamelCase("The_Stealth_Warrior");
console.log(`Should return:  "TheStealthWarrior". Output is: ${result1}`);

/*
more elegant solution:
 var regExp=/[-_]\w/ig;
 return str.replace(regExp,function(match){
    return match.charAt(1).toUpperCase();
 });
 */
