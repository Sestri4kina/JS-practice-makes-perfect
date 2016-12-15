/**
 * Created by Sestri4kina on 12.12.2016.
 */

let user = {
    name: 'Alex',
    age: 28,
    isStudent: true
};

user[Symbol.iterator] = function(){
    let properties = Object.keys(this);
    let count = 0;
    let isDone = false;

    let next = () => {
        if(count >= properties.length) {
            isDone = true;
        }
        let value = this[properties[count++]];
        return {done: isDone, value};
    }
    return { next };
};

for (let feature of user) {
    let element = document.getElementById('es6-iterator');
    let spanElement = document.createElement('span');
    let text = document.createTextNode(`${feature} `);
    spanElement.appendChild(text);
    element.appendChild(spanElement);
}