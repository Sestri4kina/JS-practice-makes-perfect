/**
 * Created by Sestri4kina on 10.01.2017.
 */
var assert = require('assert');
var maxedOut = require('../src/js/codewars-maxed-out');

describe('maxedOut', function(){
    it('returns sum of cubed numbers if it is less than Number.MAX_SAFE_INTEGER', function(){
        assert.equal(maxedOut([1,2]), 9);
        assert.equal(maxedOut([7600,32300,66700,22200,4554,323000,5555]), "You've pushed me to the max!");
    });
});
