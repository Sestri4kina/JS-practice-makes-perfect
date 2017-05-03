/**
 * Created by Sestri4kina on 03.05.2017.
 */
 let assert = require('assert');
 let removeDuplication = require('../src/js/codewars-remove-duplicates.js');

 describe('removeDuplication', () => {
     it('returns an array without duplicated elements', () => {
         assert.equal(removeDuplication([1,2,3,2,4,6,2,6,7]), [1, 3, 4, 7].toString());
         assert.equal(removeDuplication([1,2,1,2,1,1,2,2]), [].toString());
     });
 });
