/**
 * Created by Sestri4kina on 17.12.2016.
 *
 * You are given a chunk of text.
 * Gather all capital letters in one word in the order that they appear in the text.
 * For example: text = "How are you? Eh, ok. Low or Lower? Ohhh.",
 * if we collect all of the capital letters, we get the message "HELLO".
 * Input: A text as a string (unicode).
 * Output: The secret message as a string or an empty string.
 * Precondition: 0 < len(text) ≤ 1000
 * all(ch in string.printable for ch in text)
 *
 */

module.exports = function findMessage(data){
    var message = '';
    for (var i = 0; i < data.length; i++){
        var character = data.charAt(i);
        if ( character === character.toUpperCase() && character.match(/[a-z]/i)){
            message += character;
        }
    }
    return message.length > 0 ? message : '';
}
/*
var result = findMessage("How are you? Eh, ok. Low or Lower? Ohhh.");
console.log(`Should return: HELLO. Output is: ${result}`);

var result1 = findMessage("hello world!");
console.log(`Should return: ''. Output is: ${result1}`);
*/