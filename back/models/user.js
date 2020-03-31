const mongoose = require ('mongoose'); 

let userSchema = new mongoose.Schema ({
    pseudo: {
        type: 'string', 
        required: 'You have to choose a pseudo', 
    }, 

    email: {
        type: 'string', 
        required: 'You have ton enter an email', 
        unique: true
    }, 

    password: {
        type: 'string', 
        required: 'You have to enter a password', 
    },

    favId: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Favorite'
    }], 
}) 

module.exports = mongoose.model('User', userSchema); 