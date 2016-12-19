/**
 * Created by Sestri4kina on 19.12.2016.
 *
 * To be a senior, a member must be at least 55 years old and
 * have a handicap greater than 7.
 * In this croquet club, handicaps range from -2 to +26;
 * the better the player the lower the handicap.
 * Input: Input will consist of a list of lists containing two items each.
 * Each list contains information for a single potential member.
 * Information consists of an integer for the person's age and an integer for the person's handicap.
 * Output:  Output will consist of a list of string values
 * (Open or Senior) stating whether the respective member is
 * to be placed in the senior or open category.
 */

function openOrSenior(members){
    var membership = [];
    for (var i = 0; i < members.length; i++){
        var member = (members[i][0] >= 55 && members[i][1] > 7) ? "Senior" : "Open";
        membership.push(member);
    }
    return membership;
}

var result = openOrSenior([[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]);
console.log(`Should return: ["Open", "Open", "Senior", "Open", "Open", "Senior"]. Output is: ${result}`);

var result1 = openOrSenior([[3, 12],[55,1],[91, -2],[54, 23]]);
console.log(`Should return: ['Open', 'Open', 'Open', 'Open']. Output is: ${result1}`);
