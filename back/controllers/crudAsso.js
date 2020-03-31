const Asso = require ('../models/asso'); 
bcrypt = require ('bcrypt'); 
jwt = require ('jsonwebtoken'); 
jwt_secret = process.env.JWT_SECRET_KEY; 


// Create a new association ( admin ) : 

exports.createAsso = function (req, res) {

    jwt.verify(req.token, jwt_secret, function (err, decoded){

        if (err){
            console.log (err)
            return ('Route not allowed')
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

    jwt.verify(req.token, jwt_secret, function (err, decoded){

        if (err){
            console.log (err)
            return ('Route not allowed')
        }  
        
        else if(decoded.admin){
            Asso.updateOne({_id: req.body.id}, {$set: req.body}, function(err, data){
                if (err) 
                    res.status (400).json (err)
                else
                    res.status(200).json(data)
                })
            }
        })
    }

// Delete an association ( admin ) : 

exports.deleteAsso = function (req, res) {

    jwt.verify(req.token, jwt_secret, function (err, decoded){

        if (err){
            console.log (err)
            return ('Route not allowed')
        }  
        
        else if(decoded.admin){
            Asso.deleteOne({_id: req.body.id}, function(err, data){
                if (err) 
                    res.status (400).json (err)
                else
                    res.status(200).json(data)
                })
            }
        })
    }


// Read an association ( public ) :  

exports.findAssoById = function (req, res){

    Asso.findOne({_id: req.body.id}, function(err, data){

        if (err)
            res.status(400).json(err)
        else 
            res.status(200).json(data)
    })
}


