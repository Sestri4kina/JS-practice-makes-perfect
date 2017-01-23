/**
 * Created by Sestri4kina on 23.01.2017.
 */
var assert = require('assert');
var countPairsInt = require('../src/js/codewars-numbers-same-amount-divisors');

describe('countPairsInt', function(){
    it('returns a number of pairs that have the same amount of divisors', function(){
        assert.equal(countPairsInt(1, 50), 8);
        assert.equal(countPairsInt(3, 100), 7);
    });
});
