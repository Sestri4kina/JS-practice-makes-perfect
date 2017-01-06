/**
 * Created by Sestri4kina on 06.01.2017.
 */
var assert = require('assert');
var mostNumbers = require('../src/js/checkio-most-numbers');

describe('mostNumbers', function(){
    it('returns the difference between the maximum and minimum element', function(){
        assert.equal(mostNumbers(10.2, -2.2, 0, 1.1, 0.5), 12.4);
        assert.equal(mostNumbers(), 0);
        assert.equal(mostNumbers(5, -5), 10);
    });
});
