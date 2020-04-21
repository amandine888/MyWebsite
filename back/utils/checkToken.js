const Blacklist = require ('../models/blacklist'); 
const jwt = require ('jsonwebtoken'); 
bearerToken = require('express-bearer-token'); 
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
