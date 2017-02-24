const studyJSPromises = time => new Promise((resolve) => {
    setTimeout(resolve, time);
});

studyJSPromises(1000)
    .then(() => console.log(`level of understanding: 
        Hello World!`))
    .then(() => new Promise(res => res('practice makes perfect')))
    .then(x => x)
    .then(y => console.log(`${y}: 
        it works but i am not sure why`))
    .then(() => new Promise(res => res('time to dig deeper')))
    .then(x => x)
    .then(y => console.log(`${y}: 
        it works because i designed it that way`))
    .then(() => console.log(`next level: 
        reading jokes about promises i am actually laughing ;)`));
