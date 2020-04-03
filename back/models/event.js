const mongoose = require ('mongoose'); 

let eventSchema = new mongoose.Schema ({
    nameEvent: {
        type: 'string', 
    },

    dateEvent: { 
        type: Date, 
    },

    description: {
        type: 'string',
    },

    location: [
        {street: { type: 'string'}, }, 
    ], 

    tags: [], 
})

module.exports = mongoose.model ('Event', eventSchema); 