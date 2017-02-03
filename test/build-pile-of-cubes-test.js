/**
 * Created by Sestri4kina on 03.02.2017.
 */
var assert = require('assert');
var findNb = require('../src/js/codewars-build-pile-of-cubes');

describe('findNb', function(){
    it('returns an integer that is an amount of cubes', function(){
        assert.equal(findNb(4183059834009), 2022);
        assert.equal(findNb(40539911473216), 3568);
    });
});