/**
 * Created by Sestri4kina on 21.12.2016.
 *
 * You are given a text, which contains different english letters
 * and punctuation symbols. You should find the most frequent letter in the text.
 * The letter returned must be in lower case.
 * While checking for the most wanted letter, casing does not matter,
 * so for the purpose of your search, "A" == "a".
 * Make sure you do not count punctuation symbols, digits and whitespaces, only letters.
 * If you have two or more letters with the same frequency,
 * then return the letter which comes first in the latin alphabet.
 * For example -- "one" contains "o", "n", "e" only once for each, thus we choose "e".
 * Input: A text for analysis as a string.
 * Output: The most frequent letter in lower case as a string.
 *
 */

function mostWanted(data){
    var newData = data.toLowerCase().match(/[a-z]/gi);
    //2d array
    var frequency = [];
    for(var i = 0; i < newData.length; i++){
        var count = 0;
        for(var j = 0; j < newData.length; j++){
            if ( newData[i] == newData[j] && newData[i] != newData[i-1]){
                count++;
            }
        }
        //each array's element contains a letter and its frequency
        var element = [newData[i], count];
        frequency.push(element);
    }
    //sort frequency array by letter's frequencies
    var intermediate = frequency.filter(x => x[1] != '0').sort((a,b) => a[1]-b[1]);
    //create new array with equal highest frequencies and sort it by letters
    var result = intermediate.filter((x,index, arr) => { return x[1] == (arr[arr.length -1])[1] }).sort();
    //output the first(alphabetic order) letter with the highest frequency
    return result[0][0];
}

var result = mostWanted("Hello World!");
console.log(`Should return: 'l'. Output is: ${result}`);

var result1 = mostWanted("One");
console.log(`Should return: 'e'. Output is: ${result1}`);

var result2 = mostWanted("AAaooo!!!!");
console.log(`Should return: 'a'. Output is: ${result2}`);

var result3 = mostWanted("fn;lsfndasl;f naslkdnlkasdnfslahwemwjkrjkl;zcmk;lzcdkcslksdkseewme,");
console.log(`Should return: 'k'. Output is: ${result3}`);
