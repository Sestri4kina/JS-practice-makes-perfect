/**
 * Created by Sestri4kina on 20.12.2016.
 *
 * Simple, given a string of words, return the length of the shortest word(s).
 * String will never be empty and you do not need to account for different data types.
 */

function findShortest(data) {
    //var newData = data.split(' ');
    return (data.split(' ').map( x => x.length ).sort( (a,b) => a-b ))[0];
}

var result = findShortest("bitcoin take over the world maybe who knows perhaps");
console.log(`Should return: 3. Output is: ${result}`);

var result1 = findShortest("turns out random test cases are easier than writing out basic ones");
console.log(`Should return: 3. Output is: ${result1}`);

/*
That's the first time that I find my solution the most elegant amongst all the others.
 */
