/**
 * Created by Sestri4kina on 24.01.2017.
 */
var assert = require('assert');
var findMissingLetter = require('../src/js/codewars-find-missing-letter');

describe('findMissingLetter', function(){
    it('returns a missing letter in a sequence of consecutive letters', function(){
        assert.equal(findMissingLetter(['a','b','c','d','f']), 'e');
        assert.equal(findMissingLetter(['O','Q','R','S']), 'P');
    });
});
