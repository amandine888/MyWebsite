// Dépendencies : 

const express = require('express'), 
    bodyParser = require ('body-parser'), 
    mongoose = require ('mongoose'),
    bcrypt = require ('bcrypt'), 
    jwt = require ('jsonwebtoken'), 
    cors = require('cors'),
    bearerToken = require('express-bearer-token'),
    port = 3050; 
    app = express (); 
    require('dotenv').config();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); 
app.use(cors()); 
app.use(bearerToken()); 

// Database connexion : 
mongoose.connect('mongodb://localhost/mywebsite', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

// Controller recovery : 
Authcontroller = require ('./controllers/auth'); 
Userscontroller = require ('./controllers/users'); 

// Route test : 
app.route('/').get(function(req, res){
    res.send('hello world !');
});

// Route register : 
app.route('/register').post(Authcontroller.register); 

// Route login : 
app.route('/login').post(Authcontroller.login);  

// Route to find one user by Id : 

app.route('/userid').get(Userscontroller.getUserById); 

// Application listening (on port 3050, declared above)
app.listen(port);