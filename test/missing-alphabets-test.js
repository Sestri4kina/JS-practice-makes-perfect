/**
 * Created by Sestri4kina on 24.04.2017.
 */
 let assert = require('assert');
 let missingAlphabets = require('../src/js/codewars-missing-alphabets.js');

 describe('missingAlphabets', () => {
     it('returns a string of missing letters depending on a alphabet', () => {
         assert.equal(missingAlphabets("codewars"), "bfghijklmnpqtuvxyz");
         assert.equal(missingAlphabets("abbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxy"), "ayzz");
     });
 });
