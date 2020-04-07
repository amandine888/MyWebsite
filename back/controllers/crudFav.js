const Favorite = require ('../models/favorite'); 
Utils = require ('../utils');
bcrypt = require ('bcrypt'); 
jwt = require ('jsonwebtoken'); 
jwt_secret = process.env.JWT_SECRET_KEY;


// Create a new fav ( user ) : 

exports.newFav = function (req, res) {

    Utils.controlAccess(req.headers["x-access-token"], jwt_secret, function (err, decoded){

        if (err){
            console.log (err)
            res.status(401).json(err); 
        }  
        
        else if({_id: decoded.id}){

            let fav = new Favorite ({
                userId : [req.body.id], 
                eventId : [req.body.id],
                assoId : [req.body.id],
                tagId : [req.body.id]
            }); 

            fav.save(function(err, newfav){

                if (err) 
                    res.status (400).json (err)
                else
                    res.status(200).json(newfav)
                })
            }
        })
}

// Delete a favorite ( user ) : 

exports.deleteFav = function (req, res) {

    Utils.controlAccess(req.headers["x-access-token"], jwt_secret, function (err, decoded){

        if (err){
            console.log (err)
            res.status(401).json(err); 
        }  
        
        else if({_id : decoded.id}){

            Favorite.deleteOne({_id: req.body.id}, function(err, fav){

                if (err) 
                    res.status (400).json (err)
                else
                    res.status(200).json(fav)
                })
            }
        })
    }

// Delete all favorites ( user ) : 

exports.deleteAllFav = function (req, res) {

    Utils.controlAccess(req.headers["x-access-token"], jwt_secret, function (err, decoded){

        if (err){
            console.log (err)
            res.status(401).json(err); 
        }  
        
        else if({_id : decoded.id}){

            Favorite.deleteMany({}, function(err, fav){

                if (err) 
                    res.status (400).json (err)
                else
                    res.status(200).json(fav)
                })
            }
        })
    }

// Count all favorites ( user ) : 

exports.countFav =  function (req, res) {

    Utils.controlAccess(req.headers["x-access-token"], jwt_secret, function (err, decoded){

        if (err){
            console.log (err)
            res.status(401).json(err); 
        }  
        
        else if({_id : decoded.id}){

            Favorite.count({}, function(err, fav){

                if (err) 
                    res.status (400).json (err)
                else
                    res.status(200).json(fav)
                })
            }
        })
}

// Count the associations in favorite ( user ) : 

exports.countAssoFav =  function (req, res) {

    Utils.controlAccess(req.headers["x-access-token"], jwt_secret, function (err, decoded){

        if (err){
            console.log (err)
            res.status(401).json(err); 
        }  
        
        else if({_id : decoded.id}){

            Favorite.count({assoId: req.body['assoId[]']}, function(err, fav){

                if (err) 
                    res.status (400).json (err)
                else
                    res.status(200).json(fav)
                })
            }
        })
}


// Count the events in favorite ( user ) : 

exports.countEventFav =  function (req, res) {

    Utils.controlAccess(req.headers["x-access-token"], jwt_secret, function (err, decoded){

        if (err){
            console.log (err)
            res.status(401).json(err); 
        }  
        
        else if({_id : decoded.id}){

            Favorite.count({eventId: req.body['eventId[]']}, function(err, fav){

                if (err) 
                    res.status (400).json (err)
                else
                    res.status(200).json(fav)
                })
            }
        })
}

// Find the associations saved in favorite ( user ) : 

exports.getAssoInFav =  function (req, res) {

    Utils.controlAccess(req.headers["x-access-token"], jwt_secret, function (err, decoded){

        if (err){
            console.log (err)
            res.status(401).json(err); 
        }  
        
        else if({_id : decoded.id}){

            Favorite.find({assoId: req.body['assoId[]']}, function(err, fav){

                if (err) 
                    res.status (400).json (err)
                else
                    res.status(200).json(fav)
                })
            }
        })
}

// Find the events saved in favorite ( user ) : 

exports.getEventInFav =  function (req, res) {

    Utils.controlAccess(req.headers["x-access-token"], jwt_secret, function (err, decoded){

        if (err){
            console.log (err)
            res.status(401).json(err); 
        }  
        
        else if({_id : decoded.id}){

            Favorite.find({eventId: req.body['eventId[]']}, function(err, fav){

                if (err) 
                    res.status (400).json (err)
                else
                    res.status(200).json(fav)
                })
            }
        })
}
