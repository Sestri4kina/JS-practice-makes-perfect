/**
 * Created by Sestri4kina on 20.12.2016.
 */
var assert = require('assert');
var absoluteSorting = require('../src/js/checkio-absolute-sorting');

describe('absoluteSorting', function() {
    it('returns sorted by absolute values array', function() {
        assert.equal(absoluteSorting([-20, -5, 10, 15]).toString(), [-5, 10, 15, -20].toString(), "Example");
        assert.equal(absoluteSorting([1, 2, 3, 0]).toString(), [0, 1, 2, 3].toString(), "Positive numbers");
        assert.equal(absoluteSorting([-1, -2, -3, 0]).toString(), [0, -1, -2, -3].toString(), "Negative numbers");

    });
});