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
                res.status(400).json(err)

                else 
                res.status(200).json(data)
                
            })
        }
    };

exports.login = function(req, res){

    User.findOne({email: req.body.email}, function(err, user){

        if (err)
            res.status(400).json({auth: false, message: err}); 

        else if (!user)
            res.status(201).json({auth: false, message: 'No user finded'}); 

        else {
            bcrypt.compare(req.body.password, user.password, function(err, result){
                if (result) {
                    var token = jwt.sign({id: user._id, admin: user.admin}, jwt_secret, {expiresIn: '1h'}); 
                    res.status(200).json({auth: true, token: token}); 
                }

                else
                    res.status(201).json({auth:false, message: 'Password not matched'}); 
            })
        }
    });
}


        // if (data){

        //     bcrypt.compare(req.body.password, data.password, function(err, result){
                
        //         if(result){
        //                 let token = jwt.sign({id: data.id}, 'secretkey', {expiresIn: '1h'}); 
        //                 let response = {user: data, token: token}; 
        //                 res.send(response); 
        //         }

        //         else
        //         res.send(err); 
        //     });
        // }

        // else
        // res.send(err); 
    //})); 
//}