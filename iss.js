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

module.exports = { fetchMyIP };