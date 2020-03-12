const mongoose = require ('mongoose'); 

let userSchema = new mongoose.Schema ({
    firstname: {
        type: 'string', 
    }, 

    lastname: {
        type: 'string', 
    },

    pseudo: {
        type: 'string', 
        required: 'You have to choose a pseudo', 
    }, 

    email: {
        type: 'string', 
        required: 'You have ton enter an email', 
        unique: 'true', 
    }, 

    password: {
        type: 'string', 
        required: 'You have to enter a password', 
    },

    role: {
        admin: 'boolean', 
    }, 

    favId: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Favorite'
    }], 
}) 

module.exports = mongoose.model('User', userSchema); 