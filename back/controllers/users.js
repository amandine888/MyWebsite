const User = require ('../models/user'); 
const Blacklist = require ('../models/blacklist'); 
Utils = require ('../utils');
bcrypt = require ('bcrypt'); 
jwt = require ('jsonwebtoken'); 
jwt_secret = process.env.JWT_SECRET_KEY; 


// Find a user by id ( user ) : 

exports.getUserById = function (req, res){

        Utils.controlAccess(req.headers["x-access-token"], jwt_secret, function(err, decoded){

            console.log(err); 

            if (err) {
                res.status(401).json('No token provided'); 
                }

            else if ({_id : decoded.id}){

                User.findOne({_id: decoded.id}, function(err, user){
                    if (err)
                        res.status(400).json(err);
                    else
                        res.status(200).json(user);
                })
            }
        })
}

// Find all users ( admin ) : 


exports.getAllUser = function (req, res) {

    jwt.verify(req.headers["x-access-token"], jwt_secret, function (err, decoded){

        if (err){
            console.log (err)
            return ('Route not allowed')
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

    jwt.verify(req.headers["x-access-token"], jwt_secret, function (err, decoded){

        if (err){
            console.log (err)
            return ('Route not allowed')
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

    jwt.verify(req.headers["x-access-token"], jwt_secret, function (err, decoded){

        if (err){
            console.log (err)
            return ('Route not allowed')
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

    jwt.verify(req.headers["x-access-token"], jwt_secret, function (err, decoded){

        if (err){
            console.log (err)
            return ('Route not allowed')
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