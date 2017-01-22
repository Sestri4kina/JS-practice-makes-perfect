/**
 * Created by Sestri4kina on 22.01.2017.
 */
var assert = require('assert');
var primeFactors = require('../src/js/codewars-primes-in-numbers');

describe('primeFactors', function(){
    it('returns a string "(p1**n1)(p2**n2)...(pk**nk)"', function(){
        assert.equal(primeFactors(7775460), "(2**2)(3**3)(5)(7)(11**2)(17)");
        assert.equal(primeFactors(86240), "(2**5)(5)(7**2)(11)");
    });
});
