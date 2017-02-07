/**
 * Created by Sestri4kina on 07.02.2017.
 */
var assert = require('assert');
var vodkaConsumption = require('../src/js/codewars-vodka-festival');

describe('vodkaConsumption', function(){
    it('returns the total capacity of consumed shots', function(){
        assert.equal(vodkaConsumption(["40ml","5.5l"]), '5540ml');
        assert.equal(vodkaConsumption(["500ml","2l","1.4l"]), '3900ml');
    });
});
