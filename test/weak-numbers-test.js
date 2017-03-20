/**
 * Created by Sestri4kina on 20.03.2017.
 */
var assert = require('assert');
var weakNumbers = require('../src/js/codewars-weak-numbers');

describe('weakNumbers', function() {
    it('returns biggest weakness and an amount of numbers with such weakness', function() {
        assert.equal(weakNumbers(500), [403,1].toString());
        assert.equal(weakNumbers(9), [2,2].toString());
    });
});
