/**
 * Created by Sestri4kina on 11.12.2016.
 * This is the same test as measuring-performance.js
 * rewritten with the ES6 class syntax.
 */


class SpeedTestClass {
    constructor (testImplement, testParams, repetitions) {
        this.testImplement = testImplement;
        this.testParams = testParams;
        this.repetitions = repetitions || 10000;
        this.average = 0;
    }
    startTest() {
        var beginTime, endTime, sumTimes = 0;
        for(var i = 0, x = this.repetitions; i < x; i++) {
            beginTime = + new Date();
            this.testImplement(this.testParams);
            endTime = + new Date();
            sumTimes += endTime - beginTime;
        }
        this.average = sumTimes / this.repetitions;
        console.log(this.average);
        return document.getElementById('performance-class-approach').innerHTML = "Average execution across " + this.repetitions + " repetitions: " + this.average + " milliseconds.";
    }
}

function Gryffindor (name, age) {
    this.name = name;
    this.age = age;
}

var hogwartsNewbs = ['Harry', 'Ron', 'Hermione'];
var hogwartsGryffindors = ["all Gryffindor students"];
var listsForTests = [hogwartsNewbs, hogwartsGryffindors];

var BP = function( listOfParams ){
    for(var i = 0, x = listOfParams[0].length; i < x; i++){
        listOfParams[1].push(new Gryffindor(listOfParams[0][i], 1));
    }
};

var ClassTest = new SpeedTestClass(BP, listsForTests, 100000);
ClassTest.startTest();
