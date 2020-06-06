const request = require('request');

const nextISSTimesForMyLocation = function(callback) {
    fetchMyIP((error, ip) => {
      if (error) {
        return callback(error, null);
      }
  
      fetchCoordsByIP(ip, (error, loc) => {
        if (error) {
          return callback(error, null);
        }
  
        fetchISSFlyOverTimes(loc, (error, nextPasses) => {
          if (error) {
            return callback(error, null);
          }
  
          callback(null, nextPasses);
        });
      });
    });
  };

  const fetchMyIP = function(callback) {
    request('https://api.ipify.org?format=json', (error, response, body) => {
      if (error) return callback(error, null);
  
      if (response.statusCode !== 200) {
        callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
        return;
      }
  
      const ip = JSON.parse(body).ip;
      callback(null, ip);
    });
  };

  const fetchCoordsByIP = function(ip, callback) {
    request(`https://ipvigilante.com/json/${ip}`, (error, response, body) => {
      if (error) {
        callback(error, null);
        return;
      }
  
      if (response.statusCode !== 200) {
        callback(Error(`Status Code ${response.statusCode} when fetching Coordinates for IP: ${body}`), null);
        return;
      }
  
      const { latitude, longitude } = JSON.parse(body).data;
      // console.log('lat/lng data:', { latitude, longitude });
  
      callback(null, { latitude, longitude });
    });
  };
  
  const fetchISSFlyOverTimes = function(coords, callback) {
    const url = `http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`;
  
    request(url, (error, response, body) => {
      if (error) {
        callback(error, null);
        return;
      }
  
      if (response.statusCode !== 200) {
        callback(Error(`Status Code ${response.statusCode} when fetching ISS pass times: ${body}`), null);
        return;
      }
  
      const passes = JSON.parse(body).response;
      callback(null, passes);
    });
  };

  module.exports = { nextISSTimesForMyLocation };











// const request = require('request');

// const fetchMyIP = function(callback) {
//   let urlIP = 'https://api.ipify.org?format=json';
//   request(urlIP, function(error, response, body) {
//     // console.log('URL IP IS RIGHT HERE ', urlIP);

//     if (error) {
//       return callback(error, null);
//     }
//     const stringIP = JSON.parse(body).ip; //getting the ip value of the object and turning it into a string
//     console.log("string IP is here ", stringIP);

//   });
    
// };

// const fetchCoordsByIP = function(stringIP, callback) {
//   let coordsIP = 'https://ipvigilante.com/162.157.214.14';
//   request(coordsIP, function(error, response, body) {

//     if (error) {
//       callback(error, null);
//       return;
//     }
//     if (response.statusCode !== 200) {
//       const msg = `Status Code ${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
//       callback(Error(msg), null);
//       return;
//     }
//     const { latitude, longitude } = JSON.parse(body).data;
//     callback(null, { latitude, longitude });
//     // const information = JSON.parse(body);// console.log('information is here: ', information); // const latitude = JSON.parse(body).data.latitude; // const longitude = JSON.parse(body).data.longitude; // console.log("Coordinates are here ", latitude, longitude);
//   });
// };

// const fetchISSFlyOverTimes = function(coords, callback) {
//   let coordsURL = `http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`;

//   request(coordsURL, function(error, response, body) {
//     if (error) { //if errors, yadda yadda
//       callback(error, null);
//       return;
//     }
//     if (response.statusCode !== 200) {
//       const msg = `Status Code ${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
//       callback(Error(msg), null);
//       return;
//     }
//     //here we put things to get the flyover times
//     const flyoverTimes = JSON.parse(body).response;
//     callback(null, flyoverTimes);
//   });
// };


// const nextISSTimesForMyLocation = function(callback) {

// }

// module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation };
// // module.exports = { fetchCoordsByIP };