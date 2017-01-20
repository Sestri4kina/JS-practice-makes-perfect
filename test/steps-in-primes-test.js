/**
 * Created by Sestri4kina on 20.01.2017.
 */
var assert = require('assert');
var step = require('../src/js/codewars-steps-in-primes');

describe('step', function(){
    it('returns the first pair of the two prime numbers spaced with a step', function(){
        assert.equal(step(4, 130, 200), [163, 167].toString());
        assert.equal(step(2, 5, 7), [5, 7].toString());
    });
});
