//index.js (this is where the magic happens?)

const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');

//fetchMyIP with a callback function to determin error or not
fetchMyIP((error, ip) => {
  if (error) {
    console.log("Fail, man! ", error);
    return;
  }
  if (response.statusCode !== 200) {
    const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
    callback(Error(msg), null);
    return;
  }
  console.log("It worked! Returned IP is: ", ip);
});

fetchCoordsByIP('162.157.214.14', (error, coords) => {
  if (error) {
    console.log("Fail, man! Where you at?", error);
    return;
  }
      
  console.log("It worked! Returned coords is: ", coords);
});


const { fetchISSFlyOverTimes } = require('./iss');

    
fetchISSFlyOverTimes({ latitude: '51.13870', longitude: '-114.20150' }, (error, passTimes) => {
  if (error) {
    console.log("No funciona! ", error);
    return;
  }
  console.log("Funciona! Las horas son: ", passTimes);

});