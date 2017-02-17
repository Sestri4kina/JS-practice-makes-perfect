/**
 * Created by Sestri4kina on 15.02.2017.
 *
 *https://www.codewars.com/kata/longest-palindrome/javascript
 */

function findEvenPal(s){
    var initialArr = s.split(''),
        evenPal = [];
    initialArr.forEach(function(x, index, arr){
        if (x == arr[index+1] && x != arr[index-1]) evenPal.push(index)});
    return evenPal;
}

function evenPalLength(s, index) {
    var initialArr = s.split(''),
        palLength = 2;
    for (var i = 1, limit = 0.5 * initialArr.length; i < limit; i++) {
        if (initialArr[index - i] === initialArr[index + i + 1]){
            palLength += 2;}
        else if ((initialArr[index - i] !== initialArr[index + i + 1]) && (initialArr[index] !== initialArr[index + i + 1])){break;}
        else if (initialArr[index] === initialArr[index + i + 1]) {
            palLength += 1;}
        else if (initialArr[index] !== initialArr[index + i + 1]) {break;}
    }
    return palLength;
}

function allEvenPalsLength(s) {
    var nonFilteredStartPoints = findEvenPal(s),
        startPoints = nonFilteredStartPoints.filter((x, ind, arr) => {return (x+1 != arr[ind+1] || x-1 != arr[ind-1]);}),
        lengthArr = [];

    for (var i = 0; i < startPoints.length; i++){
        lengthArr.push(evenPalLength(s, startPoints[i]));
    }
    return lengthArr;
}

function findOddPal(s){
    var initialArr = s.split(''),
        oddPal = [];
    initialArr.forEach(function(x, index, arr){
        if (x != arr[index+1] && x == arr[index+2]) oddPal.push(index)});
    return oddPal;
}

function oddPalLength(s, index) {
    var initialArr = s.split(''),
        palLength = 3;
    for (var i = 1, limit = 0.5 * initialArr.length; i < limit; i++) {
        if (initialArr[index - i] === initialArr[index + i + 2]) palLength += 2;
        else if (initialArr[index - i] !== initialArr[index + i + 2]) break;
    }
    return palLength;
}

function allOddPalsLength(s) {
    var startPoints = findOddPal(s),
        lengthArr = [];
    for (var i = 0; i < startPoints.length; i++){
        lengthArr.push(oddPalLength(s, startPoints[i]));
    }
    return lengthArr;
}

module.exports = function longestPalindrome(s){
    if (s.length == 0) return 0;
    if (s.length == 1) return 1;
    var oddPals =  allOddPalsLength(s),
        evenPals = allEvenPalsLength(s),
        result = oddPals.concat(evenPals);
    //console.log(findOddPal(s));
    //console.log(allOddPalsLength(s));
    //console.log(findEvenPal(s));
    //console.log(allEvenPalsLength(s));
    return result.reduce((a,b) => {return a > b ? a : b});
};

/*
var result = longestPalindrome("a");
console.log(`Should return: 1. Output is: ${result}
`);

var result1 = longestPalindrome("baablkj12345432133d");
console.log(`Should return: 9. Output is: ${result1}
`);

var result2 = longestPalindrome("baabcd");
console.log(`Should return: 4. Output is: ${result2}
`);

var result3 = longestPalindrome("baaaaacxt");
console.log(`Should return: 5. Output is: ${result3}
`);

var result4 = longestPalindrome("Fourscoreandsevenyearsagoourfaathersbroughtforthonthiscontainentanewnationconceivedinz" +
    "Libertyand dedicated to the proposition that all men are created equal Now we are engaged in agreaht " +
    "civil war testing whether that naptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbat" +
    "tlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesth" +
    "atthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconse" +
    "cratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddo" +
    "rdetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforustheli" +
    "vingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustob" +
    "eherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhi" +
    "chtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationun" +
    "sderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth");
console.log(`Should return: 7. Output is: ${result4}
`);
/*
 longestPalindrome=function(s){
 var l = 0;
 for (var i = 0; i<s.length; i++)
 for(var j = i; j<=s.length; j++)
 if(s.substring(i,j) === s.substring(i,j).split('').reverse().join('') && s.substring(i,j).length > l)
 l = s.substring(i,j).length;

 return l;
 }

 longestPalindrome=function(s){
 //your code here
 let isPalindrome = str => str.split('').reverse().join('') === str;

 for(let i = s.length; i >= 0; i--) {
 for(let j = s.length - i; j >= 0; j--){
 if( isPalindrome( s.substr(j, i) ) ){
 return i;
 }
 }
 }
 }
 */