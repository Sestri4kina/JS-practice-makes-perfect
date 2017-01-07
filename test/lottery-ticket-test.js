/**
 * Created by Sestri4kina on 07.01.2017.
 */
var assert = require('assert');
var bingo = require('../src/js/codewars-lottery-ticket');

 describe('bingo', function(){
     it('returns "Winner!" or "Loser!"', function(){
         assert.equal(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2), 'Loser!');
         assert.equal(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1), 'Winner!');
         assert.equal(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3), 'Loser!');
     });
 });
