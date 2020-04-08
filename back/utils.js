const Blacklist = require ('./models/blacklist'); 
jwt = require ('jsonwebtoken'); 


exports.controlAccess = function (token, jwt_secret, callback){
    
    jwt.verify(token, jwt_secret, function(err, decoded){
        if (err)
            callback(err, decoded); 
        
        else{

            Blacklist.findOne({token: token}, function(err, blacklisted){
                if(blacklisted)
                    callback("token blacklisted", decoded); 
                else    
                    callback(err, decoded); // modif err au lieu de null
            })
        }
    })
}
