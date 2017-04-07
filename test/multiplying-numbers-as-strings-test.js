/**
 * Created by Sestri4kina on 07.04.2017.
 */
let assert = require('assert');
let multiply = require('../src/js/codewars-multiplying-numbers-as-strings');

describe('multiply', () => {
    it('returns a product of two big numbers as a string', () => {
        assert.equal(multiply("9007199254740991", "9007199254740991"), "81129638414606663681390495662081");
        assert.equal(multiply("1020303004875647366210", "2774537626200857473632627613"), "2830869077153280552556547081187254342445169156730");
      });
});
