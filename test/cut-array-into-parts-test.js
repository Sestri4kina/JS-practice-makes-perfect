/**
 * Created by Sestri4kina on 26.02.2017.
 */
var assert = require('assert');
var makeParts = require('../src/js/codewars-cut-array-into-parts.js');

describe('makeParts', function(){
    it('returns an array of arrays chunksize long', function(){
        assert.equal(makeParts([1,2,3,4,5], 2), JSON.stringify([[1,2],[3,4],[5]]));
        assert.equal(makeParts([1,2,3], 1), JSON.stringify([[1],[2],[3]]));
    });
});
