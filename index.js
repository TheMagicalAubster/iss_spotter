//index.js (this is where the magic happens?)

const { nextISSTimesForMyLocation } = require('./iss');


const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("Failure was inevitable ", error);
  }
//  console.log(passTimes);
printPassTimes(passTimes);
})






// const { fetchMyIP } = require('./iss');
// const { fetchCoordsByIP } = require('./iss');
// const { nextISSTimesForMyLocation } = require('./iss');

// //fetchMyIP with a callback function to determin error or not
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("Fail, man! ", error);
//     return;
//   }
//   if (response.statusCode !== 200) {
//     const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
//     callback(Error(msg), null);
//     return;
//   }
//   console.log("It worked! Returned IP is: ", ip);
// });

// fetchCoordsByIP('162.157.214.14', (error, coords) => {
//   if (error) {
//     console.log("Fail, man! Where you at?", error);
//     return;
//   }
      
//   console.log("It worked! Returned coords is: ", coords);
// });


// const { fetchISSFlyOverTimes } = require('./iss');


// fetchISSFlyOverTimes({ latitude: '51.13870', longitude: '-114.20150' }, (error, passTimes) => {
//   if (error) {
//     console.log("No funciona! ", error);
//     return;
//   }
//   console.log("Funciona! Las horas son: ", passTimes);

// });

