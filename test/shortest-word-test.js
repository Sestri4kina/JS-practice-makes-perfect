/**
 * Created by Sestri4kina on 21.12.2016.
 */

var assert = require('assert');
var findShortest = require('../src/js/codewars-shortest-word');

describe('findShortest', function() {
    it('returns the length of the shortest wordt', function() {
        assert.equal(findShortest("bitcoin take over the world maybe who knows perhaps"), 3, "Output is 3");
        assert.equal(findShortest("hello world"), 5, "Output is 5");
    });
});
