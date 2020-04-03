const Event = require ('../models/event'); 
bcrypt = require ('bcrypt'); 
jwt = require ('jsonwebtoken'); 
jwt_secret = process.env.JWT_SECRET_KEY; 


// Create a new event ( admin ) : 

exports.createEvent = function (req, res) {

    jwt.verify(req.headers["x-access-token"], jwt_secret, function (err, decoded){

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

// Update an event ( admin ) : 

exports.updateEvent = function (req, res) {

    jwt.verify(req.headers["x-access-token"], jwt_secret, function (err, decoded){

        if (err){
            console.log (err)
            return ('Route not allowed')
        }  
        
        else if(decoded.admin){
            Event.updateOne({_id: req.body.id}, {$set: req.body}, function(err, event){
                if (err) 
                    res.status (400).json (err)
                else
                    res.status(200).json(event)
                })
            }
        })
    }

// Delete an event ( admin ) : 

exports.deleteEvent = function (req, res) {

    jwt.verify(req.headers["x-access-token"], jwt_secret, function (err, decoded){

        if (err){
            console.log (err)
            return ('Route not allowed')
        }  
        
        else if(decoded.admin){
            Event.deleteOne({_id: req.body.id}, function(err, event){
                if (err) 
                    res.status (400).json (err)
                else
                    res.status(200).json(event)
                })
            }
        })
    }


// Find an event ( public ) :  

exports.findEventById = function (req, res){

    Event.findOne({_id: req.body.id}, function(err, event){

        if (err)
            res.status(400).json(err)
        else 
            res.status(200).json(event)
    })
}

// Find all events ( public ) : 

exports.findAllEvent = function (req, res) {

    Event.find({}, function(err, event){

        if (err)
            res.status(400).json(err)
        else 
            res.status(200).json(event)
    })
}

// Find an event by name ( public ) : 

exports.findEventName = function (req, res) {

    Event.findOne({nameAsso : req.body.nameEvent}, function(err, event){

        if (err)
            res.status(400).json(err)
        else 
            res.status(200).json(event)
    })
}

// Find events by tag ( public ) : 

exports.findEventTag = function (req, res) {

    Event.find({tags:[req.body.tags]}, function(err, event){

        if (err)
            res.status(400).json(err)
        else 
            res.status(200).json(event)
    })
}

// Find events by date ( public) : 

exports.findEventbyDate = function (req, res) {

    Event.find({dateEvent: Date}, function(err, event){
        if (err)
            res.status(400).json(err)
        else 
            res.status(200).json(event)
    })
}