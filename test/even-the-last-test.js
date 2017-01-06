/**
 * Created by Sestri4kina on 06.01.2017.
*/
var assert = require('assert');
var evenLast = require('../src/js/checkio-even-the-last.js');

describe('evenLast', function(){
    it('returns sum of the elements with even indexes multiplied by the final element', function(){
        assert.equal(evenLast([0, 1, 2, 3, 4, 5]), 30);
        assert.equal(evenLast([]) ,0);
        assert.equal( evenLast([0, 2, 4, 7]), 28);
    });
});