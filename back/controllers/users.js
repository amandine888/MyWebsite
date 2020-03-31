const User = require ('../models/user'); 
bcrypt = require ('bcrypt'); 
jwt = require ('jsonwebtoken'); 
jwt_secret = process.env.JWT_SECRET_KEY; 


exports.getUserById = function (req, res){

        jwt.verify(req.token, jwt_secret, function(err, decoded){
            console.log(err); 
            if (err) {
                    res.status(401).json('No token provided'); 
                }
                else {
                    User.findOne({user: decoded.id}, function(err, user){
                        if (err)
                            res.status(400).json(err);
                        else
                            res.status(200).json(user);
                    })
                }
        })
}