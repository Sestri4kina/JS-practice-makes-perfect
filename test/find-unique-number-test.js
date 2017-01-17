/**
 * Created by Sestri4kina on 17.01.2017.
 */
var assert = require('assert');
var findUniq = require('../src/js/codewars-find-unique-number');

describe('findUniq', function(){
    it('returns unique number in a sequence', function(){
        assert.equal(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
        assert.equal(findUniq([ 0, 0, 0.55]), 0.55);
    });
});
