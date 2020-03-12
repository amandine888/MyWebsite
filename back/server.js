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

// Récupération des models : 

let User = require('./models/user'); 
let Association = require('./models/asso'); 
let Event = require('./models/event'); 
let Favorite = require('./models/favorite'); 
let Tag = require('./models/tag'); 
let Media = require('./models/media'); 