//index.js (this is where the magic happens?)

const { fetchMyIP } = require('./iss');

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