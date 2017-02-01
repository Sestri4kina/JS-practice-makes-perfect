/**
 * Created by Sestri4kina on 01.02.2017.
 */
var assert = require('assert');
var oddity = require('../src/js/codewars-odd-even-divisors-amount');

describe('oddity', function(){
    it('returns odd/even depending on an amount of divisors', function(){
        assert.equal(oddity(61804), 'even');
        assert.equal(oddity(9), 'odd');
    });
});
