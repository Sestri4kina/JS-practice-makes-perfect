var promiseResolveSevenSeconds = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("loaded in 7 seconds");
    },7000);
});

var promiseRejectFiveSeconds = new Promise(function(resolve,reject){
    setTimeout(function(){
        reject("error: loading took longer than 5 seconds");
    },5000);
});

Promise.race([promiseResolveSevenSeconds,promiseRejectFiveSeconds]).then(function(result) {
    console.log(result);
}).catch(function(error){
    console.log(error);
});
