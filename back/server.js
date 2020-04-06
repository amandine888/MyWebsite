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
Assocontroller = require ('./controllers/crudAsso'); 
Eventcontroller = require ('./controllers/crudEvent');
Tagcontroller = require ('./controllers/crudTag'); 


// Route test : 
app.route('/').get(function(req, res){
    res.send('hello world !');
});

// Authentification : 

// Route register : 
app.route('/register').post(Authcontroller.register); 

// Route login : 
app.route('/login').post(Authcontroller.login);  

// Route admin login : 
app.route('/adminlogin').post(Authcontroller.logAdmin);

// Route to find an user by Id : 
app.route('/userid').get(Userscontroller.getUserById); 


// Association : 

// Route to create a new association : 
app.route('/newasso').post(Assocontroller.createAsso); 

// Route to find an association by id : 
app.route('/assobyid').get(Assocontroller.findAssoById);

// Route to find all association : 
app.route('/assoall').get(Assocontroller.findAllAsso); 

// Route to find an association by name : 
app.route('/assoname').get(Assocontroller.findAssoName); 

// Route to find an association by tag : 
app.route('/assotag').get(Assocontroller.findAssoTag); 

// Route to update an association by id : 
app.route('/changeasso').put(Assocontroller.updateAsso); 

// Route to update the name of an association by id : 
app.route('/changenameasso').put(Assocontroller.updateNameAsso); 

// Route to delete an association by id : 
app.route('/deleteasso').delete(Assocontroller.deleteAsso); 



// Event : 

// Route to create a new event : 
app.route('/newevent').post(Eventcontroller.createEvent); 

// Route to find an event by id : 
app.route('/eventbyid').get(Eventcontroller.findEventById);

// Route to find all events : 
app.route('/eventall').get(Eventcontroller.findAllEvent); 

// Route to find an event by name : 
app.route('/eventname').get(Eventcontroller.findEventName); 

// Route to find events by tags : 
app.route('/eventbytag').get(Eventcontroller.findEventTag);

// Route to find events by date : 
app.route('/eventbydate').get(Eventcontroller.findEventbyDate); 

// Route to update an event by id : 
app.route('/changevent').put(Eventcontroller.updateEvent); 

// Route to delete an event by id : 
app.route('/deletevent').delete(Eventcontroller.deleteEvent); 


// Tag : 

// Route to create a new tag : 
app.route('/newtag').post(Tagcontroller.createTag); 

// Route to find a tag by id : 
app.route('/tagbyid').get(Tagcontroller.findTagById); 

// Route to find all tags : 
app.route('/tagall').get(Tagcontroller.findAllTags); 

// route to find a tag by name : 
app.route('/tagbyname').get(Tagcontroller.findTagByName); 

// route to find a tag by id and get all associations linked : 
app.route('/tagasso').get(Tagcontroller.findTagAsso); 

// Route to update a tag : 
app.route('/changetag').put(Tagcontroller.updateTag);

// Route to delete a tag : 
app.route('/deletetag').delete(Tagcontroller.deleteTag); 

// Application listening (on port 3050, declared above)
app.listen(port);