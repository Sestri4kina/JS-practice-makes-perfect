/**
 * Created by Sestri4kina on 23.12.2016.
 */

var assert = require('assert');
var maskify = require('../src/js/codewars-credit-card-mask.js');

describe('maskify', function(){
    it('returns ', function(){
        assert.equal(maskify("4556364607935616"), '############5616', '1st test');
        assert.equal(maskify("1"), '1', '2nd test');
        assert.equal(maskify("Skippy"), '##ippy', '3rd test');
    });
});
