/**
 * Created by Sestri4kina on 03.01.2017.
 */
var assert = require('assert');
var stringCalculator = require('../src/js/codewars-string-calculator.js');

describe('stringCalculator', function(){
    it('returns sum of list', function(){
        assert.equal(stringCalculator('2, 3'), 5);
        assert.equal(stringCalculator('20, 30, 10'), 60);
    });
});
