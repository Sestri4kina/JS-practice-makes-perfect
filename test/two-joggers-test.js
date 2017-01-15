/**
 * Created by Sestri4kina on 15.01.2017.
 */
var assert = require('assert');
var numberOfLaps = require('../src/js/codewars-two-joggers');

describe('numberOfLaps', function(){
    it('returns numbers of laps for two joggers to meet at starting point', function(){
        assert.equal(numberOfLaps(3, 5), [5, 3].toString());
        assert.equal(numberOfLaps(6, 4), [2, 3].toString());
    });
});
