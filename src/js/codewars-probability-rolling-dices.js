/**
 * Created by Sestri4kina on 25.01.2017.
 */
function rolldiceSumProb(num, dices) {
    var events = [];
    if (num > 6 * dices) return 0;
    if (dices == 2) {
        for (var i = 1; i <= 6; i++) {
            for (var j = 1; j <= 6; j++) {
                if (i+j == num){ events.push([i,j]) }
            }
        }
    }
    if (dices == 3) {
        for (var i = 1; i < 7; i++) {
            for (var j = 1; j < 7; j++) {
                for (var k = 1; k < 7; k++) {
                    if (i+j+k == num){ events.push([i,j,k]) }
                }
            }
        }
    }
    if (dices == 4) {
        for (var i = 1; i < 7; i++) {
            for (var j = 1; j < 7; j++) {
                for (var k = 1; k < 7; k++) {
                    for(var x = 1; x < 7; x++){
                        if (i+j+k+x == num){ events.push([i,j,k,x]) }
                    }
                }
            }
        }
    }
    if (dices == 5) {
        for (var i = 1; i < 7; i++) {
            for (var j = 1; j < 7; j++) {
                for (var k = 1; k < 7; k++) {
                    for(var x = 1; x < 7; x++){
                        for (var y = 1; y < 7; y++){
                            if (i+j+k+x+y == num){ events.push([i,j,k,x,y]) }
                        }
                    }
                }
            }
        }
    }
   return events.length / Math.pow(6, dices);
}

var result = rolldiceSumProb(11, 2);
console.log(`Should return: 0.055555555555. Output is: ${result}
`);

var result1 = rolldiceSumProb(8, 2);
console.log(`Should return: 0.13888888889. Output is: ${result1}
`);

var result2 = rolldiceSumProb(8, 3);
console.log(`Should return: 0.0972222222222. Output is: ${result2}
`);

/*
more elegant solution:
1.
 function rolldiceSumProb(arr, totalSides){
 if (arr<totalSides || arr>totalSides*6) return 0;
 if (totalSides===0) return 1;
 let p = 0;
 for (let i=1; i<=6; i++) p += rolldiceSumProb(arr-i, totalSides-1);
 return p/6;
 }
2.
 function rolldiceSumProb(sum, n){
 var all = [0];

 while (n--) {
 all = all.reduce((a,b) => a.concat([1,2,3,4,5,6].map(d => d + b)), [])
 }
 return all.filter(a => a == sum).length / all.length;
 }
 */