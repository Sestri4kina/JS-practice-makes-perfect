/**
 * Created by Sestri4kina on 21.03.2017.
 */
var assert = require('assert');
var digPow = require('../src/js/codewars-playing-with-digits');

describe('digPow', function() {
    it('returns a number', function() {
        assert.equal(digPow(89, 1), 1);
        assert.equal(digPow(46288, 3), 51);
    });
});
