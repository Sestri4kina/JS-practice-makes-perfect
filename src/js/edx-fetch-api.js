let fetch = require('node-fetch'),
    URL = "https://jsonplaceholder.typicode.com/users";

          //res contains a Response object
fetch(URL).then( res => {
              if (res.ok) {
                  return res.json();
              }  else {
                  console.log(res.status)
                  return Promise.reject(res.status);
              }
          })
          //for every object email is logged
          .then( val => { val.forEach( x => { console.log(x["email"]); })})
          //handles the rejected promise
          .catch( err => { console.log("Error: " +  err); })
