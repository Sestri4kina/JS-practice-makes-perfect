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
    var newData = data.toLowerCase().match(/[a-z]/gi).sort();
    console.log(newData);
    var frequency = [];
    for(var i = 0; i < newData.length; i++){
        var count = 0;
        for(var j = 0; j < newData.length; j++){
            if ( newData[i] == newData[j] && newData[i] != newData[i-1]){
                count++;
            }
        }
        frequency.push(count);
    }

    return frequency.filter(x => x != '0').sort((a,b) => a-b);
}

var result = mostWanted("Hello World!");
console.log(`Should return: 'l'. Output is: ${result}`);

var result1 = mostWanted("One");
console.log(`Should return: 'e'. Output is: ${result1}`);
