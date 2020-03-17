// Dépendances : 
const express = require('express'), 
    bodyParser = require ('body-parser'), 
    mongoose = require ('mongoose'),
    bcrypt = require ('bcrypt'), 
    jwt = require ('jsonwebtoken'), 
    app = express (); 

app.use(bodyParser.urlencoded({extended: false}));

// Connection à la base de données : 
mongoose.connect('mongodb://localhost/mywebsite', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

// Récupération des controllers : 
Authcontroller = require ('./controllers/auth'); 

// Route test : 
app.route('/').get(function(req, res){
    res.send('hello world !');
});

// Route register : 
app.route('/register').post(Authcontroller.register); 

// Route login : 
app.route('/login').post(Authcontroller.login); 


// Mise en écoute de notre application (sur le port 3000)
app.listen(3000);