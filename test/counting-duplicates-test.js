/**
 * Created by Sestri4kina on 04.01.2017.
 */
var assert = require('assert');
var duplicateCount = require('../src/js/codewars-counting-duplicates');

describe('duplicateCount', function(){
    it('returns a count of duplicate symbols', function(){
        assert.equal(duplicateCount("aabbcde"), 2);
        assert.equal(duplicateCount("Indivisibility"), 1);
        assert.equal(duplicateCount(""), 0);
    });
});
