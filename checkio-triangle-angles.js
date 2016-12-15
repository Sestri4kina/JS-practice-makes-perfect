/*
 * Created by Sestri4kina on 15.12.2016.
 *
 * The Angles of a Triangle
 * You are given the lengths for each side on a triangle.
 * You need to find all three angles for this triangle.
 * If the given side lengths cannot form a triangle (or form a degenerated triangle),
 * then you must return all angles as 0 (zero).
 * The angles should be represented as a list of integers in ascending order.
 * Each angle is measured in degrees and rounded to the nearest integer number (Standard mathematical rounding).
 *
 * Input: The lengths of the sides of a triangle as integers.
 * Output: Angles of a triangle in degrees as sorted list of integers.
 * How it is used: This is a classical geometric task.
 * The ideas can be useful in topography and architecture.
 * With this concept you can measure an angle without the need for a protractor.
 * Precondition: 0 < a,b,c ≤ 1000
 */

function triangleAngles(a, b, c){
    if ( a + b <= c || a + c <= b || b + c <= a) { //checking if a triangle with such sides exists
        return [0, 0, 0];
    } else {
        let alpha, beta, gamma; //angles of a triangle
        alpha = Math.round( Math.acos((b*b + c*c - a*a)/(2*b*c))*(180/Math.PI) );
        beta = Math.round( Math.acos((a*a + c*c - b*b)/(2*a*c))*(180/Math.PI) );
        gamma = Math.round( Math.acos((b*b + a*a - c*c)/(2*b*a))*(180/Math.PI) );
        let angles = [alpha, beta, gamma];
        return angles.sort(function(a, b){return a-b});
    }
}

let result = triangleAngles(2, 2, 5);
console.log(`Should return: 0, 0, 0. Output is: ${result}`);

let result1 = triangleAngles(2, 2, 2);
console.log(`Should return: 60, 60, 60. Output is: ${result1}`);

let result2 = triangleAngles(3, 4, 5);
console.log(`Should return: 37, 53, 90. Output is: ${result2}`);