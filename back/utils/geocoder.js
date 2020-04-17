const NodeGeocoder = require('node-geocoder');
require('dotenv').config();

// Method call geocoder : 

const options = {
    provider : process.env.GEO_API_PROVIDER, 
    apiKey : process.env.GEO_API_KEY, 
    formatter : null, 
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder; 