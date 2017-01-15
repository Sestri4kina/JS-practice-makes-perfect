/**
 * Created by Sestri4kina on 15.01.2017.
 *
 * Given a string, return a new string that has transformed based on the input:
 **  Change case of every character, ie. lower case to upper case, upper case to lower case.
 **  Reverse the order of words from the input.
 */
function changeCase(word){
    return word.split('').map(x => {
        return x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase();
    }).join('');
}

function stringTransformer(str){
    return str.split(' ').map(x => {return changeCase(x)}).reverse().join(' ');
}

var result = stringTransformer('Example string');
console.log(`Should return: 'STRING eXAMPLE'. Output is: ${result}
`);

var result1 = stringTransformer('STRING eXAMPLE');
console.log(`Should return: 'Example string'. Output is: ${result1}
`);
