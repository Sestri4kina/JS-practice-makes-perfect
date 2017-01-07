/**
 * Created by Sestri4kina on 07.01.2017.
 */
var assert = require('assert');
var triangleAngles = require('../src/js/checkio-triangle-angles');

describe('triangleAngles', function(){
    it('returns ', function(){
        assert.equal(triangleAngles(2, 2, 5), [0, 0, 0].toString());
        assert.equal(triangleAngles(2, 2, 2), [60, 60, 60].toString());
        assert.equal(triangleAngles(3, 4, 5), [37, 53, 90].toString());
    });
});