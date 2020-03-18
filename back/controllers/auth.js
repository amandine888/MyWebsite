const User = require ('../models/user'); 
bcrypt = require ('bcrypt'); 
jwt = require ('jsonwebtoken'); 
jwt_secret = process.env.JWT_SECRET_KEY; 

exports.register = function(req, res){

    let hash = bcrypt.hashSync(req.body.password, 10);
        req.body.password = hash;

        let user = new User ({
            pseudo : req.body.pseudo, 
            email : req.body.email,
            password : hash, 
        }); 

        if (user.pseudo !== null && user.email !== null && user.password !== null) {
            user.save(function(err, data){
                
                if (err)
                res.send(err)

                if (data)
                res.send(data)
            })
        }
    };

exports.login = function(req, res){

    User.findOne({email: req.body.email}, (function(err, data){

        if (data){

            bcrypt.compare(req.body.password, data.password, function(err, result){
                
                if(result){
                        let token = jwt.sign({id: data.id}, 'secretkey', {expiresIn: '1h'}); 
                        let response = {user: data, token: token}; 
                        res.send(response); 
                }

                else
                res.send(err); 
            });
        }

        else
        res.send(err); 
    })); 
}