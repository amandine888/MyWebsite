const mongoose = require ('mongoose'); 

let eventSchema = new mongoose.Schema ({
    nameEvent: {
        type: 'string', 
    },

    dateEvent: {
        type: '',
    },

    description: {
        type: '',
    },

    location: [
        {street: { type: 'string'}, }, 
    ]
})

module.exports = mongoose.model ('Event', eventSchema); 