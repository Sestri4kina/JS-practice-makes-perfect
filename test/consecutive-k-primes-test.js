/**
 * Created by Sestri4kina on 25.01.2017.
 */
var assert = require('assert');
var consecutiveKPrimes = require('../src/js/codewars-consecutive-k-primes');

describe('consecutiveKPrimes', function(){
    it('returns a number of pairs that have exactly k prime factors', function(){
        assert.equal(consecutiveKPrimes(3, [10158, 10182, 10184, 10172, 10179, 10168, 10156, 10165, 10155, 10161, 10178, 10170]), 5);
        assert.equal(consecutiveKPrimes(2, [10123, 10122, 10132, 10129, 10145, 10148, 10147, 10135, 10146, 10134]), 2);
    });
});