/**
 * Created by Sestri4kina on 21.01.2017.
 */
var assert = require('assert');
var sumTriangularNumbers = require('../src/js/codewars-sum-triangular-numbers');

describe('sumTriangularNumbers', function(){
    it('returns the sum of Triangular Numbers', function(){
        assert.equal(sumTriangularNumbers(6), 56);
        assert.equal( sumTriangularNumbers(943), 140205240);
    });
});
