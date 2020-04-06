const Tag = require ('../models/tag'); 
bcrypt = require ('bcrypt'); 
jwt = require ('jsonwebtoken'); 
jwt_secret = process.env.JWT_SECRET_KEY; 

// Create a new tag ( admin ) : 

exports.createTag = function (req, res) {

    jwt.verify(req.headers["x-access-token"], jwt_secret, function (err, decoded){

        if (err){
            console.log (err)
            return ('Route not allowed')
        }  
        
        else if(decoded.admin){
            let tag = new Tag ({
                libelle : req.body.libelle, 
                eventId : [req.body.id],
                assoId : [req.body.id]
            }); 

            tag.save(function(err, newTag){
                if (err) 
                    res.status (400).json (err)
                else
                    res.status(200).json(newTag)
                })
            }
        })
    }

// Update a tag ( admin ) : 

exports.updateTag = function (req, res) {

    jwt.verify(req.headers["x-access-token"], jwt_secret, function (err, decoded){

        if (err){
            console.log (err)
            return ('Route not allowed')
        }  
        
        else if(decoded.admin){
            Tag.updateOne({_id: req.body.id}, {$set: req.body.libelle}, function(err, tag){
                if (err) 
                    res.status (400).json (err)
                else
                    res.status(200).json(tag)
                })
            }
        })
    }

// Delete a tag ( admin ) : 

exports.deleteTag = function (req, res) {

    jwt.verify(req.headers["x-access-token"], jwt_secret, function (err, decoded){

        if (err){
            console.log (err)
            return ('Route not allowed')
        }  
        
        else if(decoded.admin){
            Tag.deleteOne({_id: req.body.id}, function(err, tag){
                if (err) 
                    res.status (400).json (err)
                else
                    res.status(200).json(tag)
                })
            }
        })
    }

// Find a tag by id ( public )

exports.findTagById = function (req, res){

    Tag.findOne({_id: req.body.id}, function (err, tag){

        if (err)
            res.status(400).json(err)
        else 
            res.status(200).json(tag)

    })
}

// Find a tag by name ( public ) : 

exports.findTagByName = function (req, res){

    Tag.findOne({libelle : req.body.libelle}, function (err, tag){

        if (err)
            res.status(400).json(err)
        else 
            res.status(200).json(tag)
    })
}

// Find all tags ( public ) : 

exports.findAllTags = function (req, res){

    Tag.find({}, function(err, tag){

        if (err)
            res.status(400).json(err)
        else 
            res.status(200).json(tag)
    })
}

// Find all associations into a tag by id : 

exports.findTagAsso = function (req, res){

    Tag.findOne({_id: req.body.id}).populate('assoId[]').exec(function(err, tag){
        if (err)
            res.status(400).json(err)
        else 
            res.status(200).json(tag)
    })
}