/**
 * Created by Sestri4kina on 22.12.2016.
 */
var assert = require('assert');
var tribonacci = require('../src/js/codewars-tribonacci-sequence');

describe('tribonacci', function() {
    it('returns the first n elements signature included', function() {
        assert.equal(tribonacci([1,1,1],10).toString(), [1,1,1,3,5,9,17,31,57,105].toString(), "1st test");
        assert.equal(tribonacci([0.5,0.5,0.5],6).toString(), [0.5,0.5,0.5,1.5,2.5,4.5].toString(), "2nd test");
        assert.equal(tribonacci([300,200,100],0).toString(), "[]", "3rd test");

    });
});
