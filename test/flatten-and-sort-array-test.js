/**
 * Created by Sestri4kina on 29.04.2017.
 */
 let assert = require('assert');
 let flattenAndSort = require('../src/js/codewars-flatten-and-sort-array.js');

 describe('flattenAndSort', () => {
     it('returns a flattened and sorted array', () => {
         assert.equal(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9].toString());
         assert.equal(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), [1, 2, 3, 4, 5, 6, 100].toString());
     });
 });
