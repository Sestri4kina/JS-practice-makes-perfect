/**
 * Created by Sestri4kina on 01.01.2017.
 */
var assert = require('assert');
var reduceByRules = require('../src/js/codewars-reduce-by-rules');

describe('reduceByRules', function(){
    it('returns ', function(){
        assert.equal(reduceByRules([2.0, 2.0, 2.0, 2.0, 2.0], [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b]), 6.0, '1st test');
        assert.equal(reduceByRules([8.0, 8.1, 4.1, 12.0, 2.0], [(a, b) => Math.min(a, b), (a, b) => Math.max(a, b)]), 8.0, '2nd test');
    });
});
