const Event = require ('../models/event'); 
bcrypt = require ('bcrypt'); 
jwt = require ('jsonwebtoken'); 
jwt_secret = process.env.JWT_SECRET_KEY; 


// Create a new event ( admin ) : 

exports.createEvent = function (req, res) {

    jwt.verify(req.token, jwt_secret, function (err, decoded){

        if (err){
            console.log (err)
            return ('Route not allowed')
        }  
        
        else if(decoded.admin){
            Event.create(req.body, function(err, newEvent){
                if (err) 
                    res.status (400).json (err)
                else
                    res.status(200).json(newEvent)
                })
            }
        })
    }

// Update an association ( admin ) : 

exports.updateEvent = function (req, res) {

    jwt.verify(req.token, jwt_secret, function (err, decoded){

        if (err){
            console.log (err)
            return ('Route not allowed')
        }  
        
        else if(decoded.admin){
            Event.updateOne({_id: req.body.id}, {$set: req.body}, function(err, data){
                if (err) 
                    res.status (400).json (err)
                else
                    res.status(200).json(data)
                })
            }
        })
    }

// Delete an association ( admin ) : 

exports.deleteEvent = function (req, res) {

    jwt.verify(req.token, jwt_secret, function (err, decoded){

        if (err){
            console.log (err)
            return ('Route not allowed')
        }  
        
        else if(decoded.admin){
            Event.deleteOne({_id: req.body.id}, function(err, data){
                if (err) 
                    res.status (400).json (err)
                else
                    res.status(200).json(data)
                })
            }
        })
    }


// Read an association ( public ) :  

exports.findEventById = function (req, res){

    Event.findOne({_id: req.body.id}, function(err, data){

        if (err)
            res.status(400).json(err)
        else 
            res.status(200).json(data)
    })
}