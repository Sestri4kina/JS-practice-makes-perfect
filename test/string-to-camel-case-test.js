/**
 * Created by Sestri4kina on 14.01.2017.
 */
var assert = require('assert');
var toCamelCase = require('../src/js/codewars-string-to-camel-case');

describe('toCamelCase', function(){
    it('returns came-cased word', function(){
        assert.equal(toCamelCase("the-stealth-warrior"), "theStealthWarrior");
        assert.equal(toCamelCase("The_Stealth_Warrior"), "TheStealthWarrior");
    });
});
