/**
 * Created by Sestri4kina on 10.03.2017.
 */
var assert = require('assert');
var nextBigger = require('../src/js/codewars-bigger-number-same-digits');

describe('nextBigger', function() {
    it('returns the closest bigger number compounded from the same digits', function() {
        assert.equal(nextBigger(2017), 2071);
        assert.equal(nextBigger(790), 907);
        assert.equal(nextBigger(111), -1);

    });
});
