const User = require ('../models/user'); 
Utils = require ('../utils');
bcrypt = require ('bcrypt'); 
jwt = require ('jsonwebtoken'); 
bearerToken = require('express-bearer-token');
jwt_secret = process.env.JWT_SECRET_KEY; 


// Find a user by id ( user ) : 

exports.getUserById = function (req, res){

        Utils.controlAccess(req.token, jwt_secret, function(err, decoded){

            console.log(err); 

            if (err) {
                res.status(401).json(err); 
                }

            else if (decoded.id){

                User.findOne({_id: decoded.id}, function(err, user){
                    if (err)
                        res.status(400).json(err);
                    else
                        res.status(200).json(user);
                        console.log(decoded)
                })
            }
        })
}

// exports.getUserById = function (req, res){

//     jwt.verify(req.token, jwt_secret, function(err, decoded){
//         console.log(err); 
//         if (err) {
//                 res.status(401).json('No token provided'); 
//             }
//             else {
//                 User.findOne({_id: decoded.id}, function(err, user){
//                     if (err)
//                         res.status(400).json(err);
//                     else
//                         res.status(200).json(user);
//                 })
//             }
//     })
// } 

// Find all users ( admin ) : 


exports.getAllUser = function (req, res) {

    Utils.controlAccess(req.headers["x-access-token"], jwt_secret, function (err, decoded){

        if (err){
            console.log (err)
            res.status(401).json(err);
        }  
        
        else if(decoded.admin){
            User.find({}, function(err, user){
                if (err) 
                    res.status (400).json (err)
                else
                    res.status(200).json(user)
                })
            }
        })
    }

// Update user's pseudo ( user ) : 

exports.updateUser = function (req, res) {

    Utils.controlAccess(req.headers["x-access-token"], jwt_secret, function (err, decoded){

        if (err){
            console.log (err)
            res.status(401).json(err);
        }

        else if ({_id : decoded.id}){
            User.updateOne({_id: decoded.id}, {$set:{pseudo: req.body.pseudo}}, function(err, user){
                if (err) 
                    res.status (400).json (err)
                else
                    res.status(200).json(user)
            })
        }
    })
}

// Delete an user ( admin ) : 

exports.deleteUser = function (req, res) {

    Utils.controlAccess(req.headers["x-access-token"], jwt_secret, function (err, decoded){

        if (err){
            console.log (err)
            res.status(401).json(err);
        }  
        
        else if(decoded.admin){
            User.deleteOne({_id: decoded.id}, function(err, user){
                if (err) 
                    res.status (400).json (err)
                else
                    res.status(200).json(user)
                })
            }
        })
    }

// Find all user's favorites ( user ) : 

exports.getFavUser = function (req, res) {

    Utils.controlAccess(req.token, jwt_secret, function (err, decoded){

        if (err){
            console.log (err)
            res.status(401).json(err);
        }

        else if ({_id : decoded.id}){
            User.findOne({_id: decoded.id}).populate('favId[]').exec(function(err, user){
                if (err)
                    res.status(400).json(err)
                else 
                    res.status(200).json(user)
            })
        }
    })
}