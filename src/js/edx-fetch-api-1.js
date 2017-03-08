var fetch = require('node-fetch'),
    femaleUrl = 'https://randomuser.me/api/?gender=female&results=1',
    maleUrl = 'https://randomuser.me/api/?gender=male&results=1';

var femaleParticipant = fetch(femaleUrl)
          .then(response => { return response.json(); })
          .catch(error => { console.log(error); }),
    maleParticipant = fetch(maleUrl)
         .then(response => { return response.json(); })
         .catch(error => { console.log(error); });

var participants = {"femaleParticipant": {}, "maleParticipant": {}};

Promise.all([femaleParticipant, maleParticipant])
    .then(values => {
        participants["femaleParticipant"] = values[0];
        participants["maleParticipant"] = values[1];
        return participants;
    })
    .then(data => { console.log(data); })
    .catch(error => { console.log(error); })
