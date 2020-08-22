const mongoose = require ('mongoose'); 

let userSchema = new mongoose.Schema ({
    pseudo: {
        type: 'string', 
        required: [true, 'Please add a pseudo'], 
        max: 255, 
    }, 

    email: {
        type: 'string', 
        required: [true, 'Please add an email'],
        unique: true,
        max: 255,
    }, 

    password: {
        type: 'string', 
        required: [true, 'Please add a password'], 
        min: 8, 
        max: 1024, 
    },

    favId: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Favorite'
    }], 
}) 

module.exports = mongoose.model('User', userSchema); 