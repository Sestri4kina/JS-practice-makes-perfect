/**
 * Created by Sestri4kina on 13.02.2017.
 *
 * https://www.codewars.com/kata/simple-fun-number-111-reverse-brackets/javascript
 */
function reverseParentheses(s) {
    var tmpArr = s.split(''),
        indices = [];
    tmpArr.forEach((x, index) => {if (x == '(' || x == ')') indices.push(index) });
    var beforePart = indices[0] != 0 ? tmpArr.slice(0, indices[0]).join('') : '',
        afterPart = indices[indices.length-1] != tmpArr.length-1 ?
            tmpArr.slice(indices[indices.length-1]+1).join('') : '';

    if (indices.length == 4) {
        let innerStr = tmpArr.slice(indices[1], indices[2]+1).join(''),
            outerStr = tmpArr.slice(indices[0], indices[3]+1).join(''),
            interim = outerStr.replace(innerStr, "0")
                .split('').reverse()
                .join('')
                .replace("0", innerStr)
                .replace(/[\(\)]/g, '');
        return `${beforePart}${interim}${afterPart}`;
    } else if (indices.length == 2) {
        let interim =   tmpArr.slice(indices[0], indices[1]+1)
            .reverse()
            .join('')
            .replace(/[\(\)]/g, '');
        return `${beforePart}${interim}${afterPart}`;
    }
}

var result = reverseParentheses("a(bc)de");
console.log(`Should return: "acbde". Output is: ${result}
`);

var result3 = reverseParentheses("a(bcdefghijkl(mno)p)q");
console.log(`Should return: "apmnolkjihgfedcbq". Output is: ${result3}
`);

var result1 = reverseParentheses("Code(Cha(lle)nge)");
console.log(`Should return: "CodeegnlleahC". Output is: ${result1}
`);

/*
 var result4 = reverseParentheses("xxNy(Gh(ST(V(iFnndM)SPjjN(nJdthFagYl))TnPO)a(XjKAa(NQPS(pRrE)Q)X)fea)");
 console.log(`Should return: 'xxNyaefXjKAaQpRrESPQNXaSTnJdthFagYlNjjPSiFnndMVTnPOhG'. Output is: ${result4}
 `);

 var result5 = reverseParentheses("(NOnGBHr(eNWjEYUjf(dFdqYkO)))yVClp");
 console.log(`Should return: 'eNWjEYUjfOkYqdFdrHBGnONyVClp'. Output is: ${result5}
 `);


 */
