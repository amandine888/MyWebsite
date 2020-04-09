const User = require ('../models/user'); 
const Blacklist = require ('../models/blacklist'); 
bcrypt = require ('bcrypt'); 
jwt = require ('jsonwebtoken'); 
jwt_secret = process.env.JWT_SECRET_KEY; 
adm_login = process.env.ADMIN_LOGIN; 
adm_password = process.env.ADMIN_PASSWORD;  

// Register User : 

exports.register = function(req, res){

    let hash = bcrypt.hashSync(req.body.password, 10);
    req.body.password = hash;
    req.body.admin = false; 

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

// Login User : 

exports.login = function(req, res){

    User.findOne({email: req.body.email}, function(err, user){

        if (err)
            res.status(400).json({auth: false, message: err}); 

        else if (!user)
            res.status(201).json({auth: false, message: 'User not found'}); 

        else {
            bcrypt.compare(req.body.password, user.password, function(err, result){
                if (result) {
                    let token = jwt.sign({id: user._id, admin: false}, jwt_secret, {expiresIn: '1h'}); 
                    res.status(200).json({auth: true, user: user, token: token}); 
                        
                        console.log(token)
                }

                else
                    res.status(400).json({auth: false, message: 'Your email or password do not exist'}); 
            })
        }
    });
};


// Login Admin : 

exports.logAdmin = function(req, res){
    
    if (req.body.name == adm_login && req.body.password == adm_password) {
        let token = jwt.sign({id: null, admin: true}, jwt_secret); 
        res.status(200).json({auth: true, token: token});
    }

    else
        res.status (400).json ({auth: false, message: "Wrong name or password"});
}

// Log Out : 

exports.logout = function (req, res){

    if(req.headers["x-access-token"]){
        
        Blacklist.create({token: req.headers["x-access-token"]}, function(err, result){
            res.status(200).json ("Logout successfully"); 
        })
    }
}