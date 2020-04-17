const Asso = require ('../models/asso'); 
const geoCoder = require ('../utils/geocoder'); 
Utils = require ('../utils/checkToken');
bcrypt = require ('bcrypt'); 
jwt = require ('jsonwebtoken'); 
jwt_secret = process.env.JWT_SECRET_KEY;


// Create a new association ( admin ) : 

exports.createAsso = function (req, res) {

    Utils.controlAccess(req.token , jwt_secret, function (err, decoded){
        // console.log ("decoded:".decoded)
        // console.log("headers", req.headers)

        if (err){
            res.status(401).json(err);
        }  
        
        else if(decoded.admin){
            Asso.create(req.body, function(err, newAsso){
                
                if (err) 
                    res.status (400).json (err)
                else
                    res.status(200).json(newAsso)
                })
            }
        })
    }

// Update an association ( admin ) : 

exports.updateAsso = function (req, res) {

    Utils.controlAccess(req.token, jwt_secret, function (err, decoded){

        if (err){
            console.log (err)
            res.status(401).json(err); 
        }  
        
        else if(decoded.admin){
            Asso.updateOne({_id: req.body.id}, {$set: req.body}, function(err, asso){
                if (err) 
                    res.status (400).json (err)
                else
                    res.status(200).json(asso)
                })
            }
        })
    }

// Update an association by name ( admin ) : 

exports.updateNameAsso = function (req, res) {

    Utils.controlAccess(req.token, jwt_secret, function (err, decoded){

        if (err){
            console.log (err)
            res.status(401).json(err); 
        }

        else if (decoded.admin){
            Asso.updateOne({_id: req.body.id}, {$set:{nameAsso: req.body.nameAsso}}, function(err, asso){
                if (err) 
                    res.status (400).json (err)
                else
                    res.status(200).json(asso)
            })
        }
    })
}

// Delete an association ( admin ) : 

exports.deleteAsso = function (req, res) {

    Utils.controlAccess(req.token, jwt_secret, function (err, decoded){

        if (err){
            console.log (err)
            res.status(401).json(err); 
        }  
        
        else if(decoded.admin){
            Asso.deleteOne({_id: req.body.id}, function(err, asso){
                if (err) 
                    res.status (400).json (err)
                else
                    res.status(200).json(asso)
                })
            }
        })
    }


// Find an association by id ( public ) :  

exports.findAssoById = function (req, res){

    Asso.findOne({_id: req.body.id}, function(err, asso){

        if (err)
            res.status(400).json(err)
        else 
            res.status(200).json(asso)
    })
}

// Find all associations ( public ) : 

exports.findAllAsso = function (req, res) {

    Asso.find({}, function(err, asso){

        if (err)
            res.status(400).json(err)
        else 
            res.status(200).json(asso)
    })
}

// Find an association by name ( public ) : 

exports.findAssoName = function (req, res) {

    Asso.findOne({nameAsso : req.body.nameAsso}, function(err, asso){

        if (err)
            res.status(400).json(err)
        else 
            res.status(200).json(asso)
    })
}

// Find associations by tag ( public ) : 

exports.findAssoTag = function (req, res) {

    Asso.find({tags:[req.body.tags]}, function(err, asso){

        if (err)
            res.status(400).json(err)
        else 
            res.status(200).json(asso)
    })
}

