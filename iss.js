const request = require('request');

const fetchMyIP = function(callback) {
    let urlIP = 'https://api.ipify.org?format=json';
    request(urlIP, function(error, response, body) {
        // console.log('URL IP IS RIGHT HERE ', urlIP);

        if (error) {
            return callback(error, null);
        }
        const stringIP = JSON.parse(body).ip; //getting the ip value of the object and turning it into a string
        console.log("string IP is here ", stringIP);

    });
    
};

const fetchCoordsByIP = function(stringIP, callback) {
    let coordsIP = 'https://ipvigilante.com/162.157.214.14';
    request(coordsIP, function(error, response, body) {

        if (error) {
            callback(error, null);
            return;
        }

        if (response.statusCode !== 200) {
            const msg = `Status Code ${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
            callback(Error(msg), null);
            return;
          }

          const { latitude, longitude } = JSON.parse(body).data;

          callback(null, { latitude, longitude });
        // const information = JSON.parse(body);
        // // console.log('information is here: ', information);
        // const latitude = JSON.parse(body).data.latitude; 
        // const longitude = JSON.parse(body).data.longitude;
        // console.log("Coordinates are here ", latitude, longitude);


    });

};

module.exports = { fetchMyIP, fetchCoordsByIP };
// module.exports = { fetchCoordsByIP };