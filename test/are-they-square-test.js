/**
 * Created by Sestri4kina on 07.01.2017.
 */
var assert = require('assert');
var isSquare = require('../src/js/codewars-are-they-square');

describe('isSquare', function(){
    it('returns true, false or undefined whether all arrays elements are squared numbers', function(){
        assert.equal(isSquare([1, 4, 9, 16, 25, 36]), true);
        assert.equal(isSquare([1, 2, 3, 4, 5, 6]), false);
        assert.equal(isSquare([]), undefined);
    });
});