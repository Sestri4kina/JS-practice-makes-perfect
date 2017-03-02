/**
 * Created by Sestri4kina on 01.03.2017.
 *
 * https://www.codewars.com/kata/character-limits-how-long-is-your-piece-of-string/train/javascript
 */
module.exports = function charCheck(text, max, spaces){
    let modifiedText = spaces === true ?
        text : text.replace(/\s/g, '');

    return [modifiedText.length <= max, modifiedText.slice(0, max)];
};

/*
var result = charCheck("I am applying for the role of Base Manager on Titan.", 60, true);
console.log(`Should return: [true, "I am applying for the role of Base Manager on Titan."]. 
Output is: ${result}
`);

var result1 = charCheck("I have no notice period on Phobos. I can start immediately.", 50, true);
console.log(`Should return: [false, "I have no notice period on Phobos. I can start imm"].
Output is: ${result1}
`);

var result2 = charCheck("A challenging career moment came with the rapid depletion of water supplies on Phobos.", 80, false);
console.log(`Should return: [true,"AchallengingcareermomentcamewiththerapiddepletionofwatersuppliesonPhobos."]. 
Output is: ${result2}
`);
    */