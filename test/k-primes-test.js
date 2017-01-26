/**
 * Created by Sestri4kina on 26.01.2017.
 */
var assert = require('assert');
var countKprimes = require('../src/js/codewars-k-primes');

describe('countKprimes', function(){
    it('returns an array of the k-primes between start and end ', function(){
        assert.equal(countKprimes(5, 500, 600), [500, 520, 552, 567, 588, 592, 594].toString());
        assert.equal(countKprimes(7, 0, 143), [128].toString());
    });
});
