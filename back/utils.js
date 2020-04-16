const Blacklist = require ('./models/blacklist'); 
const jwt = require ('jsonwebtoken'); 
bearerToken = require('express-bearer-token'); 
const NodeGeocoder = require('node-geocoder');
require('dotenv').config();

// Method Check token / token blacklisted : 

exports.controlAccess = function (token, jwt_secret, callback){

    jwt.verify(token, jwt_secret, function(err, decoded){
        if (err)
            callback(err, decoded); 
        
        else{

            Blacklist.findOne({token: token}, function(err, blacklisted){
                if(blacklisted)
                    callback("token blacklisted", decoded); 
                else    
                    callback(null, decoded); 
            })
        }
    })
}; 

// Method call geocoder : 

const options = {
    provider : process.env.GEO_API_PROVIDER, 
    apiKey : process.env.GEO_API_KEY, 
    formatter : null, 
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder; 