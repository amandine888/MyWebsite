const mongoose = require ('mongoose'); 

let userSchema = new mongoose.Schema ({
    pseudo: {
        type: "string", 
        required: [true, "Please add a pseudo"],
        min: 3, 
        max: 30, 
    }, 

    email: {
        type: "string", 
        required: [true, "Please add an email"],
        unique: true,
        max: 255,
    }, 

    password: {
        type: "string", 
        required: [true, "Please add a password"], 
        min: 8, 
        max: 1024, 
    },

    favId: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Favorite'
    }], 
}) 

module.exports = mongoose.model('User', userSchema);