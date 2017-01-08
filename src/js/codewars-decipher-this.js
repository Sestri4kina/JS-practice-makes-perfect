/**
 * Created by Sestri4kina on 07.01.2017.
 *
 * You are given several secret messages you need to decipher. Here are the conditions:

 The first letter corresponds to ASCII character code (case sensitive)
 The second letter needs to be switched to the last letter
 The last letter needs to be switched to the second letter
 If it only has one letter, it will be unchanged
 If it only has two letters, you will just need to convert the ASCII character code to a letter
 Keepin' it simple -- there are no special characters
 */

function decipherThis(data){
    return data.split(' ').map((x) => {
        var num = x.match(/[0-9]/g).join(''),
            letter = String.fromCharCode( Number(num) );

        var newX = x.replace(num, letter),
            secondLetter = num.length === 2 ? x[2] : x[3],
            lastLetter = x[x.length - 1];
        return newX.length <= 2 ? newX :
        newX.substr(0,1) + lastLetter + newX.substring(2, newX.length - 1) + secondLetter;
    }).join(' ');
}

var result = decipherThis('72olle 103doo 100ya');
console.log(`Should return : 'Hello good day'. Output is: ${result}`);

var result1 = decipherThis('82yade 115te 103o');
console.log(`Should return : 'Ready set go'. Output is: ${result1}`);
/*
more elegant solution:
 return str.split(" ")
 .map(w =>
 w.replace(/^\d+/, c => String.fromCharCode(c))
 .replace(/^(.)(.)(.*)(.)$/, "$1$4$3$2")
 )
 .join(" ")
 */