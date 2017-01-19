/**
 * Created by Sestri4kina on 19.01.2017.
 */
var assert = require('assert');
var primeFactors = require('../src/js/codewars-prime-factors');

describe('primeFactors', function(){
    it('returns the prime factors in numerical sequence', function(){
        assert.equal(primeFactors(10), [2, 5].toString());
        assert.equal(primeFactors(8), [2, 2, 2].toString());
    });
});
