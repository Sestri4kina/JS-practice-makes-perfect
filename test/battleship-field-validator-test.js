/**
 * Created by Sestri4kina on 02.04.2017.
 */
let assert = require('assert');
let validateBattlefield = require('../src/js/codewars-battleship-field-validator');

describe('validateBattlefield', () => {
    it('returns true if a field is valid', () => {
        assert.equal(validateBattlefield(
                        [[1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
                         [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
                         [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
                         [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                         [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                         [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]), true);
      });
});
