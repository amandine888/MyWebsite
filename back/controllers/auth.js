const User = require ('../models/user'); 
const Blacklist = require ('../models/blacklist'); 

bcrypt = require ('bcrypt'); 
jwt = require ('jsonwebtoken'); 
jwt_secret = process.env.JWT_SECRET_KEY; 
adm_login = process.env.ADMIN_LOGIN; 
adm_password = process.env.ADMIN_PASSWORD;  

// Require validation middleware : 

const {registerValidation, loginValidation} = require("../utils/validateAuth"); 

// Register User : 

exports.register = (req, res) => {

    const {error} = registerValidation(req.body); 

    if (error) return res.status(400).json({error})
    console.log({error}); 

    let hash = bcrypt.hashSync(req.body.password, 10);
    req.body.password, (req.body.confirmPassword = hash);
    req.body.admin = false; 

    User.findOne({email: req.body.email}).then((isEmailExist)=>{

        const {error} = registerValidation(req.body); 

        if (isEmailExist) {
            return res.status(400).json({error: "Email already exists",
            });
        } else { 
        let user = new User ({
            pseudo : req.body.pseudo, 
            email : req.body.email,
            password : hash, 
        }); 

        user
        .save()
        .then((data) => {
            res.status(200).json(data)
            console.log("Successful registration !")
        })
        .catch ((err) => {
            res.status(400).json(err); 
            console.log("Wrong registration !")
        });
        }
    })
}

// Login User : 

exports.login = function(req, res){

    const {error} = loginValidation(req.body); 

    if (error) return res.status(400).json({error})
    console.log({error}); 

    User.findOne({email: req.body.email})
        .then((user) => {
            if (!user){
                res.status(201).json({auth: false, message: 'User not found'}); 
            }

            bcrypt.compare(req.body.password, user.password, function(err, result){
                if (result) {
                    let token = jwt.sign({id: user._id, admin: false}, jwt_secret, {expiresIn: '1h'}); 
                    res.status(200).json({auth: true, user: user, token: token}); 
                    console.log("Successful connexion !")
                    console.log(token)
                }
                else {
                    res.status(400).json({auth: false, message: 'Your email or password do not exist'}); 
                }
            });
        })
        .catch((err) => {
            res.status(400).json(err); 
            console.log("Wrong connexion !")
        })
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

    if(req.token){
        
        Blacklist.create({token: req.token}, function(err, result){
            res.status(200).json ("Logout successfully"); 
        })
    }
}


// exports.register = (req, res) => {

//     let hash = bcrypt.hashSync(req.body.password, 10);
//     req.body.password = hash;
//     req.body.admin = false; 

//         let user = new User ({
//             pseudo : req.body.pseudo, 
//             email : req.body.email,
//             password : hash, 
//         }); 

//         if (user.pseudo !== null && user.email !== null && user.password !== null) {
//             user.save(function(err, data){
                
//                 if (err)
//                 res.status(400).json(err)

//                 else 
//                 res.status(200).json(data)
                
//             })
//         }
//     };


// Login User : 

// exports.login = function(req, res){

//     User.findOne({email: req.body.email}, function(err, user){

//         if (err)
//             res.status(400).json({auth: false, message: err}); 

//         else if (!user)
//             res.status(201).json({auth: false, message: 'User not found'}); 

//         else {
//             bcrypt.compare(req.body.password, user.password, function(err, result){
//                 if (result) {
//                     let token = jwt.sign({id: user._id, admin: false}, jwt_secret, {expiresIn: '1h'}); 
//                     res.status(200).json({auth: true, user: user, token: token}); 
                        
//                         console.log(token)
//                 }

//                 else
//                     res.status(400).json({auth: false, message: 'Your email or password do not exist'}); 
//             })
//         }
//     });
// };