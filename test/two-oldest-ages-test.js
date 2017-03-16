/**
 * Created by Sestri4kina on 16.03.2017.
 */
var assert = require('assert');
var twoOldestAges = require('../src/js/codewars-two-oldest-ages');

describe('twoOldestAges', function() {
    it('returns two oldest ages from an array', function() {
        assert.equal(twoOldestAges([1, 2, 10, 8]), [8, 10].toString());
        assert.equal(twoOldestAges([1, 12, 19, 8, 15, 32]), [19, 32].toString());
    });
});
