/**
 * Created by Sestri4kina on 24.01.2017.
 */
var assert = require('assert');
var findMissingTerm = require('../src/js/codewars-missing-term-arithmetic-progression');

describe('findMissingTerm', function(){
    it('returns a missing term in an arithmetic progression', function(){
        assert.equal( findMissingTerm([ -12, -17, -22, -27, -37, -42 ]), -32);
        assert.equal(findMissingTerm([ 1, -5, -8 ]), -2);
    });
});