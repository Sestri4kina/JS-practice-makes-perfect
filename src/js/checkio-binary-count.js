/**
 * Created by Sestri4kina on 17.12.2016.
 *
 * You are given a number (a positive integer).
 * You should convert it to the binary format and
 * count how many unities (1) are in the number spelling.
 * For example: 5 = 0b101 contains two unities, so the answer is 2.
 * Input: A number as a positive integer.
 * Output: The quantity of unities in the binary form as an integer.
 * How it is used: How to convert a number to the binary form.
 * It can be useful for Computer Science purposes.
 * Precondition: 0 < number ≤ 232
 *
 */

function binaryCount(number){
    var data = number.toString(2).split('');
    var count = 0;
    for (var i = 0; i < data.length; i++){
        if (data[i] == 1){
            count++;
        }
    }
    return count;
}

var result = binaryCount(10);
console.log(`Should return: 2. Output is: ${result}`);

var result1 = binaryCount(15);
console.log(`Should return: 4. Output is: ${result1}`);

/*
More elegant solution
 function binaryCount(number){
    return number.toString(2).replace(/0/g, '').length;
 }
 */